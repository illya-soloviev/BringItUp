export default class ShowInfo {
    constructor(triggersSelector) {
        this.btns = document.querySelectorAll(triggersSelector);
    }

    init() {
        if (this.btns.length >= 1) {
            this.btns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const sibling = btn.closest('.module__info-show').nextElementSibling;

                    sibling.classList.toggle('msg');
                    sibling.style.marginTop = '20px';
                });
            });
        }
    }
}