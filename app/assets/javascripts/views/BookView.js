var app = app || {};

app.BookView = Backbone.View.extend({
  el: "#app",

  events: {

  },

  initialize: function () {
    console.log("A new Book view was created");
  },

  render: function() {
    var airplane = this.model.get("airplane");
    var columns = airplane.columns.split(" ");
    var rowCount = airplane.rows;
    var columnCount = columns.length;
    console.log( this.model, columnCount, rowCount );
    var flightDetails = $("#FlightDetailsViewTemplate").html();
    this.$el.html( this.model.get("flight_number") );

    var seatSelection = $("#SeatingViewTemplate").html();
    this.$el.append( seatSelection );

    // Iterate through all columns
      // Iterate through all rows
        // Create some HTML element

  }

});
