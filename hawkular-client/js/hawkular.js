$(document).ready(function(){
	initialLoading();
	insertUrl();
	tabsBrowsing();
	tableSelect();
	datasourceCollapse();
});

//Initial loading
initialLoading = function(){
  setInterval(function () {
    $('.hk-urls-list.hk-spinner-container').addClass('hide');
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

//Datasource collapse
datasourceCollapse = function(){
  $('.hk-panel-collapse-area a').click(function(){
    $(this).parent().toggleClass('hk-collapsed');
    $(this).children('span').text(function(i, text){
      return text === "Hide Metrics" ? "View Metrics" : "Hide Metrics";
    });
    $(this).children('.fa').toggleClass('fa-angle-down').toggleClass('fa-angle-up');
    $(this).parent().parent().find('.hk-collapsible-area').toggleClass('hide');
    return false;
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