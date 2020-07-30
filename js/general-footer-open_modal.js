// Get the modal
var modalHelp = document.getElementById('footer-first_modal');
var modalListen = document.getElementById('footer-second_modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("footer-modal-close")
var spanHelp = spans[0];
var spanListen = spans[1];

// When the user clicks on <span> (x), close the modal
spanHelp.onclick = function() {
    modalHelp.style.display = "none";
}

spanListen.onclick = function() {
    modalListen.style.display = "none";
}

// When the user clicks outside the modal, close the modal 
window.addEventListener("click", function(event) {
    if (event.target == modalHelp) {
        modalHelp.style.display = "none";
    }
    if (event.target == modalListen) {
        modalListen.style.display = "none";
    }
});

