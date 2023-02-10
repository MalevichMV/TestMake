function check_btns(checkboxParentSelector, checkboxSelector, radioParentSelector, radioSelector){
    let parentCheckbox = document.querySelector(checkboxParentSelector),
        checkbox = parentCheckbox.querySelector(checkboxSelector),
        parentRadio = document.querySelector(radioParentSelector),
        radio = parentRadio.querySelector(radioSelector);

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