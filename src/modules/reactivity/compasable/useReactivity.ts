import { Player } from "@/core";
import { Fn, useEventListener } from "@vueuse/core";
import { Events } from "@/modules/events-emmiter";
import { customRef, reactive } from "vue";

type MediaProp = keyof HTMLMediaElement;

export function useReactivity(player: Player) {
  const cleanupListenerFns = new Array<Fn>();

  const createReactive = <T>(property: MediaProp, events: Events[]) => {
    const media = reactive(player.$el);

    return customRef<T>((track, trigger) => {
      let reactiveProperty = media[property];

      const listenerFn = () => {
        reactiveProperty = media[property];
        trigger();
      };

      events.forEach((event) => {
        cleanupListenerFns.push(useEventListener(media, event, listenerFn));
      });

      return {
        get() {
          track();
          return reactiveProperty as unknown as T;
        },
        set(newValue: T) {
          // @ts-ignore
          media[property] = newValue;
        },
      };
    });
  };

  return { ...player.reactive, createReactive, cleanupListenerFns };
}
