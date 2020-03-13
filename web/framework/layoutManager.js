define(['jquery'], function ($) {
    'use strict';

    var layoutStates = {
        north: {
            children: null,
            active: false,
            size: 200,
            resizeable: false,
            element: null
        },
        east: {
            children: null,
            active: false,
            size: 200,
            resizeable: false,
            element: null
        },
        center: {
            children: null,
            active: false,
            size: 200,
            resizeable: false,
            element: null
        },
        west: {
            children: null,
            active: false,
            size: 200,
            resizeable: false,
            element: null
        },
        south: {
            children: null,
            active: false,
            size: 200,
            resizeable: false,
            element: null
        }
    }, initialized = false;

    const LayoutManager = {};

    function isStateActive(state) {
        return state.active;
    }

    function addCenterStyles(centerElement) {
        $(centerElement).css({});
    }

    LayoutManager.init = function(element) {
        if (!element) {
            throw new Error('The base layout pane was not provided');
        }

        if (initialized) {
            return this;
        }

        /*add class to element*/
        $(element).addClass('flex-ua-layout-container');
        for (let state in layoutStates) {
            if (layoutStates.hasOwnProperty(state)) {
                $(layoutStates[state].element).addClass(state + '_layout_panel');
            }
        }

        initialized = true;

        return this;
    };

    LayoutManager.setLayoutResizeable = function($layout) {
        if (!$layout) {
            throw new Error('No layout panel provided');
        }

        if (!($layout instanceof $)) {
            $layout = $($layout);
        }
        $layout.addClass('layout-resizable');
    };

    LayoutManager.setCenterActive = function(blnInitializeChildren) {

    };

    return LayoutManager;
});