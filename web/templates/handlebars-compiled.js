define(['handlebars'], function(Handlebars) {

this["HBS"] = this["HBS"] || {};

this["HBS"]["components/applicationToolbar/applicationToolbar"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"toolbar-menu "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"class") : depth0), depth0))
    + "\" aria-label=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"ariaLabel") : depth0), depth0))
    + "\" tabindex=\"0\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"label") : depth0), depth0))
    + "</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"ua-header-toolbar\" aria-label=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"ariaLabel") || (depth0 != null ? lookupProperty(depth0,"ariaLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ariaLabel","hash":{},"data":data,"loc":{"start":{"line":1,"column":43},"end":{"line":1,"column":56}}}) : helper)))
    + "\" title=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":1,"column":65},"end":{"line":1,"column":74}}}) : helper)))
    + "\" tabindex=\"0\">\r\n    <div class=\"ua-header-brand\">\r\n        <!--Let this be anything we can come up with.-->\r\n    </div>\r\n    <div class=\"toolbar-group-items\" role=\"menubar\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":8},"end":{"line":9,"column":17}}})) != null ? stack1 : "")
    + "    </div>\r\n</div>\r\n";
},"useData":true});

this["HBS"]["pages/app/app"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"app-container\">\r\n    <h2>This is a simple application container.</h2>\r\n    <h2>This is an addition</h2>\r\n    <h1>Changed</h1>\r\n</div>\r\n";
},"useData":true});

return this["HBS"];

});