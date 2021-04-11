$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        responsive:{
            0:{
                items: 1
            }
        }
    });

    getExperience();
});

function getExperience(){
    var currentYear = (new Date).getFullYear();
    var yearFundation = $('.quantity').data("fundation");

    $(".quantity").text(currentYear - yearFundation);
    $(".current-year").text(currentYear + ".");
}


// http://ahrengot.com/tutorials/greensock-javascript-animation

var $circle = $('.circle');

function moveCircle(e) {
	TweenLite.to($circle, 0.3, {
    css: {
      left: e.pageX,
      top: e.pageY
    }
  });
}

$(window).on('mousemove', moveCircle);



/* light dark mode */

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});



/* img on hover landing */


const items = document.querySelectorAll('.item')
const image = document.querySelector('.hover-img')

items.forEach((el) => {
  el.addEventListener('mouseover', (e) => {
    imageData = e.target.getAttribute('data-image')
    console.log(imageData)
    e.target.style.zIndex = 99
    image.setAttribute('src', imageData)
  })
  el.addEventListener('mousemove', (e) => {
    image.style.top = e.clientY + 'px'
    image.style.left = e.clientX + 'px'
  })
  el.addEventListener('mouseleave', (e) => {
    e.target.style.zIndex = 1
    image.setAttribute('src', '')
  })
})


/* img hover on portfolio */

$(document).ready(function() {
  TweenMax.set(".project-preview", { width: 0 });

  var tl = new TimelineLite();

  $(document)
    .on("mouseover", ".navigation-item", function(evt) {
      tl = new TimelineLite();
      tl.to($(".project-preview"), 1, {
        width: "600px",
        ease: Expo.easeInOut
      });
    })
    .on("mouseout", ".navigation-item", function(evt) {
      tl = new TimelineLite();
      tl.to($(".project-preview"), 0.5, {
        width: 0,
        ease: Expo.easeInOut
      });
    });
});

$(".navigation-link-1").hover(function() {
  $(".project-preview").css({ "background-image": "url(img/works/Portfolio-1.png)" });
});

$(".navigation-link-2").hover(function() {
  $(".project-preview").css({ "background-image": "url(img/works/Accedo-Digital-Our-work-Accedo-Digital.png)" });
});

$(".navigation-link-3").hover(function() {
  $(".project-preview").css({ "background-image": "url(img/works/at.png)" });
});

$(".navigation-link-4").hover(function() {
  $(".project-preview").css({ "background-image": "url(img/works/Davidson-Realty-Incorporated.png)" });
});

$(".navigation-link-5").hover(function() {
  $(".project-preview").css({ "background-image": "url(img/works/Maxwell-Floor-Coverings.png)" });
});

$(".navigation-link-6").hover(function() {
  $(".project-preview").css({ "background-image": "url(img/works/portfolio-4.png)" });
});

$(".navigation-link-7").hover(function() {
  $(".project-preview").css({ "background-image": "url(img/works/NTG.png)" });
});

$(".navigation-link-8").hover(function() {
  $(".project-preview").css({ "background-image": "url(img/works/portfolio-3.png)" });
});

$(".navigation-link-9").hover(function() {
  $(".project-preview").css({ "background-image": "url(img/works/portfolio-2.png)" });
});

$(".navigation-link-10").hover(function() {
  $(".project-preview").css({ "background-image": "url(img/works/portfolio-5.png)" });
});

$(".navigation-link-11").hover(function() {
  $(".project-preview").css({ "background-image": "url(img/works/Think-Custom-Design.png)" });
});

$(window).scroll(function() {
  var scroll = $(window).scrollTop(),
    dh = $(document).height(),
    wh = $(window).height();
  scrollPercent = (scroll / (dh - wh)) * 100;
  $(".progressbar").css("height", scrollPercent + "%");
});