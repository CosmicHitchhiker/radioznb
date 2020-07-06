// Get the modal
var modal_1 = document.getElementById('first_modal');
var modal_2 = document.getElementById('second_modal');

// Get the button that opens the modal
var btn_1 = document.getElementById("first_btn");
var btn_2 = document.getElementById("second_btn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal-close")[0];


// When the user clicks the button, open the modal 
btn_1.onclick = function() {
    modal_1.style.display = "block";
}
btn_2.onclick = function() {
    modal_2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal_1.style.display = "none";
    modal_2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal_1) {
        modal_1.style.display = "none";
    }
    if (event.target == modal_2) {
        modal_2.style.display = "none";
    }
}


