// Toggle
//
var acc = document.getElementsByClassName("js--toggle");
var i;

for (i = 0; i < acc.length; i++) {

	acc[i].addEventListener("click", function() {
		this.classList.toggle("is-open");

		var panel = this.nextElementSibling;

		// Toggle vertical 
		if (panel.style.maxHeight && this.dataset.toggle == 'vertical') {
			panel.style.maxHeight = null;
		} 
		else if (!panel.style.maxHeight && this.dataset.toggle == 'vertical') {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}

		// Toggle horizontal
		if (panel.style.maxWidth && this.dataset.toggle == 'horizontal') { 
			panel.style.maxWidth = null;
		} 
		else if (!panel.style.maxWidth && this.dataset.toggle == 'horizontal') {
			panel.style.maxWidth = panel.scrollWidth + "px";
		} 
	});
}

// Toggle preset
//
var togglePreset = document.getElementsByClassName("js--toggle-preset");
var t;

for (t = 0; t < togglePreset.length; t++) {

	togglePreset[t].addEventListener("click", function() {
		this.closest(".preset--toggle").classList.toggle("is-open");
	});
}


// Reference point button
// https://stackoverflow.com/a/40153647
//
var refPoint = document.querySelectorAll('.ref-point div');

	for (let i = 0; i < refPoint.length; i++) {
		refPoint[i].onclick = function() {
			var c = 0;
		while (c < refPoint.length) {
			refPoint[c++].className = '';
		}
		refPoint[i].className = 'is-active';
	};
}