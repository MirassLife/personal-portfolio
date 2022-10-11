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

window.onscroll = handleFadeAnimations();

function handleFadeAnimations() {
	for (var i = 0; i < fade_downs.length; i++) {
		console.log(fade_downs[i]);
		if (isInViewport(fade_downs[i])) {
			fade_downs[i].classList.add('anim-active');
		}
	}
}
