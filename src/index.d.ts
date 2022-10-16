/// <reference types="vite/client" />

declare global {
  interface HTMLElementTagNameMap {
    "lpr-player": VideoPlayerElement;
    "lpr-timeline": TimeLineElement;
    "lpr-poster": PosterElement;
    "lpr-control-bar": ControlBarElement;
    "lpr-play": PlayControlElement;
    "lpr-time": TimeElement;
  }

  interface HTMLMediaElement {
    requestFullscreen();
    webkitRequestFullscreen();
    mozRequestFullScreen();
  }
}
