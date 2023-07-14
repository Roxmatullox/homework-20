function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function myFunctio() {
  var element = document.body;
  element.classList.toggle("light-mode");
}



$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});


