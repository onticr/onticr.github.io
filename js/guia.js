(function($) {
  $(function() {
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    /*swiperHospedaje.init();*/
  }); // end of document ready
})(jQuery); // end of jQuery name space
/*$(window).load(function(){
  swiperHospedaje.update();
}); */
/*$(document).ready(function() {
            $(window).resize()
});*/
lazyload();
/*HOSPEDAJE*/
var hospedajeURL = 'https://docs.google.com/spreadsheets/d/1L_CUo-Mu3wgcAanswVW0E60x0vzcrKV0hSGMBpcJtpI/edit#gid=0';
var hospTemp = Handlebars.compile($('#hospedajeTemplate').html());
$('#hospedaje').sheetrock({
  url: hospedajeURL,
  rowTemplate: hospTemp

});

var swiperHospedaje = new Swiper('.sw1', {
  cssMode: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});




/*COMIDA*/

var comidaURL = 'https://docs.google.com/spreadsheets/d/1L_CUo-Mu3wgcAanswVW0E60x0vzcrKV0hSGMBpcJtpI/edit#gid=1445470955';
/////////Template de Handlebars
var comidaTemp = Handlebars.compile($('#comidaTemplate').html());
$('#comida').sheetrock({
  url: comidaURL,
  rowTemplate: comidaTemp
});

var swiperComida = new Swiper('.sw2', {
  updateOnImagesReady: true,
  cssMode: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});


/*ACTIVIDADES*/

var actividadesURL = 'https://docs.google.com/spreadsheets/d/1L_CUo-Mu3wgcAanswVW0E60x0vzcrKV0hSGMBpcJtpI/edit#gid=1199770684';
/////////Template de Handlebars
var actTemp = Handlebars.compile($('#actTemplate').html());
$('#actividades').sheetrock({
  url: actividadesURL,
  rowTemplate: actTemp
});

var swiperActividades = new Swiper('.sw3', {
  cssMode: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});


/*Cultura y Arte*/

var culturaURL = 'https://docs.google.com/spreadsheets/d/1L_CUo-Mu3wgcAanswVW0E60x0vzcrKV0hSGMBpcJtpI/edit#gid=1019481369';
/////////Template de Handlebars
var cultTemp = Handlebars.compile($('#culturaTemplate').html());
$('#cultura').sheetrock({
  url: culturaURL,
  rowTemplate: cultTemp
});

var swiperCultura = new Swiper('.sw4', {
  cssMode: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});

/*Servicios*/

var serviciosURL = 'https://docs.google.com/spreadsheets/d/1L_CUo-Mu3wgcAanswVW0E60x0vzcrKV0hSGMBpcJtpI/edit#gid=1777278168';
/////////Template de Handlebars
var serviciosTemp = Handlebars.compile($('#serviciosTemplate').html());
$('#servicios').sheetrock({
  url: serviciosURL,
  rowTemplate: serviciosTemp
});

var swiperServicios = new Swiper('.sw5', {
  cssMode: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});


/*Esto permite que los sliders funcionen*/
setTimeout(() => {
  swiperHospedaje.update()
  swiperComida.update()
  swiperServicios.update()
}, 1500)

setTimeout(() => {
  swiperActividades.update()
  swiperCultura.update()
}, 1700)