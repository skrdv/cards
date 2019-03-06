(function ($) {

  const card = $('.card');

  function addCards() {
    for (let i = 0; i < 9; i++) {
      card.clone().insertAfter(card);
    }
  }

  function addSlides() {
    let slide = card.clone().appendTo('.card-slider');

    for (let i = 0; i < 20; i++) {
      slide.clone().insertAfter(slide);
    }
  }

  function initSlider() {
    let slider = $('.card-slider');
    
    slider.slick({
      infinite: false,
      adaptiveHeight: true,
      spaceBetween: 20,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            adaptiveHeight: true,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            adaptiveHeight: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            adaptiveHeight: true,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: false,
          }
        }
      ]
    });

    slider.on('init', function(){
      clickCard();
    });

  }

  function clickCard() {
    $('.click').on('click', function() {
      alert('Click');
    });
  }  

  $(document).ready(function() {

    addCards();

    addSlides();
    
    initSlider();
      
    clickCard();

  });
  
})(jQuery);