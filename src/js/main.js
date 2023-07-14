import MainSlider from "./modules/slider/slider-main";
import MiniSlider from "./modules/slider/slider-mini";
import Videoplayer from "./modules/playVideo";

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({container: '.page', btns: '.next'});
    slider.render();

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

    const player = new Videoplayer('.play', '.overlay');
    player.init();
});