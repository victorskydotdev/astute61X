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
