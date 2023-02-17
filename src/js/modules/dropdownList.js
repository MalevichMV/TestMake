function dropdownList() {
    let header = document.querySelector('.UI__drop-downList-select-header'), 
        body = document.querySelector('.UI__drop-downList-select-body'),
        dropdownList = document.querySelector('.UI__drop-downList-select'),
        arrow = document.querySelector('.UI__drop-downList-select-icon'),
        items = body.querySelectorAll('.UI__drop-downList-select-item'),
        current = document.querySelector('.UI__drop-downList-select-current');

    
    /* Открытие и закрытие выпадающего списка */
    header.addEventListener('click', () => {
        body.classList.toggle("active_body");
        arrow.classList.toggle("active_arrow");
        if (body.classList.contains("active_body")) {
            body.style.maxHeight = body.scrollHeight + "px";
            header.classList.add('active_header');
        } else {
            body.style.maxHeight = 0;
            if (!current.classList.contains('active_current'))
            header.classList.remove('active_header');
        }
    });

    function removeActiveClass(){
        items.forEach(elem => {
            elem.classList.remove('active_item');
        });
    }
    
    /* Выбор элемента из списка */
    items.forEach(elem => {
        elem.addEventListener('click', (e) => {
            if (!elem.classList.contains('active_item'))
            {
                removeActiveClass();
                elem.classList.add('active_item');
                current.classList.add('active_current');
                current.innerHTML = elem.innerHTML;
                header.classList.add('active_header');
            }
            arrow.classList.remove("active_arrow");
            body.classList.remove('active_body');
            body.style.maxHeight = 0;
        });
    });

    /* Закрытие при клике вне выпадающего списка */
    document.addEventListener('click', (e) => {
        if (e.target === dropdownList || dropdownList.contains(e.target)) {
            return;
        }
        arrow.classList.remove("active_arrow");
        body.classList.remove('active_body');
        body.style.maxHeight = 0;
        if (!current.classList.contains('active_current'))
            header.classList.remove('active_header');
    });
}

export default dropdownList;