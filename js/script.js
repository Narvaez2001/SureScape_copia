// Owlcarousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
      margin: 10,
      nav: true,
      autoplay: true,
      autoplayTimeout: 9000,
      autoplayHoverPause: true,
      center: true,
      navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
      ],
      responsive:{
          0:{
              items: 1,
              nav: false // Desactiva las flechas en pantallas pequeñas
          },
          600:{
              items: 1,
              nav: false // Desactiva las flechas en pantallas medianas
          },
          1000:{
              items: 3,
              nav: true // Activa las flechas en pantallas grandes
          }
      }
    });
  });
  