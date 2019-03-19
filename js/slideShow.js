/*
$("#slideshow-SteamOut").find("> img:gt(0)").hide();

setInterval(function() {
    $('#slideshow-SteamOut').find('> div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow-SteamOut');
},  10000);
*/
/*
$("#slideshow").find("> div:gt(0)").hide();

setInterval(function() {
    $('#slideshow').find('> div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
},  10000);
*/

$('div[class*="slideshow"]').find("> div:gt(0)").hide();

setInterval(function() {
    $('div[class*="slideshow"]').find('> div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .append();
},  10000);