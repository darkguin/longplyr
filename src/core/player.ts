import { PlayerModule } from "@/types";
import { EventEmitter } from "@/modules/events-emmiter";
import { FullscreenMode } from "@/modules/fullscreen-mode/fullscreen";
import { nanoid } from "nanoid";
import { Reactivity } from "@/modules/reactivity";
import { Lifecycle } from "@/modules/lifecycle";

class Player {
  constructor(mediaEl: HTMLMediaElement, containerEl: HTMLElement) {
    this.id = `player-${nanoid(10)}`;
    this.$el = mediaEl;
    this.$containerEl = containerEl;

    Player.modules_.forEach((module) => module.moduleFunc(this));
  }

  private static modules_: PlayerModule[] = [];
  readonly id: string;
  readonly $el: HTMLMediaElement;
  readonly $containerEl: HTMLElement;

  static installModule(module: PlayerModule) {
    if (!!module && Player.modules_.indexOf(module) < 0) {
      Player.modules_.push(module);
    }
  }

  static use(modules: PlayerModule[]) {
    modules.forEach((m) => Player.installModule(m));
    return Player;
  }

  togglePlay() {
    this.$el.paused || this.$el.ended ? this.$el.play() : this.$el.pause();
  }
}

type CoreModules = EventEmitter & FullscreenMode & Reactivity & Lifecycle;

interface Player extends CoreModules {
  [key: string]: unknown;
}

Player.use([EventEmitter, Reactivity, FullscreenMode, Lifecycle]);

export default Player;
