

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
    var $addParticipantBtn = $("<button> + </button>").addClass("add-participant-button");
    var $deleteParticipantBtn = $("<button> - </button>").addClass("delete-participant");
    var $div = $("<div>").addClass("add-participant");
    var $textBox = $("<input type='text'>").addClass("add-participant-text");

    $buttonColumn.append( $addParticipantBtn, $deleteParticipantBtn );
    $participantColumn.append( $textBox );
    $row.append( $buttonColumn, $participantColumn );
    $('.table-slot').append( $row );

  });

  //Copy button on long URL
  $()

  //When clicking Edit, make participant text box be able to type

  //POST request when someone add themselves as participant

  //SUBMIT to add participants/time slots to database

});
