$(function(){

    var carouselList = $('#carousel ul');

    var myTimer = setInterval(changeSlide, 5000);

    function changeSlide() {
        carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
    }

    function prevSlide() {
        carouselList.animate({'marginRight':-400}, 500, moveLastSlide);
    }

    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});
        // var activeDot = dots.find("")
    }

    function moveLastSlide() {
        var firstItem = carouselList.find("li:last");
        var lastItem = carouselList.find("li:first");
        lastItem.before(firstItem);
        carouselList.css({marginRight:0});
    }

    var nextButton = $('.next'),
        prevButton = $('.prev');

    nextButton.click(function(event) {
        clearInterval(myTimer);
        changeSlide();
        myTimer = setInterval(changeSlide, 5000);
    });

    prevButton.click(function(event) {
        clearInterval(myTimer);
        prevSlide();
        myTimer = setInterval(changeSlide, 5000);
    });

    // var dots = $('.indicators');

});