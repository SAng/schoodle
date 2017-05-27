

$(() => {
  //Edit/Delete Button beside each user

  //Adds participants to table
  $('.add-participant-button').on('click', function (e) {
    event.preventDefault();
    // $(this).hide();
    $('.add-participant').show();
    // appends another row for more participants
    var $row = $("<tr>").addClass("row");
    var $buttonColumn = $("<td>").addClass("button-column")
    var $participantColumn = $("<td>").addClass("participant-column");
    var $editParticipantBtn = $("<button> Edit </button>").addClass("edit-participant");
    var $submitButton = $("<input type='submit' value='Submit'>").addClass("submit-button");
    var $deleteParticipantBtn = $("<button> Delete </button>").addClass("delete-participant");
    var $div = $("<div>").addClass("add-participant");
    var $textBox = $("<input type='text'>").addClass("text-box");

    $buttonColumn.append( $editParticipantBtn, $deleteParticipantBtn, $submitButton );
    $participantColumn.append( $textBox );
    $row.append( $buttonColumn, $participantColumn );
    $('.table-slot').append( $row );

  });

   //Deletes a row from the table
  $('.table-slot').on('click', '.delete-participant', function(e) {
    e.preventDefault();
    $(this).closest('tr').remove();
  });

  //Get data from main_page to render on to long-url page

  //Copy button on long URL


  //When clicking Edit, make participant text box be able to type
  $('.edit-participant').on('click', function (e) {
    e.preventDefault();
    $('.participant-name').hide();
    // $('.table-slot').find('.row').closest('.text-box').show();
    $('.text-box').show();
  });

  //POST request when someone add themselves as participant
  $('.submit-button').on('click', function(e) {
    e.preventDefault();
  });

  //SUBMIT to add participants/time slots to database

});
