$(document).ready(function(){initialLoading(),insertUrl(),tabsBrowsing(),tableSelect(),datasourceCollapse(),modalWizard(),modalDeployment(),modalDrivers(),modalTimeout()}),initialLoading=function(){setInterval(function(){$(".hk-urls-list.hk-spinner-container").addClass("hide"),$(".hk-urls-empty").removeClass("hide")},3e3)},insertUrl=function(){$(".hk-urls-list .btn-primary").click(function(){$(this).addClass("disabled"),$(".loading").removeClass("hide"),setInterval(function(){$(".form-group").addClass("has-error"),$(".btn-primary").removeClass("disabled"),$(".help-block").removeClass("hide"),$(".loading").addClass("hide")},3e3)}),$(".btn-link").click(function(){$(".loading").addClass("hide"),$(".btn-primary").removeClass("disabled")})},tabsBrowsing=function(){$(".hk-nav-tabs-container .nav-tabs li a").click(function(e){$(this).parent().parent().find("li").removeClass("active"),$(this).parent().addClass("active");var t=$(this).attr("class");$(".hk-screen-content .hk-tab-content").addClass("hide"),$(".hk-screen-content #"+t).removeClass("hide")}),$(".modal-body .nav-tabs li a").click(function(e){$(this).parent().parent().find("li").removeClass("active"),$(this).parent().addClass("active");var t=$(this).attr("class");$(".modal-body .hk-tab-content").addClass("hide"),$(".modal-body #"+t).removeClass("hide")})},tableSelect=function(){$('.hk-table-select input[type="checkbox"]').click(function(){$(this).parent().parent().toggleClass("hk-selected")}),$('.hk-table-select input[type="radio"]').click(function(){$(this).parent().parent().parent().find("tr").removeClass("hk-selected"),$(this).parent().parent().toggleClass("hk-selected")})},datasourceCollapse=function(){$(".hk-panel-collapse-area a").click(function(){return $(this).parent().toggleClass("hk-collapsed"),$(this).children("span").text(function(e,t){return"Hide Metrics"===t?"View Metrics":"Hide Metrics"}),$(this).children(".fa").toggleClass("fa-angle-down").toggleClass("fa-angle-up"),$(this).parent().parent().find(".hk-collapsible-area").toggleClass("hide"),!1})},modalWizard=function(){$(".modal-footer.hk-first .btn-default").click(function(){$(this).parent().parent().find(".hk-zero").removeClass("hide"),$(this).parent().parent().find(".hk-first").addClass("hide")}),$(".modal-footer.hk-first .btn-primary").click(function(){$(this).parent().parent().find(".hk-first").addClass("hide"),$(this).parent().parent().find(".hk-second").removeClass("hide")}),$(".modal-footer.hk-second .btn-default").click(function(){$(this).parent().parent().find(".hk-first").removeClass("hide"),$(this).parent().parent().find(".hk-second").addClass("hide")}),$(".modal-footer.hk-second .btn-primary").click(function(){$(this).parent().parent().find(".hk-second").addClass("hide"),$(this).parent().parent().find(".hk-third").removeClass("hide")}),$(".modal-footer.hk-third .btn-default").click(function(){$(this).parent().parent().find(".hk-second").removeClass("hide"),$(this).parent().parent().find(".hk-third").addClass("hide")}),$(".modal-footer.hk-third .btn-primary").click(function(){$(this).parent().parent().find(".hk-third").addClass("hide"),$(this).parent().parent().find(".hk-fourth").removeClass("hide")}),$(".modal-footer.hk-fourth .btn-default").click(function(){$(this).parent().parent().find(".hk-third").removeClass("hide"),$(this).parent().parent().find(".hk-fourth").addClass("hide")}),$(".modal-footer.hk-fourth .btn-primary").click(function(){$(this).parent().parent().find(".hk-fourth").addClass("hide"),$(this).parent().parent().find(".hk-fifth").removeClass("hide")}),$(".modal-footer.hk-fifth .btn-default").click(function(){$(this).parent().parent().find(".hk-fourth").removeClass("hide"),$(this).parent().parent().find(".hk-fifth").addClass("hide")})},modalDeployment=function(){$(".hk-form-verify .hk-rename-button .btn").click(function(){$(this).parent().parent().parent().removeClass("hk-form-read-only").addClass("hk-form-edit")}),$(".hk-form-verify .hk-discard-confirm-buttons .btn").click(function(){$(this).parent().parent().parent().addClass("hk-form-read-only").removeClass("hk-form-edit")}),$(".modal#add-deployment .modal-footer.hk-second .btn-primary").click(function(){setInterval(function(){$("#add-deployment .hk-third").addClass("hide"),$("#add-deployment .hk-fourth").removeClass("hide")},4e3)})},modalDrivers=function(){$("#btn-add-driver").click(function(){$(this).parent().parent().parent().find(".hk-zero").addClass("hide"),$(this).parent().parent().parent().find(".hk-first").removeClass("hide")})},modalTimeout=function(){$(".modal#time-out").modal()},$(function(){$(".selectpicker").selectpicker()}),$(function(){$('[data-toggle="tooltip"]').tooltip()});