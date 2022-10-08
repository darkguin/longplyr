import { defineCustomElement } from "vue";
import VideoPlayer from "./core/VideoPlayer.ce.vue";
import Poster from "./components/Poster.ce.vue";
import TimeLine from "./components/TimeLine.ce.vue";

const VideoPlayerElement = defineCustomElement(VideoPlayer);
const PosterElement = defineCustomElement(Poster);
const TimeLineElement = defineCustomElement(TimeLine);

customElements.define("lpr-player", VideoPlayerElement);
customElements.define("lpr-poster", PosterElement);
customElements.define("lpr-timeline", TimeLineElement);
