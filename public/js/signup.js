
$(document).ready(function() {
    $( "#create-account" ).on("click",function() {
      signUpButtonClicked();
    });
  });

  async function signUpButtonClicked () {

    const username = $('.input-username-signup').val();
    const password = $('.input-password-signup').val();
    const confirmPassword = $('.input-confirm-password-signup').val();
    const firstname = $('.input-fname-signup').val();
    const lastname = $('.input-lname-signup').val();
    const addresss = $('.input-address-signup').val();
    const phone = $('.input-phone-signup').val();
    const email = $('.input-email-signup').val();


    if (password != confirmPassword){
        swal("Password and Confirm password doesnot match");
        return;
    } 
    if (username && password && confirmPassword) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, password, firstname, lastname, addresss, phone, email }),
            headers: { 'Content-Type': 'application/json' },
          });
          
          if (response.ok) {
            document.location.replace('/Dashboard');
          } else {
            swal("Looks like username / email already in use, please try different");
          }
    }
};
