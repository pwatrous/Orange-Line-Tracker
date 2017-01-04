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
          
          var trips = [];
          for (var i = 0; i < 5; i++) {
            trips[i] = northbound[i]
          }
          
          var massAveStops = [];
          for (var i = 0; i < 5; i++) {
            massAveStops[i] = trips[i].stop[6];
          }
          
          var departures = [];
          for (var i = 0; i < 5; i++) {
            departures[i] = massAveStops[i].sch_dep_dt;
          }
          
          console.log(departures);
          
        }
    });
  });
});