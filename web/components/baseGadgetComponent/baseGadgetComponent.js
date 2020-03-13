/**when inheriting the gadget super class from a subclass do it like this
 * subclassConstructor.prototype = Object.create(Super.prototype);
 *
 * subclassConstructor.prototype._create = function create() {
     *      return new this.constructor();
     * }
 *
 * use the following example
 * function ParentWithStatic() {}

 ParentWithStatic.startPosition = { x: 0, y:0 }
 ParentWithStatic.getStartPosition = function getStartPosition() {
  return this.startPosition
}

 function Child(x, y) {
  this.position = {
    x: x,
    y: y
  }
}

 Child.prototype = Object.create(ParentWithStatic.prototype)
 Child.prototype.constructor = Child

 Child.prototype.getOffsetByInitialPosition = function getOffsetByInitialPosition() {
  let position = this.position
  let startPosition = this.constructor.getStartPosition() // error undefined is not a function, since the constructor is Child

  return {
    offsetX: startPosition.x - position.x,
    offsetY: startPosition.y - position.y
  }
};
 * */

define(['jquery', 'templates/handlebars-compiled'], function ($, HBS) {
    const baseDefaultOptions = {
        onInitialized: null,
        onGadgetMessageReceived: null,
        templateOptions: {}
    };

    function assignValues(opts, elem) {
        if (opts && typeof opts === 'object') {
            this.options = Object.assign(baseDefaultOptions, opts);
        }

        if (elem) {
            this.element = $(elem);
        }

        if (typeof this.element === 'undefined' || this.element === null) {
            this.element = $('<div></div>');
        }
    }

    function checkFunction(functionKey) {
        return this.options.hasOwnProperty(functionKey) && typeof this.options[functionKey] === 'function';
    }

    /*need to return the class for this, might need to put back the options and class*/
    class GadgetComponent {
        constructor(name, options, element) {
            this.options = {};
            assignValues.call(this, options, element);

            if (!name) {
                throw new Error('MissingObjectParameter: No name provided for gadget');
            }
            this.gadgetName = name;
        }

        _create () {
            if (checkFunction.call(this, 'onInitialized')) {
                this.options.onInitialized();
            }
        }

        _renderLayout (templatePath, templateOptions) {
            templatePath = getValue(templatePath, 'string', this.options.templateOptions.path);
            templateOptions = getValue(templateOptions, 'object', this.options.templateOptions.data);

            function getValue(item, strType, optionParam) {
                return (typeof item === strType && item) || optionParam || null;
            }

            if (templatePath === null) {
                throw new Error('MissingFunctionParameter: Invalid template path provided.');
            }

            this.element.html(HBS[templatePath](templateOptions));
            this.element.addClass('gadget');
        }

        _bindListeners() {
            $(window).on('ua-message-system', this._receiveMessage.bind(this));
        }

        _receiveMessage (evt) {
            let action, option;
            if (!evt.message) {
                console.warn('Invalid message format provided', evt);
            }
            action = evt.message.action;
            option = evt.message.option;

            this.options.onGadgetMessageReceived(action, option);
        }

        _destroy() {
            if (checkFunction.call(this, 'onBeforeDestroy')) {
                this.options.onBeforeDestroy();
            }
            $(document.body).remove(this.element);
        }
    }

    return GadgetComponent;
});