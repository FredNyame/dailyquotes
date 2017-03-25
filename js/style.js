$(function(){
     $('#font_change').fadeOut().fadeIn(3000);

     $('.img_info').on('click', function(){
       var src= $(this).attr('src');
       $("#modal").fadeIn();
       $('.modal_wrapper img').attr('src', src);
   });
   $('.modal_close').on('click', function(){
     $('#modal').fadeOut();
   });
   });
