$(document).ready(function() {

  $(".owl-1").owlCarousel({
    items: 3,
    center: true,
    loop: true,
    nav: true,
    dots: false,
    smartSpeed: 1000,
    navText: ["", ""]
  });

	$('.owl-2').each(function() {
		var owl2 = $(this);
		owl2.owlCarousel({
		  items: 1,
		  margin: 20,
		  nav: true,
		  autoHeight: true,
		  smartSpeed: 1000,
		  navText: ["", ""],
		  onInitialized: function(e) {
		    var index = e.item.index + 1,
		        count = e.item.count;
		    owl2.find(".owl-prev").after("<span class='info'><span class='index'>" + index + "</span> / <span class='count'>" + count + "</span></span>");
		  },
		});
		owl2.on('changed.owl.carousel', function(e) {
		  owl2.find(".info").find(".index").text(e.item.index + 1);
		});
	});

	var owl3 = $(".owl-3");
	owl3.owlCarousel({
    items: 1,
    dots: false,
    smartSpeed: 1000,
    autoHeight: true,
    margin: 30,
    mouseDrag: false,
    touchDrag: false
  });

	owl3.on("click", "input[type='radio'], .btn.btn-success", function() {
		owl3.trigger('next.owl.carousel');
	// }).on("click", ".back", function() {
		owl3.trigger('prev.owl.carousel');
	}).on("change", ".form-control", function() {
		var slideBtn = $(this).closest(".slide").find(".btn.btn-success");
		if( $(this).val() ) {
			slideBtn.removeAttr("disabled");
		} else {
			slideBtn.attr("disabled", "disabled");
		};
	}).on("change", "input[type='checkbox']", function() {
		var slide = $(this).closest(".slide");
		var slideBtn = slide.find(".btn.btn-success");
		slide.find("input[type='checkbox']").each(function() {
			if( $(this).is(":checked") ) {
				slideBtn.removeAttr("disabled");
				return false;
			} else {
				slideBtn.attr("disabled", "disabled");
			};
		});
	});

	$(".play-button").on("click", function(){
		$(this).parent().fadeOut();
	});

	$("#step-2").on("click", function(){
		$(".progress-wrapper").addClass("step-2-active");
	});

	$("#step-2").on("click", function(){
		$(".progress-wrapper-2").addClass("step-2-active");
	});
	$("#step-3").on("click", function(){
		$(".progress-wrapper-2").addClass("step-3-active");
	});
	$("#step-4").on("click", function(){
		$(".progress-wrapper-2").addClass("step-4-active");
	});

	$(".img-password").on("click", function(){
		$(this).siblings("input").attr("type", "text");
	});

	$('#myTab .nav-link').on('shown.bs.tab', function (e) {
		var href = $(e.target).attr("data-href");
		$('[data-href="' + href + '"]').trigger("click");
	});

});