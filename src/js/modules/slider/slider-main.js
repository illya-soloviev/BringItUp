import Slider from "./slider";

export default class MainSlider extends Slider {
    constructor(container, btns, prev, next) {
        super(container, btns, prev, next);
    }

    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }

        if (n < 1) {
            this.slideIndex = this.slides.length;
        }

        try {
            this.hanson.style.opacity = '0';

            if (n === 3) {
                setTimeout(() => {
                    this.hanson.style.opacity = '1';
                    this.hanson.classList.add('animated', 'slideInUp');
                }, 3000);
            } else {
                this.hanson.classList.remove('animated', 'slideInUp');
            }
        } catch(e){}

        Array.prototype.forEach.call(this.slides, slide => {
            slide.style.display = "none";
            slide.classList.remove('animated', 'fadeIn');
        });

        this.slides[this.slideIndex - 1].classList.add('animated', 'fadeIn');
        this.slides[this.slideIndex - 1].style.display = "block";
    }

    changeSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    bindTriggers() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.changeSlides(1);
            });

            btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });

        this.prev.forEach(prevBtn => {
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.changeSlides(-1);
            });
        });

        this.next.forEach(nextBtn => {
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.changeSlides(1);
            });
        });
    }

    render() {
        if (this.container) {
            try {
                this.hanson = document.querySelector('.hanson');
            } catch(e){}
    
            this.showSlides(this.slideIndex);
            this.bindTriggers();
        }
    }
}