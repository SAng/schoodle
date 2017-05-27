

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
    var $textBox = $("<input type='text'>").addClass("add-participant-text");

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


  //Copy button on long URL


  //When clicking Edit, make participant text box be able to type


  //POST request when someone add themselves as participant
  $('.submit-button').on('click', function(e) {
    e.preventDefault();
    if() {
      else
    }
    $.ajax({
        method: 'POST',
        url: '/:long_url/users/:userid',
        data: $(this).serialize()
      }).success(tweet => {
        $tweetSection.prepend(createTweetElement(tweet));
      }).error(error => {
        console.log('error', error);
      });
  });

  //SUBMIT to add participants/time slots to database

});
