function tabs(tabsSelector, tabsContentSelector, tabParentSelector, acriveClass) {
	 //tabs
	
	let tabs = document.querySelectorAll(tabsSelector), 
    	tabsContent = document.querySelectorAll(tabsContentSelector), 
    	tabParent = document.querySelector(tabParentSelector);

    function hideTabContent () {
        tabsContent.forEach(item =>{
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove(acriveClass);
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade')
        tabsContent[i].classList.remove('hide')
        tabs[i].classList.add(acriveClass);
    }

    hideTabContent();
    showTabContent();

    // @ts-ignore
    tabParent.addEventListener('click', (event) =>{
        const target = event.target;

        // @ts-ignore
        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if(target == item){
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

export default tabs;