var isInViewport = function (elem) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <=
			(window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <=
			(window.innerWidth || document.documentElement.clientWidth)
	);
};

function openAccordion(id) {
	try {
		let accordion = document.getElementById(id);
		let accordions = document.getElementsByClassName('accordion-active');

		if (accordions.length > 0) {
			if (accordions[0].id === id) {
				closeAccordions();
				return;
			}
			closeAccordions();
			accordion.classList.add('accordion-active');
		} else {
			accordion.classList.add('accordion-active');
		}
	} catch (error) {
		console.log(error);
	}
}

function closeAccordions() {
	try {
		let accordions = document.getElementsByClassName('accordion-item');

		for (let i = 0; i < accordions.length; i++) {
			accordions[i].classList.remove('accordion-active');
		}
	} catch (error) {
		console.log(error);
	}
}

var intro_content = document.getElementById('intro-content');
var fade_downs = document.getElementsByClassName('fade-down');
var fade_ins = document.getElementsByClassName('fade-in');
var brackets = document.getElementsByClassName('bracket');
var number_lines = document.getElementsByClassName('number');

window.onscroll = handleFadeAnimations();

function handleFadeAnimations() {
	for (var i = 0; i < fade_downs.length; i++) {
		console.log(fade_downs[i]);
		if (isInViewport(fade_downs[i])) {
			fade_downs[i].classList.add('anim-active');
		}
	}
	for (var i = 0; i < fade_ins.length; i++) {
		console.log(fade_ins[i]);
		if (isInViewport(fade_ins[i])) {
			fade_ins[i].classList.add('anim-active');
		}
	}
	for (var i = 0; i < brackets.length; i++) {
		console.log(brackets[i]);
		if (isInViewport(brackets[i])) {
			brackets[i].classList.add('anim-active');
		}
	}
	for (var i = 0; i < number_lines.length; i++) {
		console.log(isInViewport(number_lines[i]));
		if (isInViewport(number_lines[i])) {
			number_lines[i].classList.add('anim-active');
		}
	}
}

var headerCanv = document.getElementById('header-canv');
var headerCanvContext = headerCanv.getContext('2d');
var aboutCanv = document.getElementById('about-canv');
var aboutCanvContext = aboutCanv.getContext('2d');
var portfolioCanv = document.getElementById('portfolio-canv');
var portfolioCanvContext = portfolioCanv.getContext('2d');
var contactCanv = document.getElementById('contact-canv');
var contactCanvContext = contactCanv.getContext('2d');

var col = function (x, y, r, g, b) {
	headerCanvContext.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
	headerCanvContext.fillRect(x, y, 1, 1);
	aboutCanvContext.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
	aboutCanvContext.fillRect(x, y, 1, 1);
	portfolioCanvContext.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
	portfolioCanvContext.fillRect(x, y, 1, 1);
	contactCanvContext.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
	contactCanvContext.fillRect(x, y, 1, 1);
};

var R = function (x, y, t) {
	return Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t));
};

var G = function (x, y, t) {
	return Math.floor(
		192 +
			64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
	);
};

var B = function (x, y, t) {
	return Math.floor(
		192 +
			64 *
				Math.sin(
					5 * Math.sin(t / 9) +
						((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
				)
	);
};

var t = 0;

var run = function () {
	for (x = 0; x <= 35; x++) {
		for (y = 0; y <= 35; y++) {
			col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
		}
	}
	t = t + 0.02;
	window.requestAnimationFrame(run);
};

run();

// gsap.registerPlugin(ScrollTrigger);

// const introduction = gsap
// 	.timeline({
// 		scrollTrigger: {
// 			trigger: '.card-wrapper',
// 			scrub: true,
// 			start: 'top center',
// 			end: '+=50%',
// 			markers: { startColor: 'green', endColor: 'red', fontSize: '12px' },
// 		},
// 	})

// 	.from('.card-wrapper .section #about', {
// 		opacity: 0,
// 		translateX: -200,
// 		ease: 'none',
// 	})

// 	.from('.card-wrapper .section #skills', {
// 		opacity: 0,
// 		translateX: 200,
// 		ease: 'none',
// 	})

// 	.from('.card-wrapper .section #portfolio', {
// 		opacity: 0,
// 		translateX: -200,
// 		ease: 'none',
// 	})

// 	.from('.card-wrapper .section #contact', {
// 		opacity: 0,
// 		translateX: 200,
// 		ease: 'none',
// 	});
