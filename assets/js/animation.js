/*=============== SCROLL REVEAL ANIMATION ===============*/
ScrollReveal({
	origin: "left",
	distance: "200px",
	duration: 2000,
}).reveal("#about .text-center");
ScrollReveal({
	origin: "left",
	distance: "200px",
	duration: 2000,
}).reveal(".about-info");
ScrollReveal({
	origin: "right",
	distance: "20px",
	duration: 2000,
}).reveal(`.about-info .about-info-details .details-item`);
ScrollReveal({
	origin: "bottom",
	distance: "300px",
	duration: 2000,
}).reveal(`.about-work`);
ScrollReveal({
	origin: "left",
	distance: "200px",
	duration: 2000,
}).reveal(`.about-work  .work-details .work-info-details .details-item`);
ScrollReveal().reveal(`.about-work  .work-details .circle-bg`, {
	scale: 0.5,
});
ScrollReveal({
	origin: "top",
	distance: "20px",
	duration: 1000,
}).reveal(`#services`);
ScrollReveal().reveal(`#services .services-item`, { scale: 0.8 });
ScrollReveal({
	origin: "top",
	distance: "20px",
	duration: 1000,
}).reveal(`#collab`);
ScrollReveal().reveal(`.featured-images`, { scale: 0.5 });
