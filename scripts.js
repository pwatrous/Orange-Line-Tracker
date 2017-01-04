// API CALL
// http://realtime.mbta.com/developer/api/v2/schedulebyroute?api_key=wX9NwuHnZU2ToO7GmGR9uw&route=orange&format=json

$(document).ready(function() {
  $(".submit").on("click", function() {
    
    
    var key = "HgWOcwpMgk6atNoBQ8d3Bg";
    var line = "orange"
    var url = "https://realtime.mbta.com/developer/api/v2/schedulebyroute?api_key=" + key + "&route=" + line + "&format=json";

    $.ajax({
      type: "GET",
      url: url,
      async: false,
      dataType: "json",
      success: function(data) {
          var northbound = data.direction[1].trip;
          
          var trips = [];
          var massAveStops = [];
          var departures = [];
          var time = [];
          var hours = []
          var minutes = [];
          var seconds = [];
          var formattedTime = [];
          
          for (var i = 0; i < 5; i++) {
            trips[i] = northbound[i]
            massAveStops[i] = trips[i].stop[6];
            departures[i] = massAveStops[i].sch_dep_dt;
            
            time[i] = new Date(departures[i] * 1000)
            hours[i] = time[i].getHours();
            minutes[i] = time[i].getMinutes();
            seconds[i] = time[i].getSeconds();
            formattedTime[i] = hours[i] + ':' + minutes[i] + ':' + seconds[i];
          }
          
          console.log(time);
        }
    });
  });
});