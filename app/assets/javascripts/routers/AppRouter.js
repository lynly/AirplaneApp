var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    "":  'initializeSearch'
  },

  initializeSearch: function () {
    console.log("Search kicked off");
  }
});
