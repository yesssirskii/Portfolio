//HAMBURGER

/**
 * Hamburger activation.
 */
function myFunction() {
  var x = document.getElementById("navbar-list");
  
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//SLIDES

/**
 * Function which creates and manages the HTML carousel.
 * @param {*} n 
 */
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("opis");
  if (n > slides.length){
    slideIndex = 1
  };    
  if (n < 1){
    slideIndex = slides.length
  };
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  };
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 5000);
};

var slideIndex = 1;
showSlides(slideIndex);

/**
 * Go to the next slide in the carousel.
 * @param {*} n 
 */
function plusSlides(n) {
  showSlides(slideIndex += n);
}

/**
 * Setting the current slide.
 * @param {*} n 
 */
function currentSlide(n) {
  showSlides(slideIndex = n);
}

/**
 * Open CV PDF in new tab.
 */
function openCV() {
  let link = document.createElement("a");
  link.href = "cv.pdf";
  link.target = "_blank";
  link.click();
}

var navbar = document.getElementById("navbar-list");
var hamburgerActivator = window.matchMedia("(max-width: 600px)");

/**
 * Function which fixes hamburger appearing in hamburger state while not in it.
 */
function hamburgerActivation(){
  if (hamburgerActivator.matches){
    navbar.style.display = "block";
  }
  else{
    navbar.style.display = "none";
  }
}

hamburgerActivation(hamburgerActivator);
hamburgerActivator.addEventListener(hamburgerActivation);

