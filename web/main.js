/** Bootstrap*/
requirejs.config({
	baseUrl: '',
	nodeRequire: require,
	paths: {
		app: 'app',
		'jquery': 'scripts/jquery/dist/jquery.min',
		'handlebars': 'scripts/handlebars/dist/handlebars.min'
	},
	shim: {
		'handlebars': {
			exports: 'Handlebars'
		}
	}
});

requirejs(['app'], function(App) {
	'use strict';

	/*launch the app*/
	const app = new App();

});
