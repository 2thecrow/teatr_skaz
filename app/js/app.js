document.addEventListener('DOMContentLoaded', () => {

	const documentFilterBtn = document.querySelector('.document-filter__btn');
	const documentFilter = document.querySelector('.document-filter');
	documentFilterBtn.addEventListener('click', () => {
		documentFilterBtn.classList.toggle('active')
		documentFilter.classList.toggle('active')
	})

	/* Сделал по бырому анкор */
	window.scrollBy({ top: 100, behavior: 'smooth' });

	/* Hamburher menu */
    const menu = document.querySelector('.mobile-menu'); /* Aside menu */
    const burger = document.querySelector('.burger'); /* desktop btn aside menu  */
    const menuClose = document.querySelector('.mobile-menu__closebtn'); /* close btn for aside menu */
    const overlay = document.querySelector('.overlay'); /* overlay for aside menu */

    /* lock screen scroll */
    const lockScroll = () => {
        document.body.classList.add('lock');
    }
    /* unlock screen scroll */
    const unlockScroll = () => {
        document.body.classList.remove('lock');
    }

    /* Open menu */
    burger.addEventListener('click', () => {
        burger.classList.add('hide');
        menu.classList.add('open');
        overlay.classList.add('open');
        lockScroll();
    });
    /* Close aside menu */
    menuClose.addEventListener('click', () => {
        burger.classList.remove('hide');
        menu.classList.remove('open');
        overlay.classList.remove('open');
        unlockScroll();
    });
    /* Remove overlay and unlock screen scroll */
    overlay.addEventListener('click', () => {
        burger.classList.remove('hide');
        menu.classList.remove('open');
        overlay.classList.remove('open');
        unlockScroll();
    });
    /* End of Hamburher menu */
    
	const welcomePageSlider = new Swiper('.welcome-slider-container', {
		// Optional parameters
		/* loop: true, */
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		  },
	});
	
	const welcomeRepertoireSlider = new Swiper('.welcome-repertoire__slider', {
		// Optional parameters
		/* loop: true, */
		slidesPerView: 1,
		spaceBetween: 15,
		
		breakpoints: {
			375: {
				slidesPerView: 1,
			},
			640: {
			  slidesPerView: 2,
			  spaceBetween: 20,
			},
			768: {
			  slidesPerView: 3,
			  spaceBetween: 40,
			},
			1530: {
				slidesPerView: 4,
				spaceBetween: 50,
			},
			1920: {
			  slidesPerView: 4,
			  spaceBetween: 50,
			}
		},

		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		  },
	});

	

	let timelinSliderContent = new Swiper('.timeline-content__slider', {
		// Optional parameters
	    spaceBetween: 10,
		autoHeight: true,
		speed: 800,
	
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		
	})
	let timelinSliderDate = new Swiper('.timeline-slider__dates', {
		spaceBetween: 70,
	    centeredSlides: true,
	    slidesPerView: 'auto',
		slideToClickedSlide: true,
		speed: 800,

		breakpoints: {
			375: {
				spaceBetween: 10,
			},
			576: {
				spaceBetween: 10,
			},
			800: {
				spaceBetween: 70,
			}
		},
	})
	
	timelinSliderDate.controller.control = timelinSliderContent;
	timelinSliderContent.controller.control = timelinSliderDate;
	

})
