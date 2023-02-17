function accordion(headerSelector, bodySelector){
    let accordionHeader = document.querySelector(headerSelector),
        accordionBody = document.querySelector(bodySelector),
        accordion = document.querySelector('.UI__accordion-wrapper');

    accordionHeader.addEventListener('click', () => {
        accordion.classList.toggle("accordion_active");
        if (accordion.classList.contains("accordion_active")) {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
        } else {
            accordionBody.style.maxHeight = 0;
        }
    }); 
}

export default accordion;