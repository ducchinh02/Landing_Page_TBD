// menu
const menuItems = [
	{
		linkTo: "#about",
		name: "Giới Thiệu",
	},
	{
		linkTo: "#services",
		name: "Chuyên Môn",
	},
	{
		linkTo: "#collab",
		name: "Hợp Tác",
	},
	{
		linkTo: "#contact",
		name: "Liên Hệ",
	},
];
// brand collab
const brandSlide = [
	{
		image:
			"https://res.cloudinary.com/dlzbwakoc/image/upload/v1663938265/bds_tbd/logo%20%C4%90%E1%BB%91i%20t%C3%A1c/logo_clb-180x-01_pszmsd.webp",
		name: "CLB Doanh nhân trẻ",
	},
	{
		image:
			"https://res.cloudinary.com/dlzbwakoc/image/upload/v1663939180/bds_tbd/logo%20%C4%90%E1%BB%91i%20t%C3%A1c/logoinvest_nwe25f.webp",
		name: "Invest",
	},
	{
		image:
			"https://res.cloudinary.com/dlzbwakoc/image/upload/v1663938248/bds_tbd/logo%20%C4%90%E1%BB%91i%20t%C3%A1c/logoBNI-01_jtpx8o.webp",
		name: "BNI",
	},
	{
		image:
			"https://res.cloudinary.com/dlzbwakoc/image/upload/v1664011391/bds_tbd/logo%20%C4%90%E1%BB%91i%20t%C3%A1c/Smarttech_uomsu5.webp",
		name: "Smarttech",
	},
	{
		image:
			"https://res.cloudinary.com/dlzbwakoc/image/upload/v1664011391/bds_tbd/logo%20%C4%90%E1%BB%91i%20t%C3%A1c/logo_trang_tien_ns5dig.webp",
		name: "Tràng Tiền",
	},
	{
		image:
			"https://res.cloudinary.com/dlzbwakoc/image/upload/v1664095313/bds_tbd/logo%20%C4%90%E1%BB%91i%20t%C3%A1c/mb-bank-logo-inkythuatso-01-10-09-01-10-removebg-preview_hvi9rd.webp",
		name: "MB Bank",
	},
	{
		image:
			"https://res.cloudinary.com/dlzbwakoc/image/upload/v1664011391/bds_tbd/logo%20%C4%90%E1%BB%91i%20t%C3%A1c/logo_BRG_Group_mpjrct.webp",
		name: "BRG Group",
	},
	{
		image:
			"https://res.cloudinary.com/dlzbwakoc/image/upload/v1664095311/bds_tbd/logo%20%C4%90%E1%BB%91i%20t%C3%A1c/logo-hai-dang-group-2794-removebg-preview_b2lxs0.webp",
		name: "Hải Đăng Group",
	},
	{
		image:
			"https://res.cloudinary.com/dlzbwakoc/image/upload/v1664011391/bds_tbd/logo%20%C4%90%E1%BB%91i%20t%C3%A1c/logo_hongha_jlhxrl.webp",
		name: "Hồng Hà Hotel",
	},
	{
		image:
			"https://res.cloudinary.com/dlzbwakoc/image/upload/v1663938257/bds_tbd/logo%20%C4%90%E1%BB%91i%20t%C3%A1c/logo3mien-01_vmzgep.webp",
		name: "3M",
	},
];
// social media
const socialMeida = [
	{
		icon: "./assets/images/icon/facebook.svg",
		link: "#",
	},
	{
		icon: "./assets/images/icon/email.svg",
		link: "#",
	},
	{
		icon: "./assets/images/icon/web.svg",
		link: "#",
	},
];
// quick link
const quickLinks = [
	{
		link: "#",
		icon: "./assets/images/icon/phone2.svg",
	},
	{
		link: "#",
		icon: "./assets/images/icon/email3.svg",
	},
	{
		link: "#",
		icon: "./assets/images/icon/twitter.svg",
	},
	{
		link: "#",
		icon: "./assets/images/icon/youtube-icon.svg",
	},
];
// about info
const aboutInfo = [
	{
		title: "Sinh năm",
		desc: 1975,
	},
	{
		title: "Sinh sống tại",
		desc: "Số nhà 5 Liền Kề 1, KDT Xa La, Phường Phúc La, Quận Hà Đông, TP Hà Nội",
	},
	{
		title: "Công việc hiện tại",
		desc: "Chủ tịch TBD Holdings, Chủ tịch BNI Vietgate",
	},
	{
		title: "Hoạt động yêu thích",
		desc: "Giao lưu chia sẻ, chơi thể thao ( bóng bàn), thiện nguyện, du lịch trải nghiệm",
	},
];
// about work info
const aboutWork = [
	{
		details: "Làm việc tại công ty Xuất Nhập Khẩu Bình Tây 1996-1997",
	},
	{
		details: "Làm việc tại Công Ty TNHH Thép Vạn Lợi",
	},
	{
		details:
			"Làm việc tại Công Ty Đầu Tư Thương mại Tràng Tiền – Trang tiền Plaza",
	},
	{
		details: "Làm việc tại công Ty TNHH TM Và Công Nghệ Thái Bình Dương",
	},
	{
		details: "Làm Co-Founder hệ thống phòng khám chăm sóc sức khỏe công đồng",
	},
	{
		details:
			"Làm Mentor cho hệ sinh thái khởi nghiệp/ Phó Chủ Tịch CLB doanh nhân trẻ",
	},
	{
		details: "Làm Chủ tịch BNI Vietgate",
	},
];
// services
const serviceItems = [
	{
		image: "./assets/images/services/specialize-1.png",
		name: "Tư vấn đầu tư Bất động sản",
	},
	{
		image: "./assets/images/services/specialize-2.png",
		name: "Tư vấn Thiết kế cảnh quan",
	},
	{
		image: "./assets/images/services/specialize-3.png",
		name: "Tư vấn chăm sóc sức khỏe",
	},
];
// featured images
const featuredImages = [
	[
		{
			image:
				"https://res.cloudinary.com/dlzbwakoc/image/upload/v1663931073/bds_tbd/%E1%BA%A3nh%20ho%E1%BA%A1t%20%C4%91%E1%BB%99ng/anh10_zruedt.webp",
		},
		{
			image:
				"https://res.cloudinary.com/dlzbwakoc/image/upload/v1663930497/bds_tbd/%E1%BA%A3nh%20ho%E1%BA%A1t%20%C4%91%E1%BB%99ng/anh5_zjf6vv.webp",
		},
		{
			image:
				"https://res.cloudinary.com/dlzbwakoc/image/upload/v1663930496/bds_tbd/%E1%BA%A3nh%20ho%E1%BA%A1t%20%C4%91%E1%BB%99ng/anh7_r8nn2s.webp",
		},
		{
			image:
				"https://res.cloudinary.com/dlzbwakoc/image/upload/v1663930496/bds_tbd/%E1%BA%A3nh%20ho%E1%BA%A1t%20%C4%91%E1%BB%99ng/anh6_us0vor.webp",
		},
		{
			image:
				"https://res.cloudinary.com/dlzbwakoc/image/upload/v1663930496/bds_tbd/%E1%BA%A3nh%20ho%E1%BA%A1t%20%C4%91%E1%BB%99ng/anh4_phmfxb.webp",
		},
		{
			image:
				"https://res.cloudinary.com/dlzbwakoc/image/upload/v1663930496/bds_tbd/%E1%BA%A3nh%20ho%E1%BA%A1t%20%C4%91%E1%BB%99ng/anh2_egq2xn.webp",
		},
		{
			image:
				"https://res.cloudinary.com/dlzbwakoc/image/upload/v1663930495/bds_tbd/%E1%BA%A3nh%20ho%E1%BA%A1t%20%C4%91%E1%BB%99ng/anh1_w7pofq.webp",
		},
		{
			image:
				"https://res.cloudinary.com/dlzbwakoc/image/upload/v1663930495/bds_tbd/%E1%BA%A3nh%20ho%E1%BA%A1t%20%C4%91%E1%BB%99ng/anh9_ba7tnh.webp",
		},
	],
	[
		{
			image:
				"https://res.cloudinary.com/dlzbwakoc/image/upload/v1663930495/bds_tbd/%E1%BA%A3nh%20ho%E1%BA%A1t%20%C4%91%E1%BB%99ng/anh8_jpwlrs.webp",
		},
		{
			image:
				"https://res.cloudinary.com/dlzbwakoc/image/upload/v1663930495/bds_tbd/%E1%BA%A3nh%20ho%E1%BA%A1t%20%C4%91%E1%BB%99ng/anh3_y7qvcz.webp",
		},
	],
];
// quotes
const quotes = [
	{
		quote:
			"Xây dựng được một khu Công Nghiệp nơi có nhiều các Doanh nghiệp tập trung sản xuất kinh doanh,và Hệ sinh thái phụ trợ cho KCN đó tạo thành một quần thể du lịch vui chơi, nghỉ dưỡng, chăm sóc sức khỏe cho cả gia đình.",
	},
];
// contact list
const contactDetails = [
	{
		icon: "./assets/images/icon/email2.svg",
		detail: "Duongnt.thaibinhduong@gmail.com",
	},
	{ icon: "./assets/images/icon/phone.svg", detail: "097.980.798" },
	{
		icon: "./assets/images/icon/location.svg",
		detail:
			"Số nhà 5 Liền Kề 1, KDT Xa La, Phường Phúc La, Quận Hà Đông, TP Hà Nội",
	},
];
const preloader = document.querySelector(".preloader");
const root = document.querySelector("#root");

window.addEventListener("load", () => {
	preloader.style.opacity = 0;
	setTimeout(() => {
		preloader.remove();
	}, 200);
	root.classList.remove("d-none");
});

// get elements
const menu = document.querySelector(
	".primary-header .header-top .main-navigation .menu"
);
// about info
const aboutInfoDetails = document.querySelector(
	"#about .about-info .about-info-details"
);
// about work
const aboutWorkDetails = document.querySelector(
	"#about .about-work .work-info-details"
);
// brand collab slide
const owlBrand = document.querySelector("#collab .slide-brand .owl-brand");
// services thumb
const servicesGrid = document.querySelector("#services .services-grid");
// featured images
const featuredImagesGroup = document.querySelectorAll(
	".featured-images .owl-featured-images .slide-group-element"
);
// quotes
const owlQuotes = document.querySelector(
	".section-quotes .slide-quotes .owl-quotes"
);
// list contact
const listContact = document.querySelector(
	"footer .contact-info .list-contact-info"
);
// list social
const listSocialMedia = document.querySelector(
	"footer .contact-info .social-media"
);
// quick link
const quickLinkList = document.querySelector(".quick-action .quick-link");
// menu mobile
const menuMobileList = document.querySelector(".menu-mobile .menu-list");
// quick link mobile
const quickLinkListMobile = document.querySelector(".menu-mobile .quick-link");
// render
if (menu) {
	menu.innerHTML = menuItems
		.map((item) => {
			return `
        <li class="menu-item h-100 d-flex align-items-center text-capitalize">
            <a href="${item.linkTo}" class="menu-link d-flex align-items-center h-100"
                >${item.name}</a>
        </li>`;
		})
		.join("");
}
if (aboutInfoDetails) {
	aboutInfoDetails.innerHTML = aboutInfo
		.map((item) => {
			return `
		<li class="details-item">${item.title}:<span> ${item.desc}</span></li>`;
		})
		.join("");
}
if (aboutWorkDetails) {
	aboutWorkDetails.innerHTML = aboutWork
		.map((item) => {
			return `
		<li class="details-item">${item.details}</li>`;
		})
		.join("");
}
if (servicesGrid) {
	servicesGrid.innerHTML = serviceItems
		.map((item) => {
			return `<div
			class="services-item d-flex flex-column justify-content-between"
			>
			<div class="services-thumb">
				<img src="${item.image}" alt="" />
			</div>
			<div class="services-name text-center">
				${item.name}
			</div>
			</div>`;
		})
		.join("");
}
if (owlBrand) {
	owlBrand.innerHTML = brandSlide
		.map((slide) => {
			return `<div class="slide-element item text-center">
			<div class="brand-item">
				<div class="logo-img">
					<a href="#">
						<img
							src="${slide.image}"
							alt="${slide.name}"
							class="img-hover"
						/>
						<img
							class="img-filter"
							src="${slide.image}"
							alt="${slide.name}"
						/>
					</a>
				</div>
			</div>
			<div class="logo-title">
				<h4 class="title">${slide.name}</h4>
			</div>
		</div>`;
		})
		.join("");
}

if (featuredImagesGroup) {
	featuredImagesGroup.forEach((group, index) => {
		group.innerHTML = featuredImages[index]
			.map((item) => {
				return `<div class="featured-image-item">
				<img
					src="${item.image}"
					alt="featured image"
				/>
				</div>`;
			})
			.join("");
	});
}

if (owlQuotes) {
	owlQuotes.innerHTML = quotes
		.map((item) => {
			return `<div class="slide-quotes-item text-justify item">
		“ ${item.quote}”
	</div>`;
		})
		.join("");
}
if (listContact) {
	listContact.innerHTML = contactDetails
		.map((item) => {
			return `<li class="list-contact-info-item d-flex align-items-center">
		<div class="contact-icon">
			<img
				src="${item.icon}"
				class="h-100 w-100"
				alt=""
			/>
		</div>
		<div class="contact-details flex-grow-1">
		${item.detail}
		</div>
	</li>`;
		})
		.join("");
}
if (listSocialMedia) {
	listSocialMedia.innerHTML = socialMeida
		.map((item) => {
			return `<a href="${item.link}" class="social-media-item">
			<img
				src="${item.icon}"
				alt="Social media icon"
				class="w-100 h-100"
			/>
		</a>`;
		})
		.join("");
}
if (quickLinkList) {
	quickLinkList.innerHTML = quickLinks
		.map((item, index) => {
			return `<a href="${item.link}" style="--index : ${index + 1};z-index:-${
				index + 1
			}" class="quick-link-item d-flex align-items-center">
			<img
				src="${item.icon}"
				alt="quick link icon"
				class="w-100 h-100"
			/>
		</a>`;
		})
		.join("");
}
if (menuMobileList) {
	menuMobileList.innerHTML = menuItems
		.map((item) => {
			return `<li class="menu-item">
				<a href="${item.linkTo}" class="menu-link">${item.name}</a>
			</li>`;
		})
		.join("");
}
if (quickLinkListMobile) {
	quickLinkListMobile.innerHTML = quickLinks
		.slice(0, 3)
		.map((item) => {
			return `<a href="${item.link}" class="quick-link-item d-flex align-items-center">
		<img
			src="${item.icon}"
			alt="quick link icon"
			class="w-100 h-100"
		/>
	</a>`;
		})
		.join("");
}
// carousel
// brand collab
$(".owl-brand").owlCarousel({
	loop: true,
	nav: true,
	autoplay: true,
	autoplayTimeout: 3000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1,
		},
		676: {
			items: 2,
		},
		768: {
			items: 3,
		},
		1024: {
			items: 4,
		},
		1200: {
			items: 6,
		},
	},
});
// featured image
$(".owl-featured-images").owlCarousel({
	loop: true,
	nav: true,
	navText: [
		"<i class='bx bxs-chevron-left'></i>",
		"<i class='bx bxs-chevron-right'></i>",
	],
	autoplay: true,
	autoplayTimeout: 3000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1,
		},
		1200: {
			items: 1,
		},
	},
});
// quotes
$(".owl-quotes").owlCarousel({
	loop: true,
	autoplay: true,
	autoplayTimeout: 3000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1,
		},

		1200: {
			items: 1,
		},
	},
});
const imageFeaturedItems = document.querySelectorAll(
	".featured-images .owl-featured-images .featured-image-item img"
);

let currentIndex = 0;
imageFeaturedItems.forEach((item, index) => {
	item.addEventListener("click", () => {
		showImage(item.src);
		currentIndex = index;
	});
});
const showImageContain = document.querySelector(".show-image-container");
const imageShow = showImageContain.querySelector(".image-selected");
const overlay = showImageContain.querySelector(".overlay");
const prevBtn = imageShow.querySelector(".prev-image");
const nextBtn = imageShow.querySelector(".next-image");

const showImage = (image) => {
	imageShow.classList.add("active");
	imageShow.style.background = `url('${image}') center / cover no-repeat`;
	showImageContain.classList.remove("d-none");
};
overlay.addEventListener("click", () => {
	showImageContain.classList.add("d-none");
});

prevBtn.addEventListener("click", () => {
	currentIndex--;
	if (currentIndex <= 0) {
		currentIndex = imageFeaturedItems.length - 1;
	}
	showImage(imageFeaturedItems[currentIndex].src);
});
nextBtn.addEventListener("click", () => {
	currentIndex++;
	if (currentIndex >= imageFeaturedItems.length - 1) {
		currentIndex = 0;
	}
	showImage(imageFeaturedItems[currentIndex].src);
});
