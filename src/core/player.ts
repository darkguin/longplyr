import { PlayerModule } from "@/types";
import { EventEmitter } from "@/modules/events-emmiter";
import { FullscreenMode } from "@/modules/fullscreen-mode/fullscreen";
import { Reactivity } from "@/modules/reactivity";
import { Lifecycle, LifecycleHook } from "@/modules/lifecycle";
import { createUUID } from "@/utils";
import { MediaProvider } from "@/core/provider";

type PlayerCore = EventEmitter & FullscreenMode & Reactivity & Lifecycle;

interface Player extends PlayerCore {
  [key: string]: unknown;
}

class Player {
  private static modules_: PlayerModule[] = [];
  private static providers_: MediaProvider[] = [];
  readonly id: string;
  readonly $el: HTMLMediaElement;
  readonly $containerEl: HTMLElement;
  private readonly currentMediaProvider?: MediaProvider;

  constructor(mediaEl: HTMLMediaElement, containerEl: HTMLElement) {
    this.id = createUUID("player");
    this.$el = mediaEl;
    this.$containerEl = containerEl;

    Player.modules_.forEach((module) => module.moduleFunc(this));
    this._triggerHook(LifecycleHook.CREATED);
  }

  static use(modules: PlayerModule[]) {
    modules.forEach((m) => Player.installModule(m));
    return Player;
  }

  static useProviders(providers: MediaProvider[]) {
    providers.forEach((p) => Player.installProvider(p));
    return Player;
  }

  private static installModule(module: PlayerModule) {
    if (!!module && Player.modules_.indexOf(module) < 0) {
      Player.modules_.push(module);
    }
  }

  private static installProvider(provider: MediaProvider) {
    if (!!provider && Player.providers_.indexOf(provider) < 0) {
      Player.providers_.push(provider);
    }
  }

  dispose() {
    Player.providers_.forEach((provider) => provider.dispose());
    Player.modules_.forEach((module) => module.dispose());
    this._triggerHook(LifecycleHook.BEFORE_DISPOSED);
    this._clearHooks();
  }

  togglePlay() {
    this.$el.paused || this.$el.ended ? this.$el.play() : this.$el.pause();
  }
}

Player.use([EventEmitter, Reactivity, FullscreenMode, Lifecycle]);

export default Player;
