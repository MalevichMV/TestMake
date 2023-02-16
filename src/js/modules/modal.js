import { disablePageScroll, enablePageScroll } from 'scroll-lock';

function modal(modalSelector, burgerSelector){
    const modal = document.querySelector(modalSelector),
        burger = document.querySelector(burgerSelector);

    /* Закрытие modal */
    function closemodal(){
        modal.classList.remove('modal_show');
        enablePageScroll();
    }

    /* Открытие modal */
    function openmodal(){
        modal.classList.add('modal_show');
        disablePageScroll();
    }

    /* Открытие при клике на бургер */
    burger.addEventListener('click', () => {
        openmodal();
    });

    /* Закрытие при клике на крест */
    modal.addEventListener('click', (e) => {
        if (e.target.className === 'modal__close')
            closemodal();
    });

    /* Закрытие при клике на "escape" */
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('modal_show')) { 
            closemodal();
        }
    });
}

export default modal;