function burger(backPageSelector, burgerSelector){
    let backPage = document.querySelector(backPageSelector),
    burger = document.querySelector(burgerSelector);

    /* Закрытие backPage */
    function closeBackPage(){
        backPage.classList.remove('show');
        backPage.classList.remove('fade');
        backPage.classList.add('hide');
        document.body.style.overflow = '';
    }

    /* Открытие backPage */
    function openBackPage(){
        backPage.classList.add('show');
        backPage.classList.add('fade');
        backPage.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }

    /* Открытие и закрытие при коике на бургер */
    burger.addEventListener('click', () => {
        burger.classList.toggle('active_burger');
        if (backPage.classList.contains('show'))
        {
            closeBackPage();
        } else {
            openBackPage();
        }
    });

    /* Закрытие при клике на "escape" */
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && backPage.classList.contains('show')) { 
            closeBackPage();
            burger.classList.remove('active_burger');
        }
    });
}

export default burger;