const navbar = document.querySelector('.navigation');
const navOpenBtn = document.querySelector('.hamburger');
const navCloseBtn = document.querySelector('.hamburger-close');

const openNavbar = () => {
	navOpenBtn.addEventListener('click', () => {
		navbar.style.display = 'block';

		navOpenBtn.style.display = 'none';
		navCloseBtn.style.display = 'flex';

		const serviceBtn = document.getElementById('services');

		serviceBtn.addEventListener('click', () => {
			navbar.style.display = 'none';

			navCloseBtn.style.display = 'none';
			navOpenBtn.style.display = 'flex';
		});
	});
};

const closeNavbar = () => {
	navCloseBtn.addEventListener('click', () => {
		navbar.style.display = 'none';

		navOpenBtn.style.display = 'flex';
		navCloseBtn.style.display = 'none';
	});
};

openNavbar();
closeNavbar();

// onPageLoad hero animation
document.addEventListener('DOMContentLoaded', () => {
	// animating the hero elements on page load
	const animationOne = document.querySelectorAll('.animation-1');
	const animationTwo = document.querySelectorAll('.animation-2');
	const animationThree = document.querySelectorAll('.animation-3');

	setTimeout(() => {
		animationOne.forEach((animatedElement) => {
			animatedElement.style.transform = 'translateY(0)';
			animatedElement.style.opacity = 1;
		});

		animationTwo.forEach((animatedElement) => {
			animatedElement.style.transform = 'translate(0)';
			animatedElement.style.opacity = 1;
		});

		animationThree.forEach((animatedElement) => {
			animatedElement.style.transform = 'translate(0)';
			animatedElement.style.opacity = 1;
		});
	}, 100);
});

// intersection observer for section  animations
const domElements = document.querySelectorAll('all elements to be observed');

const options = {
	root: null,
	threshold: 0.3,
	rootMargin: '-100px',
};

// const intersectionObserver = new IntersectionObserver(cbFunction, options);
