import { usePlayerExtend } from "@/utils/usePlayerExtend";
import { useModule } from "@/utils";
import { Fn, useEventListener } from "@vueuse/core";

export type EventMap = HTMLMediaElementEventMap;
export type Event = keyof EventMap | Array<keyof EventMap>;
export type EventListener = (ev: EventMap[keyof EventMap]) => void;

export const EventEmitter = useModule(({ player }) => {
  const eventCleanups = new Map<EventListener, Fn>();

  usePlayerExtend({
    on(event: Event, listener: EventListener) {
      if (!Array.isArray(event)) {
        event = [event];
      }

      event.forEach((e) => {
        eventCleanups.set(listener, useEventListener(player.$el, e, listener));
      });
      return player;
    },

    once(event: Event, listener: EventListener) {
      const onceListener = (ev: EventMap[keyof EventMap]) => {
        player.off(event, onceListener);
        return listener(ev);
      };
      return player.on(event, onceListener);
    },

    off(event: Event, listener: EventListener) {
      if (!Array.isArray(event)) {
        event = [event];
      }

      event.forEach(() => {
        eventCleanups.get(listener)?.();
        eventCleanups.delete(listener);
        // player.$el.removeEventListener(e, listener);
      });
      return player;
    },

    offAll() {
      eventCleanups.forEach((fn) => fn());
      eventCleanups.clear();
    },
  });
});

export interface EventEmitter {
  on(event: Event, listener: EventListener): this;

  once(event: Event, listener: EventListener): this;

  off(event: Event, listener: EventListener): this;

  offAll(): this;
}
