$(document).ready(function(){
	var timer;

	$('.plus span').click(function () {
		toggle();
	});

	$(window).click(function(e) {
		var target = $(e.target);

		if(target.hasClass('quick--open')) {
			$('body').removeClass('quick--open');
			$('.quick').removeClass('active');
			$('.plus span').removeClass('active');
			$('.modal_container').removeClass('active');
			$('.quick').removeClass('quick--active');
		}
	});

	function toggle() {
		$('body').toggleClass('quick--open');
		$('.quick').toggleClass('active');
		$('.plus span').toggleClass('active');
	}

	$(window).scroll(function() {

		// if(!timer) {
		// 	timer = setTimeout(function() {
		// 		timer = null;

		// 		console.log('scroll')
		// 	}, 200);
		// }

		if($('.quick--open').length > 0) {
			return;
		}
		// 제일 마지막 
		if(timer) {
			clearTimeout(timer);
		}

		$('.quick').addClass('quick--active')

		timer = setTimeout(function() {
			console.log('scroll');
			$('.quick').removeClass('quick--active')
		}, 200);
	});

	$('.memo').click(function() {
		var index = $('.memo').index(this);
		$(this).parent().find('.status_btn').toggleClass('active');

		var $memo = $('.memo');

		for(var i = 0, len = $memo.length; i < len; i++) {
			if( i != index) {
				$memo.eq(i).parent().find('.status_btn').removeClass('active');
			}
		}
	});

	$('.date').click(function() {
		var $modal_container = $('.modal_container');
		$('body').toggleClass('quick--open');
		$modal_container.toggleClass('active');
		$('.quick').addClass('quick--active');
	})
});