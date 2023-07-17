import Slider from "./slider";

export default class MiniSlider extends Slider {
    constructor(container, prev, next, activeClass, animate, autoplay) {
        super(container, prev, next, activeClass, animate, autoplay);
    }

    decorizeSlides() {
        Array.prototype.forEach.call(this.slides, slide => {
            if (this.activeClass) {
                slide.classList.remove(this.activeClass);
                if (this.animate) {
                    slide.querySelector('.card__controls-arrow').style.opacity = '0';
                    slide.querySelector('.card__title').style.opacity = '0.4';
                }
            }
        });

        if (this.activeClass && this.slides[0].tagName !== 'BUTTON') {
            this.slides[0].classList.add(this.activeClass);
            if (this.animate) {
                this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
                this.slides[0].querySelector('.card__title').style.opacity = '1';
            }
        }
    }

    nextSlide() {
        if (this.slides[1].tagName == "BUTTON" && this.slides[2].tagName == "BUTTON") {
            this.container.appendChild(this.slides[0]);
            this.container.appendChild(this.slides[1]);
            this.container.appendChild(this.slides[2]);
            this.decorizeSlides();
        } else if (this.slides[1].tagName == "BUTTON"){
            this.container.appendChild(this.slides[0]);
            this.container.appendChild(this.slides[1]);
            this.decorizeSlides();
        } else {
            this.container.appendChild(this.slides[0]);
            this.decorizeSlides();
        }
    }

    bindTriggers() {
        this.prev.addEventListener('click', () => {
            for (let i = this.slides.length - 1; i > 0; i--) {
                if (this.slides[i].tagName !== "BUTTON") {
                    let active = this.slides[i];
                    this.container.insertBefore(active, this.slides[0]);
                    this.decorizeSlides();
                    break;
                }
            }
        });

        this.next.addEventListener('click', () => this.nextSlide());
    }

    bindAutoplayStop(elem) {
        elem.addEventListener('mouseenter', () => {
            clearInterval(this.paused);
        });

        elem.addEventListener('mouseleave', () => {
            this.paused = setInterval(() => this.nextSlide(), 5000);
        });
    }

    init() {
        try {
            this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            overflow: hidden;
            `;

            this.bindTriggers();
            this.decorizeSlides();

            if (this.autoplay) {
                this.paused = setInterval(() => this.nextSlide(), 5000);

                this.bindAutoplayStop(this.prev);
                this.bindAutoplayStop(this.next);
                this.bindAutoplayStop(this.container);
            }
        } catch (e) {}
    }
}