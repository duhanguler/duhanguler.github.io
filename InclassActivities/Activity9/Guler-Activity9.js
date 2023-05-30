$(document).ready(function() {
	// Preload images
	$("#image_list a").each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});
	
	// Event handler for links
	$("#image_list a").click(function(evt) {
		// Prevent default action of the link
		evt.preventDefault();

		// Get image URL and caption
		var imageURL = $(this).attr("href");
        var caption = $(this).attr("title");

		// Fade out caption and image
		$("#caption, #image").fadeOut(1000, function () {
			// Set new image source and caption text
			$("#image").attr("src", imageURL);
			$("#caption").text(caption);

			// Fade in caption and image
			$("#caption, #image").fadeIn(1000);
		});
	});

	// Move focus to first thumbnail
	$("li:first-child a").focus();
});
