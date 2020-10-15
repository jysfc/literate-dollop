//sign up button
$("#sign-up-button").click(function () {
   $("#create-account-card").toggleClass("d-none");
   $("#sign-up-button").toggleClass("d-none");
});

//edit button
$("#edit-button").click(function () {
   $("#edit-property-card").toggleClass("d-none");
   $("#edit-button").toggleClass("d-none");
});


// lets go button
$("#lets-go").click(function () {
   //email input
   const emailInput = $("#sign-up-email-input").val();
   let lowerCaseEmail = emailInput.trim().toLowerCase();
   const passwordInput = $("#sign-up-password-input").val();
   const lowerCasePassword = passwordInput.trim().toLowerCase();
   const delimiter = `@`;
   const indexOfEmail = lowerCaseEmail.indexOf(delimiter);
   const localEmail = emailInput.slice(0, indexOfEmail);
   
   if (lowerCaseEmail.length === 0) {
   // email error msg
      $("#sign-up-email-input").addClass("is-invalid");
      $("#sign-up-email-error").removeClass("d-none");
      $("#sign-up-email-error").html("Please enter your email address.");
   } else {
   // email success msg
      $("#sign-up-email-input").removeClass("is-invalid");
      $("#sign-up-email-input").addClass("is-valid");
      $("#sign-up-email-error").addClass("d-none");
   } if (lowerCasePassword.length === 0) {
   // password input
         $("#sign-up-password-input").addClass("is-invalid");
         $("#sign-up-password-error").removeClass("d-none");
         $("#sign-up-password-error").html("Please enter your password.");
   } else if  (lowerCasePassword.length <= 9) {
   // password error msg
         $("#sign-up-password-input").addClass("is-invalid");
         $("#sign-up-password-error").removeClass("d-none");
         $("#sign-up-password-error").html("Your password must be at least 9 characters.");
   } else {
   // password success msg
         $("#sign-up-password-input").removeClass("is-invalid");
         $("#sign-up-password-input").addClass("is-valid");
         $("#sign-up-password-error").addClass("d-none");

   } if (lowerCasePassword.includes(localEmail) && localEmail.length >= 4){
   // pw match email error
         $("#sign-up-password-input").addClass("is-invalid");
         $("#sign-up-password-error").removeClass("d-none");
         $("#sign-up-password-error").html("All or part of your email address cannot be used in your password.");
   } 
});