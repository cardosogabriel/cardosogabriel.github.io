jQuery(function($){

  //Insert url form
  
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
  
  //Active jump-link
  
  $('.gray-bar .nav-tabs li').click(function(){
    $(this).parent().find('li').removeClass('active');
    $(this).addClass('active');
  });
    
  //Initialize Boostrap-select
  
  $('.selectpicker').selectpicker();  

  //Initialize Bootstrap tooltip
  
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
   
});