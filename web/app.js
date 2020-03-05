define(['jquery', 'templates/handlebars-compiled', 'components/applicationToolbar/applicationToolbar', 'css!pages/app/app'], function ($, HBS, ApplicationToolbar) {

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
        this.element.html(HBS[this.options.template]({}));

        //render the toolbar
        this._appToolbar = new ApplicationToolbar({}, this.element.find('.app-toolbar'));
    };

    App.prototype.bindListeners = function () {
        /*do nothing for now*/
    };

    return App;
});

