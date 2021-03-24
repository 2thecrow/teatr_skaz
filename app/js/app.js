document.addEventListener('DOMContentLoaded', () => {

	const swiper = new Swiper('.welcome-slider-container', {
		// Optional parameters
		loop: true,
	  
		// If we need pagination
		pagination: {
		  el: '.swiper-pagination',
		},
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	  
		// And if we need scrollbar
		scrollbar: {
		  el: '.swiper-scrollbar',
		},
	});
	
	const swiper1 = new Swiper('.welcome-repertoire__slider', {
		// Optional parameters
		/* loop: true, */
		slidesPerView: 5,
		spaceBetween: 15,
	  
		// If we need pagination
		pagination: {
		  el: '.swiper-pagination',
		},
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	  
		// And if we need scrollbar
		scrollbar: {
		  el: '.swiper-scrollbar',
		},
	});
	

})
