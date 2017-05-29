$(() => {

  //EVENT HANDLER:
  //When clicking the submit button after filling out 'Event Details' page,
  //eventdetails container will toggle up.
  $('#continue-button').on('click', function(e) {
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
  $('#add-date-btn').on('click', function(e) {
    e.preventDefault();
    var $datePicker = $("<input type='date'>").addClass("date-picker");
    var $labelStartTime = $("<label>").addClass("start-time-label");
    var $startTime = $("<input type='time'>").addClass("start-time");
    var $labelEndTime = $("<label>").addClass("end-time-label");
    var $endTime = $("<input type='time'>").addClass("end-time");

    var $deleteButton = $("<input type='button' value='remove'>").addClass("delete-date-button");

    var $form = $("<form>").addClass("date-picker-form");
    var $submitDateAndTime = $("<input type='button' class='submit-date-button' value='submit'>")


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
  $('.delete-date-button').on('click', function(e) {
    e.preventDefault();
    $(this).closest('form').remove();
  });

  $('.submit-date-button').on('click', function(e) {
    e.preventDefault();
    var madeSlots = [{}];
    var validSlots = true;

    $(".date-picker-form").each(function () {
        if (validSlots === true) {
          var date = ($(this).find(".date-picker").val());
          var start_time = ($(this).find(".start-time").val());
          var end_time = ($(this).find(".end-time").val());
          validSlots = (date && start_time && end_time)
        } else {
          return;
        }
      });

    if (!validSlots)
      {alert('Slot fields filled in incorrectly. Ples fix ^.^')}
    else {
      $(".date-picker-form").each(function () {
          var currentSlot = {};
          currentSlot.date = ($(this).find(".date-picker").val());
          currentSlot.start_time = ($(this).find(".start-time").val());
          currentSlot.end_time = ($(this).find(".end-time").val());
          madeSlots.push(currentSlot);
      })
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
      })
    }

  });

});



