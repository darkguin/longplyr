import { PlayerModule } from "@/types";
import { EventEmitter } from "@/modules/events-emmiter";
import { FullscreenMode } from "@/modules/fullscreen-mode/fullscreen";
import { nanoid } from "nanoid";
import { Reactivity } from "@/modules/reactivity";
import { Lifecycle, LifecycleHook } from "@/modules/lifecycle";

class Player {
  private static modules_: PlayerModule[] = [];
  readonly id: string;
  readonly $el: HTMLMediaElement;
  readonly $containerEl: HTMLElement;

  constructor(mediaEl: HTMLMediaElement, containerEl: HTMLElement) {
    this.id = `player-${nanoid(10)}`;
    this.$el = mediaEl;
    this.$containerEl = containerEl;

    Player.modules_.forEach((module) => module.moduleFunc(this));

    this._triggerHook(LifecycleHook.CREATED);
  }

  static installModule(module: PlayerModule) {
    if (!!module && Player.modules_.indexOf(module) < 0) {
      Player.modules_.push(module);
    }
  }

  static use(modules: PlayerModule[]) {
    modules.forEach((m) => Player.installModule(m));
    return Player;
  }

  dispose() {
    Player.modules_.forEach((module) => module.dispose());
    this._triggerHook(LifecycleHook.BEFORE_DISPOSED);
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
