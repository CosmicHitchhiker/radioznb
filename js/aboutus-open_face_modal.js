// Get the modal
var face_modal = document.getElementsByClassName("aboutus-face-modal");

// Get the image that opens the modal 
var face_img = document.getElementsByClassName("aboutus-face");
var face_img_large = document.getElementsByClassName("aboutus-face-large");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
face_img[0].onclick = function() {
    face_modal[0].style.display = "block";
    face_img_large[0].src = face_img[0].src;
}
face_img[1].onclick = function() {
    face_modal[1].style.display = "block";
    face_img_large[1].src = face_img[1].src;
}
face_img[2].onclick = function() {
    face_modal[2].style.display = "block";
    face_img_large[2].src = face_img[2].src;
}
face_img[3].onclick = function() {
    face_modal[3].style.display = "block";
    face_img_large[3].src = face_img[3].src;
}
face_img[4].onclick = function() {
    face_modal[4].style.display = "block";
    face_img_large[4].src = face_img[4].src;
}
face_img[5].onclick = function() {
    face_modal[5].style.display = "block";
    face_img_large[5].src = face_img[5].src;
}
face_img[6].onclick = function() {
    face_modal[6].style.display = "block";
    face_img_large[6].src = face_img[6].src;
}


// When the user clicks on <span> (x), close the modal
span[0].onclick = function() {
    face_modal[0].style.display = "none";
}
span[1].onclick = function() {
    face_modal[1].style.display = "none";
}
span[2].onclick = function() {
    face_modal[2].style.display = "none";
}
span[3].onclick = function() {
    face_modal[3].style.display = "none";
}
span[4].onclick = function() {
    face_modal[4].style.display = "none";
}
span[5].onclick = function() {
    face_modal[5].style.display = "none";
}
span[6].onclick = function() {
    face_modal[6].style.display = "none";
}


window.onclick = function(event) {
	for (i = 0; i < face_modal.length; i++) {
		if (event.target == face_modal[i]) {
			face_modal[i].style.display = "none";
		}
	}
}

