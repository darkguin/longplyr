/// <reference types="vite/client" />

declare global {
  interface HTMLElementTagNameMap {
    "lpr-player": VideoPlayerElement;
    "lpr-timeline": TimeLineElement;
    "lpr-poster": PosterElement;
  }
}
