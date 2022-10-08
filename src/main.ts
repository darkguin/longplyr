import { defineCustomElement } from "vue";
import VideoPlayer from "./components/VideoPlayer.vue";
import Poster from "./components/Poster.vue";
import TimeLine from "./components/TimeLine.vue";

const VideoPlayerElement = defineCustomElement(VideoPlayer);
const PosterElement = defineCustomElement(Poster);
const TimeLineElement = defineCustomElement(TimeLine);

customElements.define("lpr-player", VideoPlayerElement);
customElements.define("lpr-poster", PosterElement);
customElements.define("lpr-timeline", TimeLineElement);
