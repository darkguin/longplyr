import { defineCustomElement } from "vue";
import VideoPlayer from "./core/VideoPlayer.ce.vue";

const VideoPlayerElement = defineCustomElement(VideoPlayer);
customElements.define("video-player", VideoPlayerElement);
