$(document).ready(function() {
  $.ajax({
    method: 'GET',
    url: 'https://sprint.dg.web.tr/blog.json',
    dataType: 'json',
    success: function(data) {
      var accordion = $('#accordion');

      data.forEach(function(blog) {
        var blogTitle = $('<h3></h3>').text(blog.title);
        var blogContent = $('<div></div>').addClass('blog-content');

        var blogImage = $('<img>').attr('src', 'assets/img/' + blog.image).on('error', function() {
          $(this).attr('src', 'assets/img/default.jpg'); // Replace with a default image if the specified image is not found
        }).addClass('blog-image'); // Add a CSS class for styling

        var blogText = $('<div></div>').addClass('blog-text').html(blog.content);

        blogContent.append(blogImage, blogText);

        accordion.append(blogTitle);
        accordion.append(blogContent);
      });

      accordion.accordion({
        collapsible: true,
        heightStyle: 'content'
      });
    },
    error: function(xhr, status, error) {
      console.log('Error:', error);
    }
  });
});
