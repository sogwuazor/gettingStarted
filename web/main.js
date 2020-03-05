/** Bootstrap*/
requirejs.config({
    baseUrl: '',
    nodeRequire: require,
    paths: {
        'jquery': 'scripts/jquery/dist/jquery.min',
        'handlebars': 'scripts/handlebars/dist/handlebars.min'
    },
    map: {
        '*': {
            'css': 'scripts/require-css/css'
        }
    },
    shim: {
        'handlebars': {
            exports: 'Handlebars'
        }
    }
});

requirejs(['app'], function (App) {
    'use strict';

    /*launch the app*/
    const app = new App();
    debugger;
});
