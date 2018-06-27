// js for responsive nav bar
$('#mobNavBtn').click( function() {
  if($('.menu').hasClass('show')) {
    $('.menu').removeClass('show');
  } else {
    $('.menu').addClass('show');
  }
});

// js for top slides starts
$(document).ready(function(){
  $('.new-slider').slick({
    autoplay: true,
    arrows: false,
    pauseOnHover: true,
    pauseOnFocus: false,
    autoplaySpeed: 1000
  });
});
// js for top slides ends

// js for team slider starts
$('.members').slick({
  arrows: false,
  pauseOnHover: false,
  pauseOnFocus: false,
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 490,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }
  ]
});
// js for team slider ends

// js for clients slide starts
$('.client_slide').slick({
  autoplay: true,
  arrows: false,
  pauseOnHover: true,
  pauseOnFocus: true,
  autoplaySpeed: 1000,
  dots: true
});
// js for clients slide ends

// js for scroll top_bar starts
$(document).ready(function() {
  var scrollTop = $(".scrollTop");

  $(window).scroll(function() {
    var topPos = $(this).scrollTop();
    console.log(topPos);

    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");
    } else {
      $(scrollTop).css("opacity", "0");
    }

    if (topPos > 0) {
      $('.top_bar').addClass('active');
    } else {
      $('.top_bar').removeClass('active');
    }
  });

  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;

  });

  var h1 = $("#h1").position();
  var h2 = $("#h2").position();
  var h3 = $("#h3").position();

  $('.link1').click(function() {
    $('html, body').animate({
      scrollTop: h1.top
    }, 500);
    return false;

  });

  $('.link2').click(function() {
    $('html, body').animate({
      scrollTop: h2.top
    }, 500);
    return false;

  });

  $('.link3').click(function() {
    $('html, body').animate({
      scrollTop: h3.top
    }, 500);
    return false;

  });

});
// js for scroll top_bar ends

// js for work filtering starts
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";

  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}
function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    $('#myBtnContainer button').removeClass('active');
    this.className += " active";
  });
}
// js for work filtering ends

//js for number increment starts
$('.count').each(function () {
  $(this).prop('Counter',0).animate({
    Counter: $(this).text()
  }, {
    duration: 4000,
    easing: 'swing',
    step: function (now) {
      $(this).text(Math.ceil(now));
    }
  });
});
//js for number increment ends

// js for progress bar starts
$(document).ready(function(){
  startAnimation();
  function startAnimation(){
    jQuery('.skills').each(function(){

      jQuery(this).find('.skillbar').animate({
        width:jQuery(this).attr('data-percent')
      },6000);

    });
  }
});
// js for progress bar ends
