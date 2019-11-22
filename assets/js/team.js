$(function () {
    $('[data-fancybox]').fancybox();

    
    //順番をランダム
    var rBox = [];
    $('.random').each(function () {
        rBox.push($(this).html());
    });
    rBox.sort(function () {
        return Math.random() - Math.random();
    });
    $('.random').empty();

    i = 0;
    $('.random').each(function () {
        $(this).append(rBox[i]);
        i++;
    });



});
