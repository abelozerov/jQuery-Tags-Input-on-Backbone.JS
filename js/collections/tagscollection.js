/**
 * Created with JetBrains PhpStorm.
 * User: alexeybelozerov
 * Date: 8/8/13
 * Time: 12:13 PM
 * To change this template use File | Settings | File Templates.
 */

define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone){

    var TagsCollection = Backbone.Collection.extend({

        getCommaSeparatedString: function() {
            var tagNames = this.map(function(model) {
                return model.get("tagName");
            });
            return tagNames.join(", ");
        }
    });
    return TagsCollection;

});