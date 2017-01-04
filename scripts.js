// API CALL
// http://realtime.mbta.com/developer/api/v2/schedulebyroute?api_key=wX9NwuHnZU2ToO7GmGR9uw&route=orange&format=json

$(document).ready(function() {
  $(".submit").on("click", function() {
    
    
    var key = "HgWOcwpMgk6atNoBQ8d3Bg";
    var url = "https://realtime.mbta.com/developer/api/v2/schedulebyroute?api_key=" + key + "&route=orange&format=json";

    $.ajax({
      type: "GET",
      url: url,
      async: false,
      dataType: "json",
      success: function(data) {
          var northbound = data.direction[1].trip;
          
          var trip0 = northbound[0];
          var trip1 = northbound[1];
          var trip2 = northbound[2];
          var trip3 = northbound[3];
          var trip4 = northbound[4];
          
          var massAve0 = trip0.stop[6];
          var massAve1 = trip1.stop[6];
          var massAve2 = trip2.stop[6];
          var massAve3 = trip3.stop[6];
          var massAve4 = trip4.stop[6];
          
          console.log(massAve0);
          
        }
    });
  });
});