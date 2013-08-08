/**
 * Created with JetBrains PhpStorm.
 * User: alexeybelozerov
 * Date: 8/8/13
 * Time: 12:26 PM
 * To change this template use File | Settings | File Templates.
 */

define([
    'jquery',
    'underscore',
    'backbone',
    'collections/tagscollection',
    'views/tagscollectionview'
], function($, _, Backbone, tagsCollection, tagsCollectionView){

    var AppView = Backbone.View.extend({
        el: "body",
        tagsCollection: null,
        events: {
            'click #tagsEnable': 'enableTags'
        },

        initialize : function() {
            console.log("AppView init");

            _.bindAll(this, "enableTags");

            this.tagsCollection = new tagsCollection();
            this.tagsCollection.on("reset remove add", $.proxy(function() {
                $("#collectionContents").html(JSON.stringify(this.tagsCollection.toJSON()));
            }), this);
            this.tagsCollection.add(
            [
                { tagName: "foo"},
                { tagName: "bar"},
                { tagName: "xyz"},
            ]);
        },

        enableTags: function() {
            new tagsCollectionView({ collection: this.tagsCollection, el: $("#tags-placeholder")});
        }
    });
    return AppView;

});