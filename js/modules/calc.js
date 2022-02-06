function calc() {

	//calc
	
	const result = document.querySelector('.calculating__result span');

		

	let sex = 'female', 
	height, weight, age, 
	ratio = 1.375;

	if(localStorage.getItem('sex')) {
		// @ts-ignore
		sex = localStorage.getItem('sex')
	}else {
		sex = 'female';
		localStorage.setItem('sex', 'female')
	}

	if(localStorage.getItem('ratio')) {
		// @ts-ignore
		ratio = localStorage.getItem('ratio')
	}else {
		ratio = 1.375;
		// @ts-ignore
		localStorage.setItem('ratio', 1.375)
	}


	function initLocalSetings(selector, activeClass){
		const elements = document.querySelectorAll(selector);

		elements.forEach(elem => {
			elem.classList.remove(activeClass);
			if(elem.getAttribute('id') === localStorage.getItem('sex')) {
				elem.classList.add(activeClass)
			}
			if(elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
				elem.classList.add(activeClass)
			}
		});
	}

	initLocalSetings('#gender div', 'calculating__choose-item_active');
	initLocalSetings('.calculating__choose_big div', 'calculating__choose-item_active');
	
	function calcTotal() {
	
		if(!sex || !height || !weight || !age || !ratio) { 
			// @ts-ignore
			result.textContent = "____";
			return;
		}

		if (sex === 'female') {
			// @ts-ignore
			result.textContent =( (447.6 + (9.2 *weight) + (3.1 * height) - (4.3 *age)) * ratio -600).toFixed(0);
		}else {
			// @ts-ignore
			result.textContent =( (88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio -600).toFixed(0);
		}
	}

	calcTotal();

	function getStaticInformation(selector, activeClass){
		const elements = document.querySelectorAll(selector);

			elements.forEach(elem => {
				elem.addEventListener('click', (e) => {
				if(e.target.getAttribute('data-ratio')) {
					ratio = +e.target.getAttribute('data-ratio');
					localStorage.setItem("ratio", e.target.getAttribute('data-ratio'));
				} else {
					sex = e.target.getAttribute('id');
					localStorage.setItem('sex',  e.target.getAttribute('id'))
				}

				console.log(ratio, sex);

				elements.forEach(elem => {
					elem.classList.remove(activeClass);				
				});

				e.target.classList.add(activeClass);

				calcTotal();
			});
		});

		
	}

	getStaticInformation('#gender div', 'calculating__choose-item_active');
	getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

	function getDinamicInformation(selector) {
		const input = document.querySelector(selector);

		input.addEventListener('input', () => {

			if(input.value.match(/\D/g)) {
				input.style.border = '2px solid red'
			}else {
				input.style.border = "none";
			}

			switch(input.getAttribute('id')) {
				case 'height':
					height = +input.value;
					break;
				case 'weight':
					weight = +input.value;
					break;
				case 'age':
					age = +input.value;
					break;
			}
			calcTotal()
		});

		
	}

	getDinamicInformation('#weight');
	getDinamicInformation('#height');
	getDinamicInformation('#age');


}

export default calc;