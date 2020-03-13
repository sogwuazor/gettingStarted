define('jquery', 'components/baseGadgetComponent/baseGadgetComponent', function($, BaseComponent) {
    class Yugioh extends BaseComponent {
        /*the constructor*/
        constructor(element) {
            super('Yugioh', {}, element);

            this.options = {
                templateOptions: {
                    path: 'games/yugioh/yugioh_base_template'
                }
            };

            this._create();
        }

        _create() {
            super._create();
            this._renderLayout();
            this._bindListeners();
        }

        _renderLayout() {
            super._renderLayout(this.options.templateOptions.path, {mainGameBody: true});
        }
    }


    return Yugioh;
});