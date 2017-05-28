$(() => {

  //EVENT HANDLER:
  //When clicking the submit button after filling out 'Event Details' page,
  //eventdetails container will toggle up.
  $('.continue-button').on('click', function(e) {
    e.preventDefault();
    if( $('#event-title').val() && $('#event-description').val() && $('#owner-name').val()) {
      $('.event-details').slideToggle("fast", function() {
      });
      $('.date-picker').show();
    } else {
      alert('Plese fill all forms in ples ^_^')
    }
  });

  //EVENT HANDLER: Click Add date button to add new date and will append
  //date picker.
  $('.add-date-button').on('click', function(e) {
    e.preventDefault();
    var $datePicker = $("<input type='date'>").addClass("date-picker");
    var $startTime = $("<input type='time'>").addClass("start-time");
    var $endTime = $("<input type='time'>").addClass("end-time");
    var $deleteButton = $("<input type='button' value='x'>").addClass("delete-date-button");
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

  //EVENT HANDLER: Deletes dates
  $('.event-date-time').on('click', '.delete-date-button', function(e) {
    e.preventDefault();
    $(this).closest('form').remove();
  });

  $('#submit-button').on('click', function(e) {
    e.preventDefault();
    var madeSlots = [{}];
     // $(".event-date-time").find(".date-picker-form").each(function(){ madeSlots.push({date: this["date-picker"].val(), start_time: this.start_time, end_time: this.end_time}); });
    console.log("slots", madeSlots)
    console.log("event-title", $('#event-title').val())
    console.log("hi")
    $.ajax({
    type: "POST",
    url: window.location.pathname,
    data: {
      "title": $('#event-title').val(),
      "description": $('#event-description').val(),
      "name": $('#owner-name').val(),
      "slots": madeSlots
    },
    success: function(data) {
        window.location.href = data.redirect
    }
});
  });

});



