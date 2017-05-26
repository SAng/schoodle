$(() => {

  // $.ajax({
  //   method: "GET",
  //   url: "/api/users"
  //   }).done((users) => {
  //   for(user of users) {
  //     $("<div>").text(user.name).appendTo($("body"));
  //   }
  // });

  //Display one container at a time until continue button is clicked.


  //EVENT HANDLER:
  //When clicking the submit button after filling out 'Event Details' page,
  //eventdetails container will toggle up.
  $('.continue-button').on('click', function(e) {
    e.preventDefault();
    $('.event-details').slideToggle("fast", function() {
    });
    $('.date-picker').show();
  });

  $('.add-date-button').on('click',function(e){
    e.preventDefault();
    var $datePicker = $("<input type='date'>").addClass("date-picker");
    var $startTime = $("<input type='time'>").addClass("start-time");
    var $endTime = $("<input type='time'>").addClass("end-time");
    var $form = $("<form>").addClass("date-picker-form");
    $form.append( $datePicker, $startTime, $endTime );
    $('.event-date-time').append( $form );
  });








});



