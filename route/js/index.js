$(window).on('hashchange', function () {
	hash_change();
}).trigger('hashchange');


function hash_change() {
	var hash = location.hash,
		main = [
			'고등 1 정규',
			'고등 1 심화',
			'고등 2 정규'	
		],
		sub = {
			'0': [
				'고등 1 정규 - 1',
				'고등 1 정규 - 2',
				'고등 1 정규 - 3',
			],
			'1': [
				'고등 1 심화 - 1',
				'고등 1 심화 - 2',
				'고등 1 심화 - 3',
			],
			'2': [
				'고등 2 정규 - 1',
				'고등 2 정규 - 2',
				'고등 2 정규 - 3',
				'파이널 라운드'
			]
		}

	if(hash == '') {
		var source = $("#list-main-template").html(), 
			template = Handlebars.compile(source);
		$('.list-main').html(template(main));
		console.log('main');
	} else {
		hash = hash.replace("#", "");
		if(hash == 'sub') {
			params = getUrlParams();
			var category_id = params['lecture-category-id'];
			source = $("#list-sub-template").html(), 
			template = Handlebars.compile(source);
			$('.list-main').html(template(sub[category_id]));
		} else if(hash == 'checked') {
			params = getUrlParams();
			$('.list-main').html('<h1>출석체크를 합시다!</h1>');
		}
		console.log('sub');
	}
}

function getUrlParams() {
    var params = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) { params[key] = value; });
    return params;
}