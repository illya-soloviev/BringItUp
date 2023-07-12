import Slider from "./modules/slider";
import Videoplayer from "./modules/playVideo";

window.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider('.page', '.next');
    slider.render();

    const player = new Videoplayer('.play', '.overlay');
    player.init();
});