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
          console.log(data);
        }
    });
  });
});