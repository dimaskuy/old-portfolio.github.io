// PARALLAX ~
$(window).on('load', function() {
  $('.p1').addClass('showP');
  $('.p2').addClass('showP');
});

$(window).scroll(function() {
  const windowScroll = $(this).scrollTop();

  // SLOW ELEMENTS EFFECT
  $('.jumbotron img').css(`transform`, `translateY(${windowScroll / 16}%)`)
  $('.jumbotron h1').css(`transform`, `translateY(${windowScroll / 20}%)`);

  // LANDING ELEMENTS EFFECT
  if (windowScroll > $('.projects').offset().top - 250) {
    $('.projects .thumbnail').each(function(i) {
      setTimeout(function () {
        $('.projects .thumbnail').eq(i).addClass('show');
      }, 300 * i+1);
    });
  }

  // Versi Vanilla JavaScript
  /*
  if (windowScroll > document.querySelector('.projects').offsetTop - 250) {
    Array.from(document.querySelectorAll('.projects .thumbnail')).forEach((e, i) => {
      setTimeout(function() {
        document.querySelectorAll('.projects .thumbnail')[i].classList.add('show');
      }, 300 * i+1);
    });
  }
  */

  if (windowScroll > $('.contact').offset().top - 250) {
    $('.contact .form-group').addClass('show');
  }
});



// NAVBAR STUFFS ~

// event saat di klik
$('.page-scroll').on('click', function(e) {

// kemudian suruh jQuery ambil tulisan isi href
 const tujuan = $(this).attr('href');

// dan tangkap element yang bersangkutan
 const elementTujuan = $(tujuan);

 // pindahkan scroll
 $('html, body').animate({
   scrollTop: elementTujuan.offset().top - 50
 }, 500, 'swing');

 e.preventDefault();

});
