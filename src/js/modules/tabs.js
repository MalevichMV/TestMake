function tabs() {
	const tabs = document.querySelectorAll('.typography__tabs-item');
	const tabsContent = document.querySelectorAll('.typography__styles');
    const windowInnerWidth = window.innerWidth;

    function showTabFor(device){
        tabs.forEach((item) => {
            if (item.getAttribute('data-device') === device) 
                item.classList.add('typography__tabs-item-active')            
            else
                item.classList.remove('typography__tabs-item-active')
        });
    }

    function outputContent(){
        tabsContent.forEach(item => {
            item.classList.remove('styles_show');
        });
        tabs.forEach((item) => {
            if (item.classList.contains('typography__tabs-item-active'))
                tabsContent.forEach(itemContent => {
                    if (itemContent.getAttribute('data-device') === item.getAttribute('data-device')) 
                    {
                        itemContent.classList.add('styles_show');
                    }else{
                        itemContent.classList.remove('styles_show');
                    }
            });
        });
    }

    if (windowInnerWidth < 450)
        showTabFor('mobile');
    else
        showTabFor('desktop');
    outputContent();

    window.addEventListener('resize', (e) => {
        if (e.target.innerWidth < 450)
            showTabFor('mobile');
        else
            showTabFor('desktop');

        outputContent();
    });        

    tabs.forEach((item) => {
        item.addEventListener('click', (e) => {
            showTabFor(e.target.getAttribute('data-device'));
            outputContent();
        });
    })
}

export default tabs;