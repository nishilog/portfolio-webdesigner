$(function(){
  let workSwiper = new Swiper('.swiper-container',{
    slidesPerView: 1,
    pagination: {
      el:'.swiper-pagination',
      type:'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    visibilityFullFit:true,
    centeredSlides:true,
  });
  $(window).on('scroll', function(){
    if($(this).scrollTop() > 0){ 
      $('.header__inner').addClass('scroll');
    }
    else{
      $('.header__inner').removeClass('scroll');
    }
  });

  $('.btn-nav').on('click', function(){
    $('.btn-nav__bar').toggleClass('active');
    $('.gloval-nav').toggleClass('active');
    $('body').toggleClass('noscroll');
  });
  
  $(window).on('resize',function(){
   let win_width = $(this).width();
   if(win_width <= 768){
     $('body').removeClass('noscroll');
   }
  });
});

