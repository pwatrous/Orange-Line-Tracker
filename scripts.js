// API CALL
// http://realtime.mbta.com/developer/api/v2/schedulebyroute?api_key=wX9NwuHnZU2ToO7GmGR9uw&route=orange&format=json

$(document).ready(function() {
  $(".submit").on("click", function() {
    
    var url = "http://realtime.mbta.com/developer/api/v2/schedulebyroute?api_key=wX9NwuHnZU2ToO7GmGR9uw&route=orange&format=json";

    $.ajax({
      type: "GET",
      url: url,
      async: false,
      dataType: "json",
      success: function(data) {
        
        }

    });
  });
});