$(() => {

  // $.ajax({
  //   method: "GET",
  //   url: "/api/users"
  //   }).done((users) => {
  //   for(user of users) {
  //     $("<div>").text(user.name).appendTo($("body"));
  //   }
  // });

  //EVENT HANDLER:
  //When clicking the submit button after filling out 'Event Details' page,
  //eventdetails container will toggle up.
  $('.continue-button').on('click', function(e) {
    e.preventDefault();
    $('.event-details').slideToggle("fast", function() {
    });
    $('.date-picker').show();
  });

  //EVENT HANDLER: Click Add date button to add new date and will append
  //date picker.
  $('.add-date-button').on('click', function(e) {
    e.preventDefault();
    var $datePicker = $("<input type='date'>").addClass("date-picker");
    var $startTime = $("<input type='time'>").addClass("start-time");
    var $endTime = $("<input type='time'>").addClass("end-time");
    var $deleteButton = $("<input type='button'>").addClass("delete-date-button");
    var $form = $("<form>").addClass("date-picker-form");

    $form.append( $datePicker, $startTime, $endTime, $deleteButton );
    $('.event-date-time').append( $form );
  });

  //EVENT HANDLER: Toggles the event-details down and hides date picker container.
  $('.toggle-event-details').on('click', function(e) {
    e.preventDefault();
    $('.event-details').slideToggle("fast", function() {
    });
    $('.date-picker').hide();
  });

  $('.delete-date-button').on('click', function(e) {
    e.preventDefault();
    $(this).remove();
  });






});



