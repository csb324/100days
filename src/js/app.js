var $ = require("jquery");
var startingPage = 'menu';
var css;
var html;


function renderPage(target) {
	if (css) {
		css.unuse();
	}

	html = require(`../html/${target}.html`);
	css = require(`../css/${target}.scss`);
	css.use();
	$('body').html(html);
}


$(document).on('click', 'a', function() {
	event.preventDefault();
	var target = $(this).data('target');
	renderPage(target);
});


renderPage(startingPage);

