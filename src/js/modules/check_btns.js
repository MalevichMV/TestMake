function check_btns(){
    let parentCheckbox = document.querySelector('.UI__check_button'),
        checkbox = parentCheckbox.querySelector('.UI__check_button-checkbox'),
        parentRadio = document.querySelector('.UI__radio_button'),
        radio = parentRadio.querySelector('.UI__radio_button-radio');

    parentCheckbox.addEventListener('click', () => {
        checkbox.checked = !checkbox.checked;
    });
    checkbox.addEventListener('click', () => {
        checkbox.checked = !checkbox.checked;
    });

    parentRadio.addEventListener('click', () => {
        radio.checked = true;
    });

}

export default check_btns;