define(['jquery', 'components/baseGadgetComponent/baseGadgetComponent'], function($, BaseComponent) {
    'use strict';

    class Home extends BaseComponent {
        constructor(element) {
            super('home Page', {templateOptions: {path: 'pages/home/home'}}, element);
            this._renderLayout();
        }
    }

    return Home;
});