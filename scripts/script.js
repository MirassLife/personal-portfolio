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

var c = document.getElementById('canv');
var $ = c.getContext('2d');

var col = function (x, y, r, g, b) {
	$.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
	$.fillRect(x, y, 1, 1);
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
