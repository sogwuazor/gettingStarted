define(['jquery', 'templates/handlebars-compiled', 'css!components/applicationToolbar/applicationToolbar'], function ($, HBS) {
    'use strict';

    let def_opts = {
        templatePath: 'components/applicationToolbar/applicationToolbar',
        templateOptions: {
            title: 'Application Navigation Toolbar',
            ariaLabel: 'This is the application navigation toolbar'
        },
        onToolbarItemActivated: null
    }, items = [{
        title: 'Show home page',
        label: 'Home',
        'ariaLabel': 'show home page',
        'id': 'toHome',
        'class': 'toHome',
        'action': 'showHome'
    }, {
        title: 'Coding Information',
        label: 'Coding Library',
        'ariaLabel': 'coding information library',
        'id': 'toInfo',
        'class': 'toInfo',
        action: 'showCodingLibrary'
    }, {
        title: 'Applications',
        label: 'Applications',
        ariaLabel: 'Application information',
        'id': 'toApps',
        'class': 'toApps',
        action: 'showApps'
    }];

    function ApplicationToolbar(options, element) {
        //constructor
        this.create(options, element);
        this.setActiveItem(null);
    }

    ApplicationToolbar.prototype.getActiveItem = function () {
        return this.activatedItem;
    };

    ApplicationToolbar.prototype.setActiveItem = function (itemAction) {
        if (itemAction === null) {
            this.activatedItem = null;
        }
        this.items.forEach((item) => {
            if (item.action === itemAction) {
                item.active = true;
                this.activatedItem = item;
            } else {
                item.active = false;
            }
        });

        if (typeof this.options.onToolbarItemActivated === 'function') {
            this.options.onToolbarItemActivated(this.getActiveItem());
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

        this.options = Object.assign(def_opts, options);
        this.element.addClass('simple-toolbar');

        this.renderLayout();
        this.bindListeners();
    };

    ApplicationToolbar.prototype.renderLayout = function () {
        let _this = this;


        if (!this.options.activeItem) {
            this.options.activeItem = items[0].id;
        }

        items.forEach((item) => {
            if (item.id === _this.options.activeItem) {
                item.active = true;
                this.activatedItem = item;
            } else {
                item.active = false;
            }
        });
        this.items = items;

        this.element.html(HBS[this.options.templatePath]({items: items}));
    };

    ApplicationToolbar.prototype.bindListeners = function () {
        this.element.off('click', '.toolbar-menu');
        this.element.on('click', '.toolbar-menu', this._handleMenuItemAction.bind(this));
    };

    ApplicationToolbar.prototype._handleMenuItemAction = function (event) {
        /*where we will be running all the code*/
        this.setActiveItem($(event.target).data('action'));
    };

    return ApplicationToolbar;
})
;
