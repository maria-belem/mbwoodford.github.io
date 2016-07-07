$ ( document ).ready(function() {

  $('form').submit(function(event) {
    event.preventDefault();

    $.ajax({
      url: "http://formspree.io/mbwoodford@gmail.com",
      method: "POST",
      data: {
        email: $('#js-email').val(),
        message: $('#js-message').val(),
      },
      dataType: "json"
    }).error(function(jqXHR, status, error) {
        alert('Uh oh, something went wrong. Please try again.');
    }).success(function(data, status, jqXHR) {
        alert('Thank you for your message. Maria-Belem will get back to you soon.');
        $('form').find('#js-email, #js-message').val('');
    });
  });

});
