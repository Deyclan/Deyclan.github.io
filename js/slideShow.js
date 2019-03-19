/*
$('div[class*="slideshow"]').find("> div:gt(0)").hide();

setInterval(function() {
    $('div[class*="slideshow"]').find('> div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .append();
},  3000);

*/

var slideIndex = 0;
showAllSlides();

function showSlides(slideClassName) {
    var slides = document.getElementsByClassName(slideClassName);

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
        var tmpSlideIndex = slideIndex % slides.length;

        slides[tmpSlideIndex].style.transition = "opacity 2s";
        slides[tmpSlideIndex].style.opacity = 1;
    }
}

function showAllSlides() {
    slideIndex++;
    showSlides("slidesSteamOut");
    showSlides("slidesHTBAH");
    showSlides("slidesTimeCruise");
    showSlides("slidesURSS");
    showSlides("slidesSpaceShooter");
    showSlides("slidesProjetOeuvre");
    showSlides("slidesP2PVOiP");
    setTimeout(showAllSlides, 5000);
}