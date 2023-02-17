function navigation(){
    let sections = document.querySelectorAll("section"),
        sectionId;

    /* Смена активности навигационных ссылок */
    window.addEventListener("scroll", () => {
        let scroll = window.pageYOffset;  

        sections.forEach(current => {
            let sectionHeight = current.offsetHeight, 
                sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - 50;

            sectionId = current.getAttribute('id');
           

            if (sectionId === 'testTask')
            {
                sectionId = '#'
                sectionHeight += sectionTop + 1;
                sectionTop = -1;
            }
            /* Если скролл ниже начала секции и выше конца */
            if (scroll > sectionTop &&
                scroll <= sectionTop + sectionHeight)
            {
                document.querySelector(`.navigation a[href*='${sectionId}']`).classList.add("active_link");
            } else {
                document.querySelector(`.navigation a[href*='${sectionId}']`).classList.remove("active_link");
            }
        });
    });
}

export default navigation;