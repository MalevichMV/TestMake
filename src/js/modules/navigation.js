function navigation(){
    let sections = document.querySelectorAll("section"),
        navigationLink = document.querySelector("nav").querySelectorAll("a"),
        sectionId;

    /* Смена активности навигационных ссылок */
    window.addEventListener("scroll", () => {
        let scroll = window.pageYOffset;  

        sections.forEach(current => {
            let sectionHeight = current.offsetHeight, 
                sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - 50;

            sectionId = current.getAttribute('data-section_number');

            if (Number(sectionId) - 1 == 0)
            {
                sectionHeight += sectionTop + 1;
                sectionTop = -1;
            }
            
            /* Если скролл ниже начала секции и выше конца */
            if (scroll > sectionTop &&
                scroll <= sectionTop + sectionHeight)
            {
                navigationLink[Number(sectionId) - 1].classList.add("active_link");
            } else {
                navigationLink[Number(sectionId) - 1].classList.remove("active_link");
            }
        });
    });
}

export default navigation;