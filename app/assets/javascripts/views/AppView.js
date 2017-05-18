var app = app || {};

app.AppView = Backbone.View.extend({
  el: "#app",

  initialize: function () {
    console.log("A new view was created");
  },

  render: function() {
    var templateMarkup = $("#AppViewTemplate").html();
    this.$el.html( templateMarkup );

    var FlightListView = new app.FlightListView();
    FlightListView.render();
  }

});
