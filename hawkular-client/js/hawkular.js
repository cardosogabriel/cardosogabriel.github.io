$(document).ready(function(){
	initialLoading();
	insertUrl();
	tabsBrowsing();
	tableSelect();
});

//Initial loading
initialLoading = function(){
  setInterval(function () {
    $('.hk-spinner-container').addClass('hide');
    $('.hk-urls-empty').removeClass('hide');
  },4000);
};

//Insert url form
insertUrl = function(){
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
};

//Tabs browsing
tabsBrowsing = function(){
  $('.nav-tabs li a').click(function(evt){
    $(this).parent().parent().find('li').removeClass('active');
    $(this).parent().addClass('active');
    var tc = $(this).attr('class');
    $('.hk-screen-content .hk-tab-content').addClass('hide');
    $('.hk-screen-content #'+tc).removeClass('hide');
  });
};

//Table Select 
tableSelect = function(){
  $('.table-checkbox td').click(function(){
    $(this).parent().toggleClass('selected');  
  });
};

    
//Initialize Boostrap-select
$(function () {
  $('.selectpicker').selectpicker();
})  

//Initialize Bootstrap tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
})