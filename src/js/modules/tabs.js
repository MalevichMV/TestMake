function tabs() {
	let tabs = document.querySelectorAll('.typography__tabs-item'),
		tabsContent = document.querySelectorAll('.typography__styles'),
		tabsParent = document.querySelector('.typography__tabs');

    /* Скрытие контента у всех табов */
	function hideTabContent() {
        
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });

        tabs.forEach(item => {
            item.classList.remove('typography__tabs-item-active');
        });
	}

    /* Показ контента у конкретного таба */
	function showTabContent(i = 0) {
        tabsContent[i].classList.add('show');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('typography__tabs-item-active');
    }
    
    hideTabContent();
    showTabContent();

	tabsParent.addEventListener('click', (e) => {
		const target = e.target;
		if(target && target.classList.contains('typography__tabs-item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
		}
    });
}

export default tabs;