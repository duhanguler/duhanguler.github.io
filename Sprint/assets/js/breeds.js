$(document).ready(function() {
  $.ajax({
    url: 'assets/data/breeds.json',
    dataType: 'json',
    success: function(data) {
      var breedsSlider = $('#breedsSlider');

      data.forEach(function(breed) {
        var slide = $('<div class="slide"></div>');
        var breedImage = $('<img class="breed-image">').attr('src', 'assets/img/' + breed.image);
        var breedName = $('<h2 class="breed-name"></h2>').text(breed.name);
        var breedOrigin = $('<p class="breed-origin"></p>').text('Origin: ' + breed.origin);
        var breedDescription = $('<p class="breed-description"></p>').text(breed.description);

        slide.append(breedImage, breedName, breedOrigin, breedDescription);
        breedsSlider.append(slide);
      });

      breedsSlider.bxSlider({
        // bxSlider options
        mode: 'horizontal',
        auto: true,
        pause: 5000,
        controls: true,
        pager: true,
        slideWidth: 800
      });
    },
    error: function(xhr, status, error) {
      console.log('Error:', error);
    }
  });
});
