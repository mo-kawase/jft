$(function () {

    //PC版Navi固定
    if (!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
        var navPos = $("nav").offset().top;
        $(window).scroll(function () {
            if ($(window).scrollTop() > navPos) {
                $("nav").css("position", "fixed");
            } else {
                $("nav").css("position", "static");
            }
        });
    }

    //スマホ版ハンバーガーボタン
    $("#responsive_nav").click(function () {
        $("nav ul").slideToggle(200);
    });

    //キースライド
    $('.slick_slide').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        arrows: true,
        prevArrow: '<img src="assets/img/top/control_prev.png" class="slide-arrow prev-arrow">',
        nextArrow: '<img src="assets/img/top/control_next.png" class="slide-arrow next-arrow">'
    });

    //Topics2ファンシーボックス
    $('[data-fancybox]').fancybox();
    
    //コンテンツのfadein
    if (!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
        $(window).scroll(function () {
            $('.fadein').each(function () {
                var targetElement = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > targetElement - windowHeight + 100) {
                    $(this).css('opacity', '1');
                    $(this).css('transform', 'translateY(0)');
                }
            });
        });
    }
});
