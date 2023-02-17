function accordion(){
    let accordionHeader = document.querySelector('.UI__accordion-header'),
        accordionBody = document.querySelector('.UI__accordion-body');

    accordionHeader.addEventListener('click', () => {
        accordionBody.classList.toggle("active_accordion_body");
        accordionHeader.classList.toggle("active_accordion_header");
        if (accordionBody.classList.contains("active_accordion_body")) {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
        } else {
            accordionBody.style.maxHeight = 0;
        }
    }); 

    accordionHeader.addEventListener('mouseover', () => {
        accordionBody.classList.add('accordion_hover');
    });
    accordionHeader.addEventListener('mouseout', () => {
        accordionBody.classList.remove('accordion_hover');
    });  
}

export default accordion;