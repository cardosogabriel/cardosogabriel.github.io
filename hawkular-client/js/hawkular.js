$(document).ready(function(){
	initialLoading();
	insertUrl();
	tabsBrowsing();
	tableSelect();
	datasourceCollapse();
	modalWizard();
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

//Modal Wizard
modalWizard = function(){
  $('.modal-footer.hk-first .btn-default').click(function(){
    $(this).parent().parent().find('.hk-zero').removeClass('hide');
    $(this).parent().parent().find('.hk-first').addClass('hide');
  });
  $('.modal-footer.hk-first .btn-primary').click(function(){
    $(this).parent().parent().find('.hk-first').addClass('hide');
    $(this).parent().parent().find('.hk-second').removeClass('hide');
  });
  $('.modal-footer.hk-second .btn-default').click(function(){
    $(this).parent().parent().find('.hk-first').removeClass('hide');
    $(this).parent().parent().find('.hk-second').addClass('hide');
  });
  $('.modal-footer.hk-second .btn-primary').click(function(){
    $(this).parent().parent().find('.hk-second').addClass('hide');
    $(this).parent().parent().find('.hk-third').removeClass('hide');
  });
  $('.modal-footer.hk-third .btn-default').click(function(){
    $(this).parent().parent().find('.hk-second').removeClass('hide');
    $(this).parent().parent().find('.hk-third').addClass('hide');
  });
}

//Modal deployment
modalDeployment = function(){
  $('.hk-form-verify .hk-rename-button .btn').click(function(){
    $(this).parent().parent().parent().removeClass('hk-form-read-only').addClass('hk-form-edit');
  });
  $('.hk-form-verify .hk-discard-confirm-buttons .btn').click(function(){
    $(this).parent().parent().parent().addClass('hk-form-read-only').removeClass('hk-form-edit');
  });
  $('.modal#add-deployment .modal-footer.hk-second .btn-primary').click(function(){
    setInterval(function () {
      $('#add-deployment .hk-third').addClass('hide');
      $('#add-deployment .hk-fourth').removeClass('hide');
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