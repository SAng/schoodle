$(() => {

  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });;

  //EVENT HANDLER: Display one container at a time until continue button is clicked.


  //EVENT HANDLER: Make Continue button appear after 'Event Details' page is filled.
  $(".event-details-form").

  //EVENT HANDLER:
  //When clicking the submit button after filling out 'Event Details' page,
  //eventdetails container will toggle up.
  $(".event-details-form").('submit', function (event) {
    event.preventDefault();
    $(".event-details").slidetoggle("fast", function() {
      $.ajax({
        method: 'POST',
        url: '/',
        data: $("form").serialize()
      }).done();
      // success(data => {
      //   $tweetSection.prepend(createTweetElement(tweet));
      // }).error(error => {
      //   console.log('error', error);
      // });
    });
  });

});
