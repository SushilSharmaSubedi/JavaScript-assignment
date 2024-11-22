document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    speed: 1000,
    slidesPerView: 1,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 2,
    },
    autoplay: {
      delay: 2000,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    // },
  });
});
