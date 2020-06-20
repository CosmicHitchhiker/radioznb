// изменять картинки для ссылок в меню при наведении

$(document).ready(function(){
    $("#tablink-listing").hover(
        function() {$("#tablink-listing-img").attr("src","images/tab-programs-bold.png");},
        function() {$("#tablink-listing-img").attr("src","images/tab-programs.png");
    });
    $("#tablink-regulars").hover(
        function() {$("#tablink-regulars-img").attr("src","images/tab-programs-bold.png");},
        function() {$("#tablink-regulars-img").attr("src","images/tab-programs.png");
    });
    $("#tablink-home").hover(
        function() {$("#tablink-home-img").attr("src","images/tab-home-folks.png");},
        function() {$("#tablink-home-img").attr("src","images/tab-home.png");
    });
    $("#tablink-aboutus").hover(
        function() {$("#tablink-aboutus-img").attr("src","images/tab-who-bold.png");},
        function() {$("#tablink-aboutus-img").attr("src","images/tab-who.png");
    });
    $("#tablink-contacts").hover(
        function() {$("#tablink-contacts-img").attr("src","images/tab-where-bold.png");},
        function() {$("#tablink-contacts-img").attr("src","images/tab-where.png");
    });
});

