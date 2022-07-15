const burgerButton = document.querySelector('.burger-menu__button');
const burgerOverlay = document.querySelector('.burger-menu__overlay');
const burgerNav = document.querySelector('.burger-menu__nav');
const lines = document.querySelector('.burger-menu__lines');
const links = document.querySelectorAll('.burger-menu__link');

burgerButton.addEventListener('click', function () {
	lines.classList.toggle('active');
	burgerNav.classList.toggle('active');
	burgerOverlay.classList.toggle('active-overlay')
	document.body.classList.toggle('lock');
})
links.forEach(function (item) {
	item.addEventListener('click', function () {
		burgerNav.classList.remove("active");
		lines.classList.remove("active");
		burgerOverlay.classList.remove('active-overlay');
		document.body.classList.remove('lock');
	})
})


burgerOverlay.addEventListener('click', function () {
	burgerNav.classList.remove("active");
	lines.classList.remove("active");
	burgerOverlay.classList.remove('active-overlay');
	document.body.classList.remove('lock');
})
