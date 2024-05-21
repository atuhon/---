//swiper
const swiper = new Swiper('.swiper', {

    loop: true,
    speed:2000,
    spaceBetween:24,
    centeredSlides: true,
    initialSlide: 5,

    autoplay: {
        delay: 1000,
    },

    breakpoints:{
        0:{
          slidesPerView:'1.5',
        },
        500:{
            slidesPerView:'auto',
        },
    },
    // pagination: {
    //  el: ".swiper-pagination",
    //  clickable: true,
    // },
    // navigation: {
    // nextEl: ".swiper-button-next",
    //  prevEl: ".swiper-button-prev",
    // },

  });
