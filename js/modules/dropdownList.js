function dropdownList(dropdownListSelector ,headerSelector, bodySelector, arrowSelector, itemsSelector, currentSelector) {
    let header = document.querySelector(headerSelector), 
        body = document.querySelector(bodySelector),
        dropdownList = document.querySelector(dropdownListSelector),
        arrow = document.querySelector(arrowSelector),
        items = body.querySelectorAll(itemsSelector),
        current = document.querySelector(currentSelector);

    
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