import { Player, useModule } from "@/core";
import { usePlayerExtend } from "@/core/utils/usePlayerExtend";
import { Ref, ref } from "vue";
import { Events, FullscreenChangeEvents } from "@/core/values";
import { useEventListener } from "@vueuse/core";

export const FullscreenMode = useModule((player: Player) => {
  FullscreenChangeEvents.forEach((event: Events) => {
    useEventListener(player.$containerEl, event, () => {
      player.isFullscreen.value = !player.isFullscreen.value;
    });
  });

  usePlayerExtend({
    isFullscreen: ref<boolean>(false),

    toFullScreen() {
      const requestFullscreen =
        (this.$containerEl as any).requestFullscreen ||
        (this.$containerEl as any).mozRequestFullScreen ||
        (this.$containerEl as any).webkitRequestFullscreen;

      requestFullscreen.call(this.$containerEl);
    },

    fromFullScreen() {
      const exitFullscreen =
        (document as any).exitFullscreen ||
        (document as any).mozCancelFullScreen ||
        (document as any).webkitCancelFullScreen;

      exitFullscreen.call(document);
    },
  });
});

export interface FullscreenMode {
  isFullscreen: Ref<boolean>;
  toFullScreen(): void;
  fromFullScreen(): void;
}
