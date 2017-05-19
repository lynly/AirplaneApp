var app = app || {};

app.BookView = Backbone.View.extend({
  el: "#app",

  events: {

  },

  initialize: function () {
    console.log("A new Book view was created");
  },

  render: function() {
    var flightID = this.model.get("id");

    var airplane = this.model.get("airplane");
    var columns = airplane.columns.split(" ");
    var rowCount = airplane.rows;
    var columnCount = columns.length;
    console.log( this.model, columnCount, rowCount );
    var flightDetails = $("#FlightDetailsViewTemplate").html();
    this.$el.html( this.model.get("flight_number") );


    // var table = $('<table></table>');
    var table = document.createElement("table");

    var alphabet = "ABCDEFGIHJKLMNOPQRSTUVWXYZ".split("");
    for (var i = 0; i < rowCount; i++) {
      var tr = table.insertRow();
        for (var j = 0; j < columnCount; j++) {
          if (i == columnCount && j == rowCount) {
              break;
          } else {
              var td = tr.insertCell();

             td.appendChild(
                  document.createTextNode((i + 1) + " " + alphabet[j])
              );
              td.setAttribute("id", (i + 1) + " " + (j + 1));
              td.style.border = '1px solid black';
          }


          var addEventListener = function ( td, rowNum, columnNum ) {
            $(td).one("click", function () {
              $(this).css("background", "hotpink");
              var row = rowNum + 1;
              var column = alphabet[columnNum];

              console.log( flightID, row, column );

              var res = new app.Reservation({
                flight_id: flightID,
                rows: row,
                columns: column
              });

              console.log("A new reservation was created");
              console.log(res);

              res.save();
              // Create a new instance of the Reservation model
                // Add flight_id , row and column
                  // Call save on it
            });
          };

          addEventListener( td, i, j );

      }

    var seatSelection = $("#SeatingViewTemplate").html();
    this.$el.append( table );




    // Iterate through all columns
      // Iterate through all rows
        // Create some HTML element

    }
  }
});
