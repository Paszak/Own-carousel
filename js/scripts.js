$(function(){

    var carouselList = $('#carousel ul');
    var indicators = $('.indicators');
    var currentSlide = 0;
    var interval;
    
    startInterval();

    function startInterval() {
        interval = setInterval(nextSlide, 5000);
    }

    function restartInterval() {
        clearInterval(interval);
        startInterval();
    }

    function nextSlide() {
        currentSlide > 3 ? currentSlide = 0 : currentSlide++;
        renderSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide < 1 ? currentSlide = 4 : currentSlide--;
        renderSlide(currentSlide);
    }

    function renderSlide(index) {
        setActiveIndicator(index);
        carouselList.animate({marginLeft: -400 * index}, 500);
    }

    function setActiveIndicator(index) {
        indicators.find('.active').removeClass('active');
        indicators.find('span').eq(index).addClass('active');
    }

    var nextButton = $('.next'),
        prevButton = $('.prev');

    nextButton.click(function(event) {
        event.preventDefault();
        nextSlide();
        restartInterval();
    });

    prevButton.click(function(event) {
        event.preventDefault();
        prevSlide();
        restartInterval();
    });

    indicators.on('click', 'span', function() {
        currentSlide = $(this).index();
        renderSlide(currentSlide);
        restartInterval();
    });

});


