$(document).ready(function(){
	initialLoading();
	insertUrl();
	tabsBrowsing();
	tableSelect();
	datasourceCollapse();
	wizardNav();
	modalDeployment();
	modalDrivers();
	modalTimeout();
});

//Initial loading
initialLoading = function(){
  setInterval(function () {
    $('.hk-urls-list.hk-spinner-container').addClass('hide');
    $('.hk-urls-empty').removeClass('hide');
  },3000);
};

//Insert url form
insertUrl = function(){
  $('.hk-urls-list .btn-primary').click(function(){
    $(this).addClass('disabled');
    $('.loading').removeClass('hide');

    setInterval(function () {
      $('.form-group').addClass('has-error');
      $('.btn-primary').removeClass('disabled');
      $('.help-block').removeClass('hide');
      $('.loading').addClass('hide');
    },3000);
  });

  $('.btn-link').click(function(){
    $('.loading').addClass('hide');
    $('.btn-primary').removeClass('disabled');
  });
};

//Tabs browsing
tabsBrowsing = function(){
  $('.hk-nav-tabs-container .nav-tabs li a').click(function(evt){
    $(this).parent().parent().find('li').removeClass('active');
    $(this).parent().addClass('active');
    var tc = $(this).attr('class');
    $('.hk-screen-content .hk-tab-content').addClass('hide');
    $('.hk-screen-content #'+tc).removeClass('hide');
  });

  $('.modal-body .nav-tabs li a').click(function(evt){
    $(this).parent().parent().find('li').removeClass('active');
    $(this).parent().addClass('active');
    var tm = $(this).attr('class');
    $('.modal-body .hk-tab-content').addClass('hide');
    $('.modal-body #'+tm).removeClass('hide');
  });
};

//Table Select
tableSelect = function(){
  $('.hk-table-select input[type="checkbox"]').click(function(){
    $(this).parent().parent().toggleClass('hk-selected');
  });
  $('.hk-table-select input[type="radio"]').click(function(){
    $(this).parent().parent().parent().find('tr').removeClass('hk-selected');
    $(this).parent().parent().toggleClass('hk-selected');
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

// Wizard Navigation
	wizardNav = function(){
	$('.hk-wz-nav').click(function(evt) {
    $(this).parent().parent().find('.modal-body').addClass('hide');
    $(this).parent().parent().find('.modal-footer').addClass('hide');
		var navDestination = $(this).attr('value');
    $(this).parent().parent().find('.'+navDestination).removeClass('hide');
	});
};

//Modal deployment
modalDeployment = function(){
  $('.hk-form-verify .hk-read-only .btn').click(function(){
    $(this).parent().parent().parent().removeClass('hk-form-read-only').addClass('hk-form-editable');
  });
  $('.hk-form-verify .hk-editable .btn').click(function(){
    $(this).parent().parent().parent().addClass('hk-form-read-only').removeClass('hk-form-editable');
  });
  $('.modal#add-deployment .modal-footer.hk-2 .btn-primary').click(function(){
    setInterval(function () {
      $('#add-deployment .hk-3').addClass('hide');
      $('#add-deployment .hk-4').removeClass('hide');
    },4000);
  });
};

//Modal drivers
modalDrivers = function(){
  $('#btn-add-driver').click(function(){
    $(this).parent().parent().parent().find('.hk-zero').addClass('hide');
    $(this).parent().parent().parent().find('.hk-first').removeClass('hide');
  });
};

//Modal time-out
modalTimeout = function(){
  $('.modal#time-out').modal();
};

//Initialize Boostrap-select
$(function () {
  $('.selectpicker').selectpicker();
})

//Initialize Bootstrap tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
})