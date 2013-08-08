require.config({
  paths: {
        'backbone': 'lib/backbone',
        'underscore': 'lib/underscore',
        'jquery': 'lib/jquery'
  },
  shim: {
        'underscore': {
          exports: '_'
        },
        'backbone': {
          deps: ["underscore", "jquery"],
          exports: 'Backbone'
        },
        'lib/jquery.tagsinput': {
          deps: ["jquery"],
          exports: 'TagsInput'
        }
  }
});

require(
  ["jquery",
    "underscore",
    "backbone",
    "views/appview"
  ],
  function($, _, B, AppView) {
    $(function() {
        new AppView();
    });
  }
);

