var app = app || {};

app.Flight = Backbone.Model.extend({
  urlRoot: '/flights',

  defaults: {
    flight_number: "N/A"
  },

  initialize: function () {
    console.log("A new flight was created");
  }
  
});
