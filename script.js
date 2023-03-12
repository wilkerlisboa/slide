// Defina o slideIndex como 1
var slideIndex = 1;
showSlides(slideIndex);

// Controles próximos/anteriores
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  // Redefinir slideIndex se exceder o número de slides
  if (n > slides.length) {
    slideIndex = 1;
  }
  else if (n < 1) {
    slideIndex = slides.length;
  }

  // Ocultar todos os slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Mostrar o slide com o slideIndex atual
  slides[slideIndex-1].style.display = "block";
}