import { PlayerModuleFunc } from "@/core/models";
import { EventMap, EventEmitter } from "@/modules/events-emmiter/events-emitter";
import { v4 as uuid } from "uuid";

class Player {
  private static modules_: PlayerModuleFunc[] = [];

  readonly id: string;
  readonly $el: HTMLMediaElement;
  readonly $containerEl: HTMLDivElement;

  get currentTime(): number {
    return this.$el.currentTime;
  }

  set currentTime(value: number) {
    this.$el.currentTime = value;
  }

  get duration(): number {
    return this.$el.duration;
  }

  get played(): TimeRanges {
    return this.$el.played;
  }

  get paused(): boolean {
    return this.$el.paused;
  }

  constructor(mediaEl: HTMLMediaElement, containerEl: HTMLDivElement) {
    this.id = `player-${uuid()}`;
    this.$el = mediaEl;
    this.$containerEl = containerEl;

    Player.modules_.forEach((moduleFunc) => moduleFunc(this));
  }

  play(): Promise<void> {
    return this.$el.play();
  }

  pause() {
    this.$el.pause();
  }

  togglePlay() {
    this.paused ? this.play() : this.pause();
  }

  static installModule(moduleFunc: PlayerModuleFunc) {
    if (!!moduleFunc && Player.modules_.indexOf(moduleFunc) < 0) {
      Player.modules_.push(moduleFunc);
    }
  }

  static use(modules: PlayerModuleFunc[]) {
    modules.forEach((m) => Player.installModule(m));
    return Player;
  }
}

interface Player {
  on<E extends keyof EventMap>(event: E, listener: (ev: EventMap[E]) => any): this;
  once<E extends keyof EventMap>(event: E, listener: (ev: EventMap[E]) => any): this;
  off<E extends keyof EventMap>(event: E, listener: (ev: EventMap[E]) => any): this;
}

export function usePlayerExtend(prototypes: { [key: string]: any }) {
  Object.keys(prototypes).forEach((protoMethod: string) => {
    (Player.prototype as any)[protoMethod] = prototypes[protoMethod];
  });
}

Player.use([EventEmitter]);

export default Player;
