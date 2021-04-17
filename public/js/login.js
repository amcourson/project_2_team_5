

$(document).ready(function() {
  $( "#loginButton" ).on("click",function() {
    loginButtonClicked();
  });
});

async function loginButtonClicked () {
  const username = $('.input-username-login').val().trim();
  const password = $('.input-password-password').val().trim();

  if (username && password) {
      const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        });
              
        console.log(response);
        if  (response.ok) {
            document.location.replace('/Dashboard');
        } 
        else if (response.status == 400 || response.status == 500) {
          swal("Incorrect email or password. Please try again!");
        }
  } else {
     swal("Please Enter username and password");

  }
}