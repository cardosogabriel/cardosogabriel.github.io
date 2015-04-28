$(document).ready(function(){
	tabsBrowsing();
	insertUrl();
});

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
    $('.screen-content .tab-content').addClass('hide');
    $('.screen-content #'+tc).removeClass('hide');
  });
};

  
/*
nextArrowControl = function(){
	$('.nextPage').click(function(evt) {
		$("#menu li").removeClass('active');
		var href = $(this).attr('href');
		var idNxt = $(href).attr('role');
		$('#menu li#'+idNxt).addClass('active');
	});
};
*/

    
//Initialize Boostrap-select
$('.selectpicker').selectpicker();  

//Initialize Bootstrap tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})