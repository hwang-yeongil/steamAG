// const error_word = document.querySelector(".hidden");
// if(document.querySelector("#ex1").)

$(document).ready(function() {
  //$('#username').focus();

  $('#submit').click(function() {

    event.preventDefault(); // prevent PageReLoad

    var ValidEmail = $('#username').val() === '1234'; // User validate
    var ValidPassword = $('#password').val() === '1234'; // Password validate

      if (ValidEmail === true && ValidPassword === true) { // if ValidEmail & ValidPassword
          // $('.valid').css('display', 'block');
          window.location = "https://github.com/hwang-yeongil/steamAG"; // go to home.html
      }
      // else {
      //     $('.error').css('display', 'block'); // show error msg
      // }
      else{
        document.querySelector(".hidden").classList.remove("hidden");
      }
  });
});
