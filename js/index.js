'use strict';

var colors = ['deepskyblue', 'orange', 'firebrick', 'gold', 'black', 'darkblue'];

var navSelector = '#Index';
var linkSelector = navSelector + ' > * > a';
var targetSelector = navSelector + ' > span';

var target = document.querySelector(targetSelector);

document.querySelectorAll(linkSelector).forEach(menu => {


	menu.addEventListener('focusin', styleTargetBy);
	menu.addEventListener('pointerover', styleTargetBy);

	window.addEventListener('resize', onresize);

	function onresize() {
		if (document.activeElement.closest(linkSelector)) {
			styleTargetBy(document.activeElement);
		} else {
			target.style.width = '';
		}
	}

	function styleTargetBy(e) {
		var rect = e.target.getBoundingClientRect();
		target.style.width = rect.width + 'px';
		target.style.height = rect.height + 'px';
		target.style.left = rect.left + window.pageYOffset + 'px';
		target.style.top = rect.top + window.pageYOffset + 'px';
		target.style.borderColor = colors[Math.floor(Math.random() * colors.length)];
		target.style.transform = 'none';
	}
});
