function tabs() {
	const tabs = document.querySelectorAll('.typography__tabs-item');
	const tabsContent = document.querySelectorAll('.typography__styles');

    showTabForCurrentWidth(window.innerWidth)

    function showTabFor(device){
        tabs.forEach((item) => {
            if (item.dataset.device === device){
                item.classList.add('active_tab')
            }
            else
            {
                item.classList.remove('active_tab')
            }
        });

        tabsContent.forEach((item) => {
            if (item.dataset.device === device){
                item.classList.add('styles_show')
            }
            else
            {
                item.classList.remove('styles_show')
            }
        });
    }
 
    function showTabForCurrentWidth(width){
        if (width < 450) {
            showTabFor('mobile');
        }
        else
        {
            showTabFor('desktop');
        }
    }       

    window.addEventListener('resize', (e) => {
        showTabForCurrentWidth(e.target.innerWidth);
    });        

    tabs.forEach((item) => {
        item.addEventListener('click', (e) => {
            showTabFor(e.target.dataset.device);
        });
    })
}

export default tabs;