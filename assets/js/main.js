const headerTop = document.querySelector(".header-top");
const sections = document.querySelectorAll("section");
const menu_items = document.querySelectorAll(
	".primary-header .header-top .main-navigation .menu .menu-item"
);
const menu_mobile_items = document.querySelectorAll(
	".menu-mobile .menu-list .menu-item"
);
const quickAction = document.querySelector(".quick-action");
const backToTop = quickAction.querySelector(".back-to-top");
const menuBarToggle = document.querySelector(
	".primary-header .header-top .main-navigation .menu-bar"
);
const menuMobile = document.querySelector(".menu-mobile");
const closeMenuMobile = menuMobile.querySelector(".close-icon");
const overlayMenu = document.querySelector(".overlay-menu");
menuBarToggle.addEventListener("click", () => {
	menuMobile.classList.add("active");
	overlayMenu.classList.remove("d-none");
});
closeMenuMobile.addEventListener("click", () => {
	onCloseMenu();
});
overlayMenu.addEventListener("click", () => {
	onCloseMenu();
});

const onCloseMenu = () => {
	menuMobile.classList.remove("active");
	overlayMenu.classList.add("d-none");
};
// window on scroll
let scrollPos = 0;
window.addEventListener("scroll", () => {
	sections.forEach((sec, index) => {
		if (sec.getBoundingClientRect().top <= 100) {
			removeMenuActive();
			menu_items[index].classList.add("active");
			menu_mobile_items[index].classList.add("active");
		}
	});
	if (window.scrollY <= 0) {
		removeMenuActive();
	}
	document.body.scrollTop > 200 || document.documentElement.scrollTop > 200
		? headerTop.classList.add("active")
		: headerTop.classList.remove("active");
	(document.body.scrollTop >= scrollPos && document.body.scrollTop > 800) ||
	(document.documentElement.scrollTop >= scrollPos &&
		document.documentElement.scrollTop > 800)
		? quickAction.classList.add("show")
		: quickAction.classList.remove("show");
	scrollPos = document.body.getBoundingClientRect().top * -1;
});

const formContact = document.querySelector("#contact .form-contact");
formContact.addEventListener("submit", (e) => {
	e.preventDefault();
});

const removeMenuActive = () => {
	const menuActive = document.querySelector(
		".primary-header .header-top .main-navigation .menu .menu-item.active"
	);
	const menuMobileActive = document.querySelector(
		".menu-mobile .menu-list .menu-item.active"
	);
	if (menuActive) {
		menuActive.classList.remove("active");
		menuMobileActive.classList.remove("active");
	}
};

backToTop.addEventListener("click", () => {
	window.scroll({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
});