$(document).ready(function () {
  function fetchData(file) {
    $.getJSON("json_files/" + file + ".json", function (data) {
      // Remove the previous speaker information
      $("main").empty();

      
      // Create the speaker information as HTML elements
      var speaker = data.speakers[0];
      var title = $("<h1>").text(speaker.title);
      var image = $("<img>").attr("src", speaker.image);
      var month = $("<h2>").html(speaker.month + "<br>" + speaker.speaker);
      var description = $("<p>").text(speaker.text);

      // Append the speaker information to the page
      $("main").append(title, image, month, description);
    });
  }

  // When the user clicks on a sidebar link, fetch the data for the speaker
  $("#nav_list a").click(function (e) {
    e.preventDefault();
    var title = $(this).attr("title");
    fetchData(title);
  });
});
