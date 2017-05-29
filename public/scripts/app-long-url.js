

$(() => {


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



});


  //Copy button on long URL
  $('#copy-button').on('click', function(e) {
    e.preventDefault();
    window.prompt("Copy to clipboard: Ctrl+C, Enter", window.location.href);

  });

  //POST request when someone add themselves as participant
  $('.submit-button').on('click', function(e) {
    e.preventDefault();
  });




});
