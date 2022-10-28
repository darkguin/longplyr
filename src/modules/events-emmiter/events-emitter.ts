import { usePlayerExtend } from "@/utils/usePlayerExtend";
import { useModule } from "@/utils";

export type EventMap = HTMLMediaElementEventMap;

export const EventEmitter = useModule(({ player }) => {
  usePlayerExtend({
    on<E extends keyof EventMap>(event: E | E[], listener: (ev: EventMap[E]) => any) {
      if (!Array.isArray(event)) {
        event = [event];
      }
      event.forEach((e) => player.$el.addEventListener(e, listener));
      return player;
    },

    once<E extends keyof EventMap>(event: E, listener: (ev: EventMap[E]) => any) {
      const onceListener = (ev: EventMap[E]) => {
        player.off(event, onceListener);
        return listener(ev);
      };
      return player.on(event, onceListener);
    },

    off<E extends keyof EventMap>(event: E | E[], listener: (ev: EventMap[E]) => any) {
      if (!Array.isArray(event)) {
        event = [event];
      }
      event.forEach((e) => player.$el.removeEventListener(e, listener));
      return player;
    },
  });
});

export interface EventEmitter {
  on<E extends keyof EventMap>(
    event: string | string[] | E | E[],
    listener: (ev: EventMap[E]) => any,
  ): this;

  once<E extends keyof EventMap>(event: string | E, listener: (ev: EventMap[E]) => any): this;

  off<E extends keyof EventMap>(
    event: string | string[] | E | [],
    listener: (ev: EventMap[E]) => any,
  ): this;
}
