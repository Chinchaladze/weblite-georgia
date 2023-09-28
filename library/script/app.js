$(document).ready(function() {
    $burgerButton = $('.burger');
    $closeButton = $('.fa-xmark');
    $menuSection = $('.links')

    $burgerButton.on('click', function() {
        $menuSection.toggleClass('active');
    });
    $closeButton.on('click', function() {
        $menuSection.removeClass('active');
    });
    // Loading Screen
    setTimeout(function () {
        $(".loading-screen").fadeOut();
        $(".content-body").fadeIn();
    }, 2000);
});
