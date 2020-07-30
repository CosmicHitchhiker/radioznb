
// Get the trigger
var titles = document.getElementsByClassName("accordion-program-title");

// Get the content panel
//var content_panels = document.getElementsByClassName("accordion-program-content");

for (i = 0; i < titles.length; i++) {
	titles[i].addEventListener("click", function() {
		/* Toggle between adding and removing the "active" class,
    	to highlight the button that controls the panel */
		this.classList.toggle("regulars-accordion-active");

		/* Toggle between hiding and showing the active panel */
		var content_panel = this.nextElementSibling;
		if (content_panel.style.display === "block") {
			content_panel.style.display = "none";
		} else {
			content_panel.style.display = "block";
		}
	});
}