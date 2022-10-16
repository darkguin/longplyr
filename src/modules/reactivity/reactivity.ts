import { Player, useModule } from "@/core";
import { Ref, ref } from "vue";
import { Events } from "@/core/values";
import { useEventListener } from "@vueuse/core";

export const Reactivity = useModule((player: Player) => {
  const duration = ref<number>(player.$el.duration || 0);
  const currentTime = ref<number>(player.$el.currentTime || 0);
  const volume = ref<number>(player.$el.volume || 0);

  player.reactive = {
    currentTime,
    duration,
    volume,
  };

  useEventListener(player.$el, Events.TimeUpdate, () => {
    currentTime.value = player.$el.currentTime;
  });
  useEventListener(player.$el, Events.DurationChange, () => {
    duration.value = player.$el.duration;
  });
  useEventListener(player.$el, Events.VolumeChange, () => {
    volume.value = player.$el.volume;
  });
});

export interface Reactivity {
  reactive: {
    currentTime: Ref<number>;
    duration: Ref<number>;
    volume: Ref<number>;
    [key: string]: any;
  };
}
