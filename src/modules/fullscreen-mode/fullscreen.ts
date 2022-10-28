import { usePlayerExtend } from "@/utils/usePlayerExtend";
import { Ref, ref } from "vue";
import { Fn, useEventListener } from "@vueuse/core";
import { Events, FullscreenChangeEvents } from "@/modules/events-emmiter";
import { useModule } from "@/utils";

export const FullscreenMode = useModule(({ player, onModuleDispose }) => {
  const cleanupFns = new Array<Fn>();

  FullscreenChangeEvents.forEach((event: Events) => {
    const cleanup = useEventListener(player.$containerEl, event, () => {
      player.isFullscreen.value = !player.isFullscreen.value;
    });
    cleanupFns.push(cleanup);
  });

  usePlayerExtend({
    isFullscreen: ref<boolean>(false),

    toFullScreen() {
      const requestFullscreen =
        player.$containerEl.requestFullscreen ||
        player.$containerEl.mozRequestFullScreen ||
        player.$containerEl.webkitRequestFullscreen ||
        player.$containerEl.msRequestFullscreen;

      requestFullscreen.call(player.$containerEl);
    },

    fromFullScreen() {
      const exitFullscreen =
        document.exitFullscreen ||
        document.mozCancelFullScreen ||
        document.webkitCancelFullScreen ||
        document.msExitFullscreen;

      exitFullscreen.call(document);
    },
  });

  onModuleDispose(() => cleanupFns.forEach((removeListenerFn) => removeListenerFn()));
});

export interface FullscreenMode {
  isFullscreen: Ref<boolean>;

  toFullScreen(): void;

  fromFullScreen(): void;
}
