

$(() => {

  //Adds participants to table
  $('.add-participant-button').on('click', function (e) {
    event.preventDefault();
    // appends another row for more participants
    var $row = $("<tr>").addClass("row");
    var $buttonColumn = $("<td>").addClass("button-column");
    var $participantColumn = $("<td>").addClass("participant-column");
    var $editParticipantBtn = $("<button> Edit </button>").addClass("edit-participant");
    var $submitButton = $("<input type='submit' value='Submit'>").addClass("submit-button");
    var $deleteParticipantBtn = $("<button> Delete </button>").addClass("delete-participant");
    var $div = $("<div>").addClass("add-participant");
    var $textBox = $("<input type='text'>").addClass("text-box");
    var $td = $("<td>").addClass("check-box");
    var $checkBoxRow = $td.append('<i class="fa fa-circle-o" aria-hidden="true">');

    $buttonColumn.append( $editParticipantBtn, $deleteParticipantBtn, $submitButton );
    $participantColumn.append( $textBox );
    $row.append( $buttonColumn, $participantColumn, $checkBoxRow );
    $('.table-slot').append( $row );

  });

  function dateExists() {
    if($(th)) {
      $("<td>").addClass("check-box");
    }

  }

   //Deletes a row from the table
  $('.table-slot').on('click', '.delete-participant', function(e) {
    e.preventDefault();
    $(this).closest('tr').remove();
  });

  //Makes icons clickable

  //Copy button on long URL


  //When clicking Edit, make participant text box be able to type
  $('.table-slot').on('click', '.edit-participant', function(e) {
    e.preventDefault();
    $(this).closest('tr').find('text-box').show();


    // $('.fa.fa-circle-o').on('click', function(e) {
    //   $('.fa.fa-check-circle').toggle();
    // });

  });

  //POST request when someone add themselves as participant
  $('.submit-button').on('click', function(e) {
    e.preventDefault();
  });

  //SUBMIT to add participants/time slots to database

});
