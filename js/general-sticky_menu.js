// can play with the offset value to get the smooth results you are looking for.
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("menu");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  };
}
