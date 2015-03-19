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
  
  //Switch Alert views

  $('.alerts .nav-tabs .activity').click(function(){
    $(this).addClass('active');
    $('.alerts .nav-tabs .settings').removeClass('active');
    $('.alerts-activity').removeClass('hide');
    $('.alert-settings').addClass('hide');
    return false;
  });

  $('.alerts .nav-tabs .settings').click(function(){
    $(this).addClass('active');
    $('.alerts .nav-tabs .activity').removeClass('active');
    $('.alert-settings').removeClass('hide'); 
    $('.alerts-activity').addClass('hide');
    return false;  
  });
  
  //Initialize Boostrap-select
  
  $('.selectpicker').selectpicker();  

  //Initialize Bootstrap tooltip
  
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
   
});