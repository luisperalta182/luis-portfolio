// Scroll Funcionality
$(window).on("load", function () {

    $('.animated').each(function () {
        var item = $(this)
        var delay = $(this).data("delay")

        if (delay == null) {
            delay = 0;
        }

        if ($(this).data("scroll") == 0 || $(this).data("scroll") == null) {
            setTimeout(function () {
                item.addClass('in');
            }, delay);
        }

    });
});
$(window).scroll(function () {
    $('.animated').each(function () {
        var position = $(this).offset().top;
        var delay = $(this).data("delay")
        var item = $(this)
        if (delay == null) {
            delay = 0;
        }
        $.fn.scrollBottom = function () {
            return $(document).height() - this.scrollTop() - this.height();
        };
        var topOfWindow = $(window).scrollTop();
        var bottomOfWindow = $(window).scrollBottom();

        if ($(this).data("scroll") != 0 || $(this).data("scroll") != null) {
            if (position < topOfWindow + 700 || position == bottomOfWindow) {
                setTimeout(function () {
                    item.addClass('in');
                }, delay);
            }
        }
    });
});
$('.local-scroll, .nav-link').click(function (e) {
    var jump = $(this).attr('href');
    var position = $(jump).offset();
    $('body, html').stop().animate({
        scrollTop: position.top
    }, 800);
    e.preventDefault();
});

// END OF Scroll Funcionality


// $(document).ready(function() {

//   $("input.form-control").on("keyup change", function() {
//     // If empty
//     if($(this).val() == ""){
//       $(this).removeClass("with-value"); // Remove class
//     }

//     else{
//       $(this).addClass("with-value"); // Add class
//     }
//   });

//   $("textarea.form-control").on("keyup change", function() {
//     // If empty
//     if($(this).val() == ""){
//       $(this).removeClass("with-value"); // Remove class
//     }

//     else{
//       $(this).addClass("with-value"); // Add class
//     }
//   });

// });