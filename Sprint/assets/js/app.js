const blogUrl = "https://sprint.dg.web.tr/blog.php";

$(document).ready(function () {
  $.ajax({
    method: "GET",
    url: blogUrl,
    dataType: "jsonp",
    xhrFields: {
      withCredentials: true,
    },
    success: function (data) {
      var accordion = $("#accordion");

      data.forEach(function (blog) {
        var blogTitle = $("<h3></h3>").text(blog.title);
        var blogContent = $("<div></div>").addClass("blog-content");

        var blogImage = $("<img>")
          .attr("src", "assets/img/" + blog.image)
          .on("error", function () {
            $(this).attr("src", "assets/img/default.jpg");
          })
          .addClass("blog-image");

        var blogText = $("<div></div>")
          .addClass("blog-text")
          .html(blog.content);

        blogContent.append(blogImage, blogText);

        accordion.append(blogTitle);
        accordion.append(blogContent);
      });

      accordion.accordion({
        collapsible: true,
        heightStyle: "content",
      });
    },
    error: function (xhr, status, error) {
      console.log("Error:", error);
    },
  });
});

$(document).ready(function () {
  $.ajax({
    url: "assets/data/breeds.json",
    dataType: "json",
    success: function (data) {
      var breedsSlider = $("#breedsSlider");

      data.forEach(function (breed) {
        var slide = $('<div class="slide"></div>');
        var breedImage = $('<img class="breed-image">').attr(
          "src",
          "assets/img/" + breed.image
        );
        var breedName = $('<h2 class="breed-name"></h2>').text(breed.name);
        var breedOrigin = $('<p class="breed-origin"></p>').text(
          "Origin: " + breed.origin
        );
        var breedDescription = $('<p class="breed-description"></p>').text(
          breed.description
        );

        slide.append(breedImage, breedName, breedOrigin, breedDescription);
        breedsSlider.append(slide);
      });

      breedsSlider.bxSlider({
        // bxSlider options
        mode: "horizontal",
        auto: true,
        pause: 5000,
        controls: true,
        pager: true,
        slideWidth: 800,
      });
    },
    error: function (xhr, status, error) {
      console.log("Error:", error);
    },
  });
});

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
      var foodItem = $("<li></li>").text(food);

      suggestSection.find("ul").append(foodItem);
    });
  }
});

function toggleNavbar() {
  var navbar = document.getElementsByClassName("navbar")[0];
  navbar.classList.toggle("responsive");
}
