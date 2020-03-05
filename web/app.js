define(['jquery', 'templates/handlebars-compiled.js', 'components/applicationToolbar/applicationToolbar'], function ($, HBS, ApplicationToolbar) {

	const appId = '#app';
	const jqeuryMode = typeof $ === 'function';

	function App() {
		//this.element = $(appId);
		this.element = document.querySelector(appId);
		this.options = {
			template: 'pages/app/app'
		};

		this.renderLayout();
		this.bindListeners();

		return this;
	}

	App.prototype.renderLayout = function () {
		this.element.innerHTML = HBS[this.options.template]({});

		//render the toolbar
		this._appToolbar = new ApplicationToolbar({}, this.element.find('.app-toolbar'));
	};

	App.prototype.bindListeners = function () {
		/*do nothing for now*/
	};

	return App;
});

