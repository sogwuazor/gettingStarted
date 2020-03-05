define(['jquery', 'handlebars-compiled'], function($, Handlebars) {

	Handlebars.registerHelper('ifCond', function (opt1, operator, opt2, options) {
		switch (operator) {
			case '===':
				return opt1 === opt2 ? options.fn(this) : options.inverse(this);
			case '>=':
				return opt1 >= opt2 ? options.fn(this) : options.inverse(this);
			case '<=':
				return opt1 <= opt2 ? options.fn(this) : options.inverse(this);
			case '>':
				return opt1 > opt2 ? options.fn(this) : options.inverse(this);
			case '<':
				return opt1 < opt2 ? options.fn(this) : options.inverse(this);
			case '!==':
				return opt1 !== opt2 ? options.fn(this) : options.inverse(this);
			default:
				return options.fn(this);
		}
	});

	return Handlebars;
});


