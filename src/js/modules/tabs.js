function tabs() {
	const tabs = document.querySelectorAll('.typography__tabs-item');
	const tabsContent = document.querySelectorAll('.typography__styles');

    function showTabFor(device){
        tabs.forEach((item) => {
            if (item.dataset.device === device) 
            {
                item.classList.add('typography__tabs-item-active')
            }
            else
            {
                item.classList.remove('typography__tabs-item-active')
            }
        });

        tabsContent.forEach((item) => {
            if (item.dataset.device === device) 
            {
                item.classList.add('styles_show')
            }
            else
            {
                item.classList.remove('styles_show')
            }
        });
    }
 
    if (window.innerWidth < 450)
    {
        showTabFor('mobile');
    }
    else
    {
        showTabFor('desktop');
    }
        

    window.addEventListener('resize', (e) => {
        if (e.target.innerWidth < 450)
        {
            showTabFor('mobile');
        }            
        else
        {
            showTabFor('desktop');
        }
    });        

    tabs.forEach((item) => {
        item.addEventListener('click', (e) => {
            showTabFor(e.target.dataset.device);
        });
    })
}

export default tabs;