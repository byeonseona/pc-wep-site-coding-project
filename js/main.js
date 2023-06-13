/* li */
$('header nav > .gnb > li').hover(
  function () {
    $(this).find('.sub-menu').stop().slideDown();
  },
  function () {
    $(this).find('.sub-menu').stop().slideUp();
  }
);

/* 햄버거 */
var burger = $('.menu-trigger');

burger.each(function (index) {
  var $this = $(this);

  $this.on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active-' + (index + 1));
  });
});

var h = 0;

$('#overlay').css('opacity', 0);
$(burger).on('click', function () {
  if (h == 0) {
    $('#overlay').animate(
      {
        top: '0',
        opacity: 1,
      },
      500
    );
    $('#overlay').css('zIndex', 5);
    $('.logo').css('zIndex', 0);
    $('.menu-trigger span').css('background-color', '#666');
    $(this).addClass('active-1');
    h++;
  } else if (h == 1) {
    $('#overlay').animate(
      {
        top: '-1080',
        opacity: 0,
      },
      500
    );
    $(this).removeClass('active-1');
    $('.menu-trigger span').css('background-color', '#fff');
    h--;
  }
  $(window).scroll(function () {
    sct = $(window).scrollTop();
    if (sct > 30) {
      $('#overlay').css(
        {
          opacity: 0,
        },
        500
      );
      $(burger).removeClass('active-1');
      h = 0;
    }
  });
});

/* Scroll Magic */
const spyEl = document.querySelectorAll('section.scroll-spy');
spyEl.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, //보여짐 여부를 감지할 요소를 지정
    triggerHook: 0.8,
  })

    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

/* 탑버튼 */
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('.top-btn').fadeIn();
    } else {
      $('.top-btn').fadeOut();
    }
  });

  $('.top-btn').click(function (event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 300);
  });
});

const ripglow2 = document.querySelector('.ripglow-2');
window.addEventListener('scroll', (event) => {
  const windowHeightHalf = window.innerHeight / 2 + 200;
  const ripglow2Height = ripglow2.getBoundingClientRect().top;
  console.log(windowHeightHalf);
  console.log(ripglow2Height);
  if (windowHeightHalf > ripglow2Height) {
    ripglow2.classList.add('transform');
  } else {
    ripglow2.classList.remove('transform');
  }
});
