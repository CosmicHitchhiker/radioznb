var modal_btn = document.getElementsByClassName("footer-modal_btn");

// Get the modal
var modalHelp = document.getElementById('footer-first_modal');
var modalListen = document.getElementById('footer-second_modal');

// Get images
var modal_button_img = document.getElementsByClassName("footer-modal_btn-img-active");
var modal_header_img = document.getElementsByClassName("footer-modal-header-image");


// Show modal by click and assign header
// Надо написать фнкцию, которая определяет, какая кнопка кликнута, и взависимости от этого открывает модуль, а нет так
// for(i = 0; i < modal_btn.length; i++) {
//     modal_btn[i].onclick = function() {
//         if (i == 0 || i == 2 || i == 4 || i == 6 ) {
//             modalHelp.style.display = "block";
//             modal_header_img[0].src = modal_button_img[i].src.replace("-w", "");
//         } elif 
//     }
// }


modal_btn[0].onclick = function() {
    modalHelp.style.display = "block";
    modal_header_img[0].src = modal_button_img[0].src.replace("-w", "");
}

modal_btn[2].onclick = function() {
    modalHelp.style.display = "block";
    modal_header_img[0].src = modal_button_img[2].src.replace("-w", "");;
}

modal_btn[4].onclick = function() {
    modalHelp.style.display = "block";
    modal_header_img[0].src = modal_button_img[4].src.replace("-w", "");;
}

modal_btn[6].onclick = function() {
    modalHelp.style.display = "block";
    modal_header_img[0].src = modal_button_img[6].src.replace("-w", "");;
}

modal_btn[8].onclick = function() {
    modalHelp.style.display = "block";
    modal_header_img[0].src = modal_button_img[8].src.replace("-w", "");;
}



modal_btn[1].onclick = function() {
    modalListen.style.display = "block";
    modal_header_img[1].src = modal_button_img[1].src;
}

modal_btn[3].onclick = function() {
    modalListen.style.display = "block";
    modal_header_img[1].src = modal_button_img[3].src;
}

modal_btn[5].onclick = function() {
    modalListen.style.display = "block";
    modal_header_img[1].src = modal_button_img[5].src;
}

modal_btn[7].onclick = function() {
    modalListen.style.display = "block";
    modal_header_img[1].src = modal_button_img[7].src;
}

modal_btn[9].onclick = function() {
    modalListen.style.display = "block";
    modal_header_img[1].src = modal_button_img[9].src;
}



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
    };
    if (event.target == modalListen) {
        modalListen.style.display = "none";
    }
});



