const swiper = new Swiper('.swiper', {
    direction: 'horizontal',     // Movimentação horizontal entre os slides
      loop: true,                  // Permitir looping infinito
      slidesPerView: 1,            // Apenas um slide por vez
      spaceBetween: 0,             // Sem espaço entre os slides
      pagination: {
        el: '.swiper-pagination',
        clickable: true,           // Habilitar paginação clicável
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  