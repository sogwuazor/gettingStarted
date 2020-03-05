define(['jquery', 'templates/handlebars-compiled'], function ($, HBS) {
	'use strict';

	var def_opts = {
		templatePath: 'components/applicationToolbar/applicationToolbar'
	};

	function ApplicationToolbar(options, element) {
		//constructor
		this.create(options, element);
	}

	ApplicationToolbar.prototype.create = function (options, element) {
		//creating a new application toolbar
		if (element) {
			this.element = $(element);
		} else {
			this.element = $('<div></div>');
		}

		this.options = $.extend(options, def_opts);
		this.element.addClass('simple-toolbar');

		this.renderLayout();
	};

	ApplicationToolbar.prototype.renderLayout = function () {
		const items = [{
			title: 'Home Page',
			label: 'Home',
			'ariaLabel': 'home page',
			'class': 'toHome'
		}, {
			title: 'Coding Information',
			label: 'Coding Library',
			'ariaLabel': 'coding information library',
			'class': 'toInfo'
		}, {
			title: 'Applications',
			label: 'Applications',
			ariaLabel: 'Application information',
			'class': 'toInfo'
		}];

		this.element.html(HBS[this.options.template]({items: items}));
	};

	ApplicationToolbar.prototype.bindListeners = function() {
		this.element.off('click', '.toolbar-menu');
		this.element.on('click', '.toolbar-menu', function (e) {

		});
	};

	return ApplicationToolbar;
});
