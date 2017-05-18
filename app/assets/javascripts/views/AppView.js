var app = app || {};
var searchArray = [];

app.AppView = Backbone.View.extend({
  el: "#app",

  events: {
<<<<<<< HEAD
    'click button': "searchFlights"
  },

  searchFlights: function () {
    // How to get the origin and destination
    // Change the return statement in the filter

    var matchedFlights = this.collection.filter(function (flight) {
      return flight.get("origin").startsWith("S");
    });
    this.collection = new app.Flights(matchedFlights);
    this.render();
  },
=======
    'keypress :input': 'logKey'
  },

  logKey: function(e) {

    console.log(e.keyCode);

   var searchInput = String.fromCharCode(e.keyCode);
   searchArray.push( searchInput );
   console.log(searchArray);
   var searchWord = searchArray.join("");
   console.log(searchWord);



   var matchedFlights = this.collection.filter(function (flight) {
     return flight.get("origin").startsWith(searchWord);
   });

   this.collection = new app.Flights(matchedFlights);
   this.render();


  this.$("#origin").focus();
  this.$('#origin').val('');
  this.$("#origin").val(searchWord);

 },
>>>>>>> 1142f5c4c3698c212df8c6c25f46447b7a4f791e

  initialize: function () {
    console.log("A new view was created");
  },

  render: function() {
    var templateMarkup = $("#SearchViewTemplate").html();
    this.$el.html( templateMarkup );
    var flightListTemplate = $("#FlightListViewTemplate").html();
    this.$el.append( flightListTemplate );

    // Create a new instance of flightview for every flight in this.collection
    // Render them
    this.collection.each(function (flight) {
      var fv = new app.FlightView({
        model: flight
      }); // this.model in the FlightView
      fv.render();
    });

    // Pass the current flight in to flightview as a model
  }

});
