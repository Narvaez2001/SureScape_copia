document.querySelectorAll('.swiper').forEach((swiperEl) => {
    new Swiper(swiperEl, {
        loop: true,
        pagination: {
            el: swiperEl.querySelector('.swiper-pagination'),
            clickable: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });
});