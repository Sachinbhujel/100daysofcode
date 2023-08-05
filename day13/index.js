var slideIndex = 1;
showSlide(slideIndex);

function plusOrMinus(n){
  showSlide(slideIndex += n);
}

function showSlide(n){
  var photos = document.getElementsByClassName("photos");
  
  if (n > photos.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = photos.length;
  }
  
  for (i = 0; i < photos.length; i++) {
    photos[i].style.display = "none"; 
  }
  photos[slideIndex-1].style.display = "block";
}
