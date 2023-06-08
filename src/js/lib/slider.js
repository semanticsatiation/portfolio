import "swiper/swiper-bundle.css";
// import Swiper JS

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

class Slider {
	constructor() {
		// Allows the class to handle when things run when needed
		this.run();
	}

	run() {
		const swiper = new Swiper('.swiper', {
			slidesPerView: '1',
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
		});
	}
}

export default Slider;
