function burger(backPageSelector, burgerSelector){
    let backPage = document.querySelector(backPageSelector),
    burger = document.querySelector(burgerSelector);

    burger.addEventListener('click', () => {
        burger.classList.toggle('active_burger');
        if (backPage.classList.contains('show'))
        {
            backPage.classList.remove('show');
            backPage.classList.remove('fade');
            backPage.classList.add('hide');
            document.body.style.overflow = '';
        } else {
            backPage.classList.add('show');
            backPage.classList.add('fade');
            backPage.classList.remove('hide');
            document.body.style.overflow = 'hidden';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && backPage.classList.contains('show')) { 
            backPage.classList.remove('show');
            backPage.classList.remove('fade');
            backPage.classList.add('hide');
            document.body.style.overflow = '';
            burger.classList.remove('active_burger');
        }
    });
}

export default burger;