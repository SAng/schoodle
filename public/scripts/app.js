$(() => {

  //EVENT HANDLER:
  //When clicking the submit button after filling out 'Event Details' page,
  //eventdetails container will toggle up.
  $('#continue-button').on('click', function(e) {
    e.preventDefault();
    if( $('.event-title').val() && $('.event-description').val() && $('.name').val()) {
      $('.event-details').slideToggle("fast", function() {
      });
      $('.date-picker').show();
    } else {
      alert('Plese fill all forms in ples ^_^');
    }
  });

  //EVENT HANDLER: Click Add date button to add new date and will append
  //date picker.
  $('.add-date-btn').on('click', function(e) {
    e.preventDefault();
    var $datePicker = $("<input type='date'>").addClass("date-picker");
    var $labelStartTime = $("<label>").addClass("start-time-label");
    var $startTime = $("<input type='time'>").addClass("start-time");
    var $labelEndTime = $("<label>").addClass("end-time-label");
    var $endTime = $("<input type='time'>").addClass("end-time");
    var $deleteButton = $("<input type='button' value='Delete'>").addClass("btn");
    var $form = $("<form>").addClass("date-picker-form");

    $form.append( $datePicker, $labelStartTime, $startTime, $labelEndTime, $endTime, $deleteButton );

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
  $('.event-date-time').on('click', '#delete-date-button', function(e) {
    e.preventDefault();
    $(this).closest('form').remove();
  });

  $('.submit-button').on('click', function(e) {
    var madeSlots = [];
     $(".event-date-time").find(".date-picker-form").each(function(){ madeSlots.push({date: this["date-picker"].val(), start_time: this.start_time, end_time: this.end_time}); });
    console.log(madeSlots)
    $.ajax({
    type: "POST",
    url: window.location.pathname,
    data: {
      "title": $('#event-title').val(),
      "description": $('#event-description').val(),
      "name": $('#owner-name').val(),
      "slots": madeSlots
    },
    success: function() {
        location.reload();
    }
    });
  });

});



