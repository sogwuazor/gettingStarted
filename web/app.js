define([
    'jquery',
    'templates/handlebars-compiled',
    'components/applicationToolbar/applicationToolbar',
    'framework/layoutManager',
    'games/yugioh/yugioh',
    'pages/home/home',
    'css!pages/app/app'
], function ($, HBS, ApplicationToolbar, layoutManager, Yugioh, Home) {

    const appId = '#app';

    function App() {
        this.element = $(appId);
        this.options = {
            template: 'pages/app/app'
        };

        this.renderLayout();
        this.bindListeners();

        return this;
    }

    App.prototype.renderLayout = function () {
        let _this = this;

        this.element.html(HBS[this.options.template]({}));

        //render the toolbar
        this._appToolbar = new ApplicationToolbar({
            onToolbarItemActivated: _this.onToolbarItemClick.bind(this)
        }, this.element.find('.app-toolbar'));

        /*initialize layout*/
        //this._layout = layoutManager.init();
    };

    App.prototype.onToolbarItemClick = function(item) {
        this.loadComponents(item ? item.action : '');
    };

    App.prototype.bindListeners = function () {
        /*do nothing for now*/
    };

    App.prototype.loadComponents = function(componentName) {
        let _this = this;

        function loadComponent(component) {
            if (_this.loadedComponent) {
                _this.loadedComponent._destory();
                _this.loadedComponent = null;
            }

            _this.loadedComponent = new component(_this.element.find('.render_position'));
        }

        switch (componentName) {
            case 'yugioh':
                loadComponent(Yugioh);
                break;
            case 'toHome':
            default:
                loadComponent(Home);
                break;
        }
    };

    return App;
});

