let isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
	},
	any: function () {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};

let body = document.querySelector('body')
if (isMobile.any()) {
	body.classList.add('touch')
	let arrow = document.querySelectorAll('.arrow')
	for (i = 0; i < arrow.length; i++) {
		let thisLink = arrow[i].previousElementSibling
		let subMenu = arrow[i].nextElementSibling
		let thisArrow = arrow[i]

		thisLink.classList.add('parent')

		arrow[i].addEventListener('click', function () {
			subMenu.classList.toggle('open')
			thisArrow.classList.toggle('active')
		})
	}
} else {
	body.classList.add('mouse')
}


const menuLinks = document.querySelectorAll('.menu__link[data-goto]')
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuLinkClick)
	})
	function onMenuLinkClick(e) {
		const menuLink = e.target
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto)
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageXOffset - document.querySelector('header').offsetHeight

			window.scrollTo({
				top: gotoBlockValue,
				behavior: 'smooth'
			})
			e.preventDefault()
		}
	}
}