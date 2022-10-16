import { PlayerModuleFunc } from "@/core/models";
import { EventEmitter } from "@/modules/events-emmiter";
import { FullscreenMode } from "@/modules/fullscreen-mode/fullscreen";
import { nanoid } from "nanoid";
import { Reactivity } from "@/modules/reactivity";

class Player {
  constructor(mediaEl: HTMLMediaElement, containerEl: HTMLElement) {
    this.id = `player-${nanoid(10)}`;
    this.$el = mediaEl;
    this.$containerEl = containerEl;

    Player.modules_.forEach((moduleFunc) => moduleFunc(this));
  }

  private static modules_: PlayerModuleFunc[] = [];
  readonly id: string;
  readonly $el: HTMLMediaElement;
  readonly $containerEl: HTMLElement;

  static installModule(moduleFunc: PlayerModuleFunc) {
    if (!!moduleFunc && Player.modules_.indexOf(moduleFunc) < 0) {
      Player.modules_.push(moduleFunc);
    }
  }

  static use(modules: PlayerModuleFunc[]) {
    modules.forEach((m) => Player.installModule(m));
    return Player;
  }

  togglePlay() {
    this.$el.paused || this.$el.ended ? this.$el.play() : this.$el.pause();
  }
}

type CoreModules = EventEmitter & FullscreenMode & Reactivity;

interface Player extends CoreModules {
  [key: string]: unknown;
}

Player.use([EventEmitter, Reactivity, FullscreenMode]);

export default Player;
