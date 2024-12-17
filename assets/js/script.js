//PRODUCT HOVER ANIMATION
//$(".product-box").hover(function() {
//var el = $(this).find('.hover'),
//curHeight = el.height(),
//autoHeight = el.css('height', 'auto').height(),
//finHeight = $('.product-box').data('hover') == 1 ? "28px" : autoHeight;
//$('.product-box').data('hover', $(this).data('hover') == 1 ? false : true);
//el.height(curHeight).stop().animate({
//height: finHeight
//});
//});

//Main CAROUSAL

$('.bottle-product').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,
  Infinity: true,
  autoplaySpeed: 2000,
});

//var imageCount = $('.bo-banner img').length;

//$('.bo-banner').slick({
//    dots: imageCount > 1, 
//    infinite: true,
//    arrows: false,
//    autoplay: true,
//    fade: true,
//    speed: 500,
//});

$('.product-slick').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
  dots: false,
  centerMode: true,
  centerPadding: '54px',
  responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
});

//OWL CAROUSAL
$('.mph-owl').owlCarousel({
  loop: false,

  nav: true,
  dots: false,
  autoplay: false,
  autoplayTimeout: 4000,
  responsive: {
      0: {
          items: 2,
          margin: 7
      },
      600: {
          items: 3,
          margin: 8
      },
      960: {
          items: 4,
          margin: 10
      },
      1200: {
          items: 4,
          margin: 15
      }
  }
});



//OWL CAROUSAL- PRODUCT DETAILS PAGE
$('.recent-owl').owlCarousel({
  loop: false,
  nav: true,
  dots: false,
  autoplay: false,
  mouseDrag: false,
  autoplayTimeout: 4000,
  responsive: {
      0: {
          items: 2,
          margin: 7
      },
      480: {
          items: 2,
          margin: 7
      },

      768: {
          items: 4,
          margin: 10
      },
      992: {
          items: 4,
          margin: 10
      },
      1200: {
          items: 6,
          margin: 10
      }
  }
});


//OWL CAROUSAL- MODAL
$('.modal-owl').owlCarousel({
  loop: false,
  nav: true,
  dots: false,
  autoplay: false,
  mouseDrag: false,
  autoplayTimeout: 4000,
  responsive: {
      0: {
          items: 1,
          margin: 0
      },
      480: {
          items: 2,
          margin: 8
      },

      768: {
          items: 3,
          margin: 10
      },
      992: {
          items: 3,
          margin: 10
      },
      1200: {
          items: 3,
          margin: 10
      }
  }
});


//FLOATING BAR
var windowWidth = $(window).width();
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 50 && windowWidth > 767) {
      $("#header").addClass("menu-bar");
      $("#sec-nav").addClass("sec-scroll");
      $(".menu-icon").addClass("showing");
      $(".sec-menu").addClass("hide");
  } else if (windowWidth > 767) {
      $("#header").removeClass("menu-bar");
      $("#sec-nav").removeClass("sec-scroll");
      $(".dropdown").removeClass("show");
      $(".menu-icon").removeClass("showing");
      $(".sec-menu").removeClass("hide");
  }

});






///carousel touch enable
$(".carousel").on("touchstart", function (event) {
  var xClick = event.originalEvent.touches[0].pageX;
  $(this).one("touchmove", function (event) {
      var xMove = event.originalEvent.touches[0].pageX;
      if (Math.floor(xClick - xMove) > 5) {
          $(this).carousel('next');
      } else if (Math.floor(xClick - xMove) < -5) {
          $(this).carousel('prev');
      }
  });
  $(".carousel").on("touchend", function () {
      $(this).off("touchmove");
  });
});




//// CLOSE NAVBAR TOOGLE AFTER CLICK IN MOBILE
//if (jQuery(window).width() < 960) {
//    jQuery('.navbar-collapse a').click(function(e) {
//        if (jQuery(e.target).is('a') && jQuery(e.target).attr('class') != 'dropdown-toggle') {
//            jQuery('.navbar-collapse').collapse('toggle');
//        }
//    });
//}


$(document).ready(function () {
  $('.menu-icon').click(function () {
      $('.sec-menu').toggleClass("sec-menu-show");

  });
})






////FILTER OPTION ACTIVE CLASS ADD
$(document).ready(function () {

  $('.menu-icon').click(function () {
      $('.middle-menu').removeClass("active");
      $(this).addClass("active");
  });
})

$('a[href="#"]').click(function (event) {
  event.preventDefault();
});


//////SMOOTH SCROLLING
$(document).ready(function () {
  $(".banner-menu a").on('click', function (event) {
      if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 1000, function () {
              window.location.hash = hash;
          });
      }
  });
});

//SEARCH BAR
$(function () {
  $(".search-stick-enable").on("click", function (e) {
      $(".search-stick").toggleClass("show");
  });

});


$('.search-stick').each(function () {
  var $this = $(this);
  var field = $this.find('[type=text], [type=file], [type=email], [type=password], textarea');
  var span = $(this).find('> span');
  var onBlur = function () {
      if ($.trim(field.val()) == '') {
          field.val('');
          span.fadeIn(100);
      } else {
          span.fadeTo(100, 0);
      }
  };
  field.focus(function () {
      span.fadeOut(100);
  }).blur(onBlur);
  onBlur();
});


/// DROPDOWN HOVER ENABLE
/*$('.sec-menu .dropdown').hover(function() {
  $(this).find('.dropdown-menu').delay(0).fadeIn(300);
}, function() {
  $(this).find('.dropdown-menu').delay(0).fadeOut(100);
});*/


////LIST AND GRID VIEW
$(document).ready(function () {

  $('#list').click(function () {
      $('#list-grid').toggleClass("list-view");
      $('#list').toggleClass("active");
      $('#grid').removeClass("active");


  });
})
$(document).ready(function () {

  $('#grid').click(function () {
      $('#list-grid').removeClass("list-view");
      $('#grid').addClass("active");
      $('#list').removeClass("active");


  });
})


///FILTER MOBILE
$(document).ready(function () {
  $('#filter-expand-mbl').click(function () {
      $('.left-box').toggleClass("filter-mbl");
  });
})


/////TEXT LIMIT - PRODUCT DETAILS PAGE
var windowWidth = $(window).width();
if (windowWidth > 992) {
  var txt = $('.short-des').text();
  if (txt.length)
      $('.short-des').text(txt.substring(0, 800) + '.....');
} else if (windowWidth > 768) {
  var txt = $('.short-des').text();

  if (txt.length)
      $('.short-des').text(txt.substring(0, 400) + '.....');
} else if (windowWidth > 300) {
  var txt = $('.short-des').text();
  $('#show').removeClass('show');
  if (txt.length)
      $('.short-des').text(txt.substring(0, 400) + '.....');
}

//TEXT LIMIT - PRODUCT NAME
$(function () {

  $(".book-name").each(function (i) {

      var len = $(this).text().length;

      if (len > 30) {

          $(this).text($(this).text().substr(0, 34) + '...');

      }
  });
});


//add class on specific width

// header-dropdown
$(document).ready(function () {

  $('.ab-header__dropdown').click(function () {

      $('.ab-header__dropdown').toggleClass("active");
      $('.ab-header__dropdown-menu ').toggleClass("active");
      $('.ab-header__overlay').toggleClass("active");


  });
  $('.ab-header__overlay').click(function () {
      $('.ab-header__overlay').toggleClass("active");
      $('.ab-header__dropdown').toggleClass("active");
      $('.ab-header__dropdown-menu ').toggleClass("active");



  });
  $('.ab-header__close').click(function () {
      $('.ab-header__overlay').removeClass("active");
      $('.ab-header__dropdown').removeClass("active");
      $('.ab-header__dropdown-menu ').removeClass("active");



  });
  if ($(".ab-header__dropdown-menu").hasClass("active")) {
      alert("aa")
  }

})
var $sliderSlides = $('.slider-photos .slides.owl-carousel'),
  $sliderThumbs = $('.slider-photos .slider-thumbs.owl-carousel'),
  speed = 700,
  activeClass = 'active';

// Start Carousel
$sliderSlides.owlCarousel({
  loop: true,
  items: 1,
  margin: 0,
  nav: true,
  smartSpeed: speed
})
  .on('click', '.owl-prev', function () {
      var i = $(this).index();
      var activeThumb = $sliderThumbs.find('.slide.active').parent();
      var all = $sliderThumbs.find('.owl-item').length - 1;

      if (activeThumb.prev().length) {
          activeThumb.find('.slide').removeClass(activeClass);
          activeThumb.prev().find('.slide').addClass(activeClass);
          $sliderThumbs.trigger('to.owl.carousel', [i, speed, true]);
      } else {
          $sliderThumbs.find('.owl-item').eq(all).find('.slide').addClass(activeClass);
          $sliderThumbs.trigger('to.owl.carousel', [all, speed, true]);
      }

  })
  .on('click', '.owl-next', function () {
      var i = $(this).index();
      var activeThumb = $sliderThumbs.find('.slide.active').parent();

      if (activeThumb.next().length) {
          activeThumb.find('.slide').removeClass(activeClass);
          activeThumb.next().find('.slide').addClass(activeClass);
          $sliderThumbs.trigger('to.owl.carousel', [i, speed, true]);
      } else {
          $sliderThumbs.find('.owl-item').eq(0).find('.slide').addClass(activeClass);
          $sliderThumbs.trigger('to.owl.carousel', [0, speed, true]);
      }
  });

$sliderThumbs
  .owlCarousel({
      loop: true,
      margin: 0,
      items: 5,
      nav: true,
      smartSpeed: speed
  })
  .on('click', '.owl-item', function () {
      var i = $(this).index();

      $sliderThumbs.trigger('to.owl.carousel', [i, speed, true]);
      $sliderSlides.trigger('to.owl.carousel', [i, speed, true]);
  })

// If the loop is disabled
// .on('click', '.owl-next.disabled', function() {
// 	$sliderThumbs.trigger('to.owl.carousel', [0, speed, true]);
// })
// .on('click', '.owl-prev.disabled', function() {
// 	var last = $sliderThumbs.find('.owl-item').length;
// 	$sliderThumbs.trigger('to.owl.carousel', [last, speed, true]);
// })

$('.slider-photos .counter .all').text($('.slider-photos .slider-thumbs .slide').length);

$sliderThumbs.find('.slide').on('click', function (event) {
  event.preventDefault();

  $sliderThumbs.find('.slide.active').removeClass(activeClass);
  $(this).addClass(activeClass);
});
$(document).ready(function () {
  $("#owl-demo").owlCarousel({
      navigation: true,
      items: 1,
      loop: true,
      nav: true,
      URLhashListener: true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const inputFields = document.querySelectorAll(".cx-contact__input");
  const checkInputField = (inputField) => {
      const asteriskOut = inputField.nextElementSibling;
      if (asteriskOut && asteriskOut.classList.contains("cx-contact__astrparent")) {
          if (inputField.value.trim() !== "") {
              asteriskOut.classList.add("active");
          } else {
              asteriskOut.classList.remove("active");
          }
      }
  };

  inputFields.forEach((inputField) => {
      inputField.addEventListener("keyup", () => {
          checkInputField(inputField);
      });

      checkInputField(inputField);
  });
});

//const drpbutton = document.querySelectorAll(".cx-odrsmry__txtcart");
//const drpbody = document.querySelectorAll(".cx-copdt__outer");
//const drparrow = document.querySelectorAll(".cx-copdt__outer a");

//drpbutton.forEach((btn, index) => {
//    btn.addEventListener("click", () => {

//        drpbody[index].classList.toggle("active");
//    });
//});

const drpbutton = document.querySelectorAll(".cx-odrsmry__txtcart");
const drpbody = document.querySelectorAll(".cx-copdt__outer");
const drparrow = document.querySelectorAll(".cx-copdt__link svg");

drpbutton.forEach((btn, index) => {
  btn.addEventListener("click", () => {
      drpbody[index].classList.toggle("active");
      if (drpbody[index].classList.contains("active")) {
          drparrow[index].style.transform = "rotate(180deg)";
      } else {
          drparrow[index].style.transform = "rotate(0deg)";
      }
  });
});


// dropdown style script

var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "select-menu":*/
x = document.getElementsByClassName("select-menu");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);