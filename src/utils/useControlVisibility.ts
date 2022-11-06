import { effectScope, ref, watch } from "vue";
import { onBeforeDisposed } from "@/modules/lifecycle";
import Player from "@/core/player";
import { useElementHover, useEventListener, useThrottleFn, useTimeoutFn } from "@vueuse/core";
import { Events } from "@/modules/events-emmiter";

export function useControlVisibility(player: Player) {
  const scope = effectScope();
  const isControlVisible = ref(true);
  const isHovered = useElementHover(player.$containerEl);

  const toggleControlVisibility = (value = !isControlVisible) => {
    isControlVisible.value = value;
  };

  scope.run(() => {
    const { start, stop } = useTimeoutFn(() => toggleControlVisibility(false), 1000);

    watch(isHovered, () => {
      if (player.$el.paused) return toggleControlVisibility(true);
      toggleControlVisibility(isHovered.value);
    });

    const onShowControls = () => {
      stop();
      toggleControlVisibility(true);
    };

    const onHideControls = useThrottleFn(() => start(), 1000);

    useEventListener(player.$el, Events.TimeUpdate, onHideControls);
    useEventListener(player.$el, Events.Pause, onShowControls);
    useEventListener(player.$el, Events.MouseMove, onShowControls);
  });

  onBeforeDisposed(player, () => scope.stop());
  return { isControlVisible };
}
