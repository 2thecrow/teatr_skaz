document.addEventListener('DOMContentLoaded', () => {

	const swiper = new Swiper('.welcome-slider-container', {
		// Optional parameters
		/* loop: true, */
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	});
	
	const swiper1 = new Swiper('.welcome-repertoire__slider', {
		// Optional parameters
		/* loop: true, */
		slidesPerView: 5,
		spaceBetween: 15,
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	});
	

})
