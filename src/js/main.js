import MainSlider from "./modules/slider/slider-main";
import MiniSlider from "./modules/slider/slider-mini";
import VideoPlayer from "./modules/playVideo";
import Difference from "./modules/difference";
import Forms from "./modules/forms";

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({container: '.page', btns: '.next'});
    slider.render();

    const modulesPageSlider = new MainSlider({container: '.moduleapp', btns: '.next',
    prev: '.prevmodule', next: '.nextmodule'});
    modulesPageSlider.render();

    const showUpSlider = new MiniSlider({container: '.showup__content-slider',
    prev: '.showup__prev', next: '.showup__next', activeClass: 'card-active',
    animate: true});
    showUpSlider.init();

    const modulesSlider = new MiniSlider({container: '.modules__content-slider',
    prev: '.slick-prev', next: '.slick-next', activeClass: 'card-active',
    animate: true, autoplay: true})
    modulesSlider.init();

    const feedSlider = new MiniSlider({container: '.feed__slider',
    prev: '.feed__slider .slick-prev', next: '.feed__slider .slick-next',
    activeClass: 'feed__item-active'})
    feedSlider.init();

    new VideoPlayer('.play', '.overlay').init();
    new VideoPlayer('.module__video-item .play', '.overlay').init();

    new Difference('.officerold', '.officernew', '.officer__card-item').init();
    new Forms('form').init();
});