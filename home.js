/*swiper*/
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 5000,
    },    
    pagination: {
      el: '.swiper-pagination',
    },     
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },   
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


