$(document).ready(function () {
  $("#suggest-button").click(function () {
    var catAge = $("#cat-age").val();

    if (catAge === "") {
      $("#suggestion").text("Please enter your cat's age.");
    } else {
      $.ajax({
        url: "assets/data/foods.json",
        dataType: "json",
        success: function (data) {
          var suggestedFood = "";

          if (catAge < 1) {
            suggestedFood = data.kitten;
          } else if (catAge >= 1 && catAge < 7) {
            suggestedFood = data.sterilized;
          } else {
            suggestedFood = data.adult;
          }

          displayCatFoods(suggestedFood);
        },
        error: function (xhr, status, error) {
          console.log("Error:", error);
        },
      });
    }
  });

  function displayCatFoods(foods) {
    var suggestSection = $("#suggest-section");

    suggestSection.empty().append('<ul class="cat-food-list">');

    $.each(foods, function (index, food) {
        var foodItem = $('<li></li>').text(food);

      suggestSection.find("ul").append(foodItem);
    });
  }
});

