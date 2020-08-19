$(document).ready(function() {
    $('.accordion__btn').on('click', function(){
        $('.accordion__item').removeClass('accordion__item--active');
        $(this).parent().addClass('accordion__item--active');
    });
});