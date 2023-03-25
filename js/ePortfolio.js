/*HAMBURGER*/

function myFunction() {
  var x = document.getElementById("navbar-list");
  
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/*SLIDES*/

/**
 * Function which creates and meneges the HTML carousel.
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
  link.href = "Ivan Matejčić_CV.pdf";
  link.target = "_blank";
  link.click();
}

