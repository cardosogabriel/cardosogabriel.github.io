jQuery(function($){

  $('.btn-primary').click(function(){
    $(this).addClass('disabled');
    $('.loading').removeClass('hide');
    
    setInterval(function () {
      $('.form-group').addClass('has-error');
      $('.btn-primary').removeClass('disabled');
      $('.help-block').removeClass('hide');
      $('.loading').addClass('hide');
    },4000);
  });
  
  $('.btn-link').click(function(){
    $('.loading').addClass('hide');
    $('.btn-primary').removeClass('disabled');
  });
    
});