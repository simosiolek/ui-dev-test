/* Acoordion
 *
 * https://www.w3schools.com/howto/howto_js_accordion.asp
 */
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