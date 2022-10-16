import { defineCustomElement } from "vue";
import VideoPlayer from "./components/VideoPlayer.vue";
import Poster from "./components/Poster.vue";
import TimeLine from "./components/TimeLine.vue";
import Time from "./components/Time.vue";

import ControlBar from "./components/ControlBar.vue";
import ControlGroup from "./components/ControlGroup.vue";

import PlayControl from "./components/PlayControl.vue";
import FullscreenControl from "./components/FullscreenControl.vue";
import VolumeControl from "./components/VolumeControl.vue";

const VideoPlayerElement = defineCustomElement(VideoPlayer);
const PosterElement = defineCustomElement(Poster);
const TimeLineElement = defineCustomElement(TimeLine);
const TimeElement = defineCustomElement(Time);

const ControlBarElement = defineCustomElement(ControlBar);
const ControlGroupElement = defineCustomElement(ControlGroup);

const PlayControlElement = defineCustomElement(PlayControl);
const FullscreenControlElement = defineCustomElement(FullscreenControl);
const VolumeControlElement = defineCustomElement(VolumeControl);

customElements.define("lpr-player", VideoPlayerElement);
customElements.define("lpr-poster", PosterElement);
customElements.define("lpr-timeline", TimeLineElement);
customElements.define("lpr-time", TimeElement);

customElements.define("lpr-control-bar", ControlBarElement);
customElements.define("lpr-control-group", ControlGroupElement);

customElements.define("lpr-play", PlayControlElement);
customElements.define("lpr-fullscreen", FullscreenControlElement);
customElements.define("lpr-volume", VolumeControlElement);
