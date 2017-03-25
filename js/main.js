/*$(function(){
  $.fn.modal= function(opt){
    var settings, createModal, body;

     setting= $.extend({
       'modal':'jquery-modal',
       'close': 'jquery-modal-close',
       'closeText':'',
       'shade':'jquery-modal-shade'
     }, opt);

           body= $('body');
            createModal = function(data){
              var shade, close, modal;
               shade = $('<div />', {
                 class: settings.shade
               });
            };

       this.on('click', function() {
          var self= $(this);

          $.ajax({
              url:self.data('content'),
              type: 'get',
              cache: false
          }).done(function(data){
               createModal(data);
          }).error(function(){
                createModal('There was an error');
          });
       });

  };
});
