function dropdownList() {
    const header = document.querySelector('.UI__drop-downList-select-header');
    const dropdownList = document.querySelector('.UI__drop-downList-select');
    const current = document.querySelector('.UI__drop-downList-select-current');
    const body = document.querySelector('.UI__drop-downList-select-body');
    const items = body.querySelectorAll('.UI__drop-downList-select-item');
    

    
    /* Открытие и закрытие выпадающего списка */
    header.addEventListener('click', () => {
        dropdownList.classList.toggle('active_select')
        if (dropdownList.classList.contains('active_select')) {
            body.style.maxHeight = body.scrollHeight + "px";
        } else {
            body.style.maxHeight = 0;
        }
    });

    function removeActiveClass(){
        items.forEach(elem => {
            elem.classList.remove('active_item');
        });
    }
    
    /* Выбор элемента из списка */
    items.forEach(elem => {
        elem.addEventListener('click', () => {
            if (!elem.classList.contains('active_item')){
                removeActiveClass();
                elem.classList.add('active_item');
                current.innerHTML = elem.innerHTML;
            }
            dropdownList.classList.remove('active_select');
            body.style.maxHeight = 0;
        });
    });

    /* Закрытие при клике вне выпадающего списка */
    document.addEventListener('click', (e) => {
        if (e.target === dropdownList || dropdownList.contains(e.target)) {
            return;
        }
        dropdownList.classList.remove('active_select');
        body.style.maxHeight = 0;
    });
}

export default dropdownList;