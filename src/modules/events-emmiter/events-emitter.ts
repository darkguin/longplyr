import { Player, useModule } from "@/core";
import { usePlayerExtend } from "@/core/core";

export type EventMap = HTMLMediaElementEventMap;

export const EventEmitter = useModule(() => {
  usePlayerExtend({
    on<E extends keyof EventMap>(event: E, listener: (ev: EventMap[E]) => any) {
      const self = this as Player;
      self.$el.addEventListener(event, listener);
      return self;
    },

    once<E extends keyof EventMap>(event: E, listener: (ev: EventMap[E]) => any) {
      const self = this as Player;

      const onceListener = (ev: EventMap[E]) => {
        self.off(event, onceListener);
        return listener(ev);
      };

      return self.on(event, onceListener);
    },

    off<E extends keyof EventMap>(event: E, listener: (ev: EventMap[E]) => any) {
      const self = this as Player;
      self.$el.removeEventListener(event, listener);
      return self;
    },
  });
});
