var titles = document.getElementsByClassName("accordion-program-title");
var panels = document.getElementsByClassName("accordion-program-content");
for (i = 0; i < titles.length; i++) {
	titles[i].addEventListener("click", function() {
		this.classList.toggle("regulars-accordion-active");
		var content_panel = this.nextElementSibling;
		if (content_panel.style.display == "block") {
			content_panel.style.display = "none";
		} else {
			content_panel.style.display = "block"; 
		}
	});
}


function openProg(evt, progTabN) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-program-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab-program-title");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }  
  document.getElementById(progTabN).style.display = "block";
  evt.currentTarget.className += " active";
}

// // Get the element with id="defaultOpen" and click on it
// document.getElementById("regulars-tabpage-defaultOpen").style.display = "block";
