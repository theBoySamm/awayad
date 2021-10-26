window.onscroll = function () {
  myFunction();
};

var navbar = document.querySelector(".navbar");

var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
    navbar.style.backgroundColor = "#4A403A";
    navbar.style.zIndex = "999";
  } else {
    navbar.classList.remove("sticky");
    navbar.style.backgroundColor = "transparent";
    navbar.style.transition = "0.5s ease-out";
  }
}
