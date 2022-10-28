/// <reference types="vite/client" />

/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

export declare global {
  interface HTMLElementTagNameMap {
    "lpr-player": VideoPlayerElement;
    "lpr-timeline": TimeLineElement;
    "lpr-poster": PosterElement;
    "lpr-play": PlayControlElement;
    "lpr-time": TimeElement;
  }

  type ExitFullscreen = typeof document.exitFullscreen;
  type RequestFullscreen = typeof document.documentElement.requestFullscreen;

  interface Document {
    webkitCancelFullScreen: ExitFullscreen;
    mozCancelFullScreen: ExitFullscreen;
    msExitFullscreen: ExitFullscreen;
  }

  interface HTMLElement {
    webkitRequestFullscreen: RequestFullscreen;
    mozRequestFullScreen: RequestFullscreen;
    msRequestFullscreen: RequestFullscreen;
  }
}
