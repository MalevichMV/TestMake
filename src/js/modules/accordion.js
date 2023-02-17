function accordion(){
    const accordionHeader = document.querySelector('.UI__accordion-header');
    const accordionBody = document.querySelector('.UI__accordion-body');
    const accordion = document.querySelector('.UI__accordion-wrapper');

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