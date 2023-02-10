function dropdownList(headerSelector, bodySelector, arrowSelector, itemsSelector, currentSelector) {
    let header = document.querySelector(headerSelector), 
        body = document.querySelector(bodySelector),
        arrow = document.querySelector(arrowSelector),
        items = body.querySelectorAll(itemsSelector),
        current = document.querySelector(currentSelector);

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
}

export default dropdownList;