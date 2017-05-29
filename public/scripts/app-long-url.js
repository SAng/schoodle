

$(() => {
  //Edit/Delete Button beside each user

  // //Adds participants to table
  // $('.add-participant-button').on('click', function (e) {
  //   event.preventDefault();
  //   // $(this).hide();
  //   $('.add-participant').show();
  //   // appends another row for more participants
  //   var $row = $("<tr>").addClass("row");
  //   var $buttonColumn = $("<td>").addClass("button-column")
  //   var $participantColumn = $("<td>").addClass("participant-column");
  //   var $editParticipantBtn = $("<button> Edit </button>").addClass("edit-participant");
  //   var $submitButton = $("<input type='submit' value='Submit'>").addClass("submit-button");
  //   var $deleteParticipantBtn = $("<button> Delete </button>").addClass("delete-participant");
  //   var $div = $("<div>").addClass("add-participant");
  //   var $textBox = $("<input type='text'>").addClass("text-box");

  //   $buttonColumn.append( $editParticipantBtn, $deleteParticipantBtn, $submitButton );
  //   $participantColumn.append( $textBox );
  //   $row.append( $buttonColumn, $participantColumn );
  //   $('.table-slot').append( $row );

  // });
// debugger;

  $('#add-participant').on('click', function (e) {
    event.preventDefault();
    $.ajax({
    type: "POST",
    url: window.location.pathname + "/users/",
    data: {"slots":[0],
           "name": ""},
    success: function() {
        location.reload();
    }
    });
  });


   //Deletes a row from the table
  $('.table-slot').on('click', '.delete-participant', function(e) {
    e.preventDefault();
    $.ajax({
    type: "POST",
    url: window.location.pathname + "/users/" + $(this).closest('tr').find('.participant-name').attr("id") +"/delete",
    success: function() {
        location.reload();
    }
});
  });


  $('.table-slot').on('click', '.edit-participant', function(e) {
    e.preventDefault();
    $(this).closest('tr').addClass('editable');
    $(this).closest('tr').find('.participant-name').hide();
    $(this).closest('tr').find('.text-box').show();
    $(this).closest('tr').find('.fa').addClass('editable');
    $('i.fa.editable').on('click', function(e) {
      $(this).toggleClass('fa-check-circle');
      $(this).toggleClass('fa-circle-o');
    });
    $(this).html('Submit');
    $(this).on('click', function(e) {
    var clickedSlots = [0];
    $(this).closest('tr').find(".fa-check-circle").each(function(){ clickedSlots.push(this.title); });
    console.log(clickedSlots)
      $.ajax({
    type: "POST",
    url: window.location.pathname + "/users/" + $(this).closest('tr').find('.participant-name').attr("id"),
    data: {"slots":clickedSlots,
           "name": $(this).closest('tr').find('.text-box').val()},
    success: function() {
        location.reload();
    }
});
    });
  });

$( document ).ready(function() {
    $('#long-url').val(window.location.href);
    // debugger


});


  //Copy button on long URL
  $('.fa.fa-clipboard').on('click', function(e) {
    e.preventDefault();
    function copyToClipboard(element) {
      var $temp = $("<input>");
      $("body").append($temp);
      $temp.val($(element).text()).select();
      document.execCommand("copy");
      $temp.remove();
    }
  });

  //POST request when someone add themselves as participant
  $('.submit-button').on('click', function(e) {
    e.preventDefault();
  });

  //SUBMIT to add participants/time slots to database

 function getDateString() {
  var monthNames = [ "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December" ];
  //return monthNames[date.getMonth()];
  return "hi";
  };


});
