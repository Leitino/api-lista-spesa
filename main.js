$(function () {
  $.ajax({
    url:'http://138.68.64.12:3008/todo/',
    method: "GET",
    success:function(data) {
      console.log(data)
      for (var i = 0; i < data.length; i++) {
        $('ul').append(
          '<li>' + data[i].text + '</li>'
        )
      }
    },
    error:function (status) {
      console.log('erorre' + status)
    },
  });
  $('#button').click(function() {
      var userInput = prompt('aggiungi qualcosa alla lista')
    $.ajax({
      url:'http://138.68.64.12:3008/todo/',
      method: 'POST',
      data: {
        text: userInput,
      },
      success:function(data) {
        $('ul').append(
          '<li>' + data.text + '</li>'
        )
      },
      error:function (status) {
        console.log('erorre' + status)
      },

    });
  })
});
