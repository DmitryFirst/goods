    function closeModal(modalSelector) {
		const modal = document.querySelector(modalSelector);
        // @ts-ignore
        modal.classList.add('hide');
        // @ts-ignore
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

	function openModal(modalSelector, modalTimerId) {
		const modal = document.querySelector(modalSelector);

        // @ts-ignore
        modal.classList.add('show');
        // @ts-ignore
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';

		console.log(modalTimerId)
		if(modalTimerId) {
			clearInterval(modalTimerId);
		}
        
    }


function modal(triggerSelector, modalSelector, modalTimerId) {

	 //Modal-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    const 	modalTrigger = document.querySelectorAll(triggerSelector),
        	modal = document.querySelector(modalSelector);

    modalTrigger.forEach(btn => {
        btn.addEventListener('click',() => openModal(modalSelector, modalTimerId));
    });
    


    modal.addEventListener('click', (e) => {
        // @ts-ignore
        if(e.target === modal || e.target?.getAttribute('data-close') == "") {
            closeModal(modalSelector);
        }
    });

	document.addEventListener('keydown', (e) => {
        // @ts-ignore
        if (e.code === "Escape" && modal.classList.contains('show')) { 
            closeModal(modalSelector);
        }
    });
        
   

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);


}

export default modal;
export {closeModal};
export {openModal};