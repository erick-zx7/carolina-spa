window.swiper = new Swiper({
    el: '.slider__contenedor',
    slideClass: 'slider__slide',
    createElements: true,
    autoplay: {
        delay: 3000
    },
    loop: true,
    spaceBetween: 40,
    pagination: true,
    effect: 'coverflow'
});