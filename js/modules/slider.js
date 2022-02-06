function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {

	//slider

	const 	slides = document.querySelectorAll(slide),
			slider = document.querySelector(container),
			prev = document.querySelector(prevArrow),
			next = document.querySelector(nextArrow),
			total = document.querySelector(totalCounter),
			current = document.querySelector(currentCounter),
			slidesWrapper = document.querySelector(wrapper),
			slidesField = document.querySelector(field),
			// @ts-ignore
			width = window.getComputedStyle(slidesWrapper).width;

	let slideIndex = 1;
	let offset = 0;

		if(slides.length < 10) {
			// @ts-ignore
			total.textContent = `0${slides.length}`;
			// @ts-ignore
			current.textContent = `0${slideIndex}`;
		}else{
			// @ts-ignore
			total.textContent = slides.length;
			// @ts-ignore
			current.textContent = slideIndex;
		}

	// @ts-ignore
	slidesField.style.width = 100 * slides.length + '%';
	// @ts-ignore
	slidesField.style.display = 'flex';
	// @ts-ignore
	slidesField.style.transition = '0.5s all'

	// @ts-ignore
	slidesWrapper.style.overflow = 'hidden';

	slides.forEach(slide => {
		// @ts-ignore
		slide.style.width = width;
	})

	// @ts-ignore
	slider.style.position = 'relative';

	const 	indicators = document.createElement('ol'),
			dots = [];

	indicators.classList.add('carousel-indicators');
	//indicators.style.cssText

	// @ts-ignore
	slider.append(indicators);

	for (let i = 0; i < slides.length; i++){
		const dot = document.createElement('li');
		// @ts-ignore
		dot.setAttribute('data-slide-to', i + 1);
		dot.classList.add('dot');

		if(i == 0){
			// @ts-ignore
			dot.style.opacity = 1;
		}

		indicators.append(dot);
		dots.push(dot);

	}

	function deleteNotDigigts(str) {
		return +str.replace(/\D/g, '');
	}

	// @ts-ignore
	next.addEventListener('click', () => {
		if(offset == deleteNotDigigts(width) *( slides.length - 1)){
			offset = 0;
		}else {
			offset += deleteNotDigigts(width);
		}

		// @ts-ignore
		slidesField.style.transform = `translateX(-${offset}px)`;

		if (slideIndex == slides.length){
			slideIndex = 1
		}else {
			slideIndex++;

		}

		if (slides.length < 10) {
			// @ts-ignore
			current.textContent = `0${slideIndex}`;
		} else {
			// @ts-ignore
			current.textContent = slideIndex;
		}

		dots.forEach(dot => {dot.style.opacity = '.5'});
		dots[slideIndex-1].style.opacity = 1;
	})

	// @ts-ignore
	prev.addEventListener('click', () => {
		if(offset == 0){
			offset = deleteNotDigigts(width) *( slides.length - 1);
		}else {
			offset -= deleteNotDigigts(width);
		}

		// @ts-ignore
		slidesField.style.transform = `translateX(-${offset}px)` ;

				

		if (slideIndex == 1){
			slideIndex = slides.length;
		}else {
			slideIndex --;

		}

		if (slides.length < 10) {
			// @ts-ignore
			current.textContent = `0${slideIndex}`;
		} else {
			// @ts-ignore
			current.textContent = slideIndex;
		}

		dots.forEach(dot => {dot.style.opacity = '.5'});
		dots[slideIndex - 1].style.opacity = 1;

	});
	
		dots.forEach (dot => {	
			dot.addEventListener('click', (e) => {
					
					// @ts-ignore
					const slideTo = e.target.getAttribute('data-slide-to');

					slideIndex = slideTo;
					offset = deleteNotDigigts(width) *( slideTo - 1);

					// @ts-ignore
					slidesField.style.transform = `translateX(-${offset}px)`;

					if (slides.length < 10) {
						// @ts-ignore
						current.textContent = `0${slideIndex}`;
					} else {
						// @ts-ignore
						current.textContent = slideIndex;
					}

					dots.forEach(dot => {dot.style.opacity = '.5'});
					dots[slideIndex - 1].style.opacity = 1;

				})
			})

}

export default slider;