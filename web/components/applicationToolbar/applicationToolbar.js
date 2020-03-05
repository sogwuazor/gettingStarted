define(['jquery', 'templates/handlebars-compiled', 'css!components/applicationToolbar/applicationToolbar'], function ($, HBS) {
	'use strict';

	var def_opts = {
		templatePath: 'components/applicationToolbar/applicationToolbar',
		templateOptions: {
			title: 'Application Navigation Toolbar',
			ariaLabel: 'This is the application navigation toolbar'
		}
	}, activatedItem;

	function ApplicationToolbar(options, element) {
		//constructor
		this.utils.setActiveItem(null);
		this.create(options, element);
	}

	ApplicationToolbar.prototype.utils = {
		getActiveItem: function() {
			return activatedItem;
		},
		setActiveItem: function(itemAction) {
			activatedItem = itemAction;
		}
	};

	ApplicationToolbar.prototype.create = function (options, element) {
		//creating a new application toolbar
		if (!element) {
			throw new Error('No reference provided.');
		}

		if (!(element instanceof $)) {
			this.element = $(element);
		} else {
			this.element = element;
		}

		this.options = $.extend(options, def_opts);
		this.element.addClass('simple-toolbar');

		this.renderLayout();
		this.bindListeners();
	};

	ApplicationToolbar.prototype.renderLayout = function () {
		const items = [{
			title: 'Show home page',
			label: 'Home',
			'ariaLabel': 'show home page',
			'class': 'toHome',
			'action': 'showHome'
		}, {
			title: 'Coding Information',
			label: 'Coding Library',
			'ariaLabel': 'coding information library',
			'class': 'toInfo',
			action: 'showCodingLibrary'
		}, {
			title: 'Applications',
			label: 'Applications',
			ariaLabel: 'Application information',
			'class': 'toInfo',
			action: 'showApps'
		}];

		this.element.html(HBS[this.options.templatePath]({items: items}));
	};

	ApplicationToolbar.prototype.bindListeners = function() {
		this.element.off('click', '.toolbar-menu');
		this.element.on('click', '.toolbar-menu', this._handleMenuItemAction.bind(this));
	};

	ApplicationToolbar.prototype._handleMenuItemAction = function(event) {
		/*where we will be running all the code*/
		this.setActiveItem($(event.target).data('action'));
	};

	return ApplicationToolbar;
});
