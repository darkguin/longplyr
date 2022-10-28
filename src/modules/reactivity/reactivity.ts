import { useModule } from "@/utils";
import { reactive, Ref } from "vue";
import { useReactivity } from "./compasable/useReactivity";
import { Events } from "@/modules/events-emmiter";

export const Reactivity = useModule(({ player, onModuleDispose }) => {
  const { createReactive, cleanupListenerFns } = useReactivity(player);

  const currentTime = createReactive<number>("currentTime", [Events.TimeUpdate]);
  const duration = createReactive<number>("duration", [Events.DurationChange]);
  const ended = createReactive<boolean>("ended", [Events.Ended]);

  const volume = createReactive<number>("volume", [Events.VolumeChange]);
  const muted = createReactive<boolean>("muted", [Events.VolumeChange]);

  const paused = createReactive<boolean>("paused", [Events.Pause, Events.Playing]);
  const played = createReactive<boolean>("played", [Events.Pause, Events.Playing]);

  player.reactive = {
    media: reactive(player.$el),
    currentTime,
    duration,
    volume,
    muted,
    paused,
    played,
    ended,
  };

  onModuleDispose(() => cleanupListenerFns.forEach((removeListenerFn) => removeListenerFn()));
});

export interface Reactivity {
  reactive: {
    media: HTMLMediaElement;
    currentTime: Ref<number>;
    duration: Ref<number>;
    volume: Ref<number>;
    muted: Ref<boolean>;
    paused: Ref<boolean>;
    played: Ref<boolean>;
    ended: Ref<boolean>;
    [key: string]: unknown;
  };
}
