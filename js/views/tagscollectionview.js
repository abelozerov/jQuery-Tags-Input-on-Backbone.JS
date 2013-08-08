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
    'backbone',
    "lib/jquery.tagsinput",
], function($, _, Backbone, TagsInput){

    var TagsCollectionView = Backbone.View.extend({
        $tagsInputEl: null,

        initialize : function()
        {
            console.log("TagsCollectionView init");

            _.bindAll(this, "onTagsInputAdd", "onTagsInputRemove");
            this.render();
            this.collection.on("reset", this.render, this);
        },

        render: function() {
            this.$el.html("");
            this.$tagsInputEl = $("<input />").attr({
                value: this.collection.getCommaSeparatedString()
            });
            this.$tagsInputEl.appendTo(this.$el);

            $(this.$tagsInputEl).tagsInput({
                onAddTag : this.onTagsInputAdd,
                onRemoveTag : this.onTagsInputRemove
            });
        },

        onTagsInputAdd: function(val) {
            this.collection.add({ tagName: val })
        },

        onTagsInputRemove: function(val) {
            var found = this.collection.find(function(item){
                return item.get('tagName') === val;
            });
            this.collection.remove(found);
        }

    });
    return TagsCollectionView;

});