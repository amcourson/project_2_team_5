

$(document).ready(function() {
  $( "#loginButton" ).on("click",function() {
    loginButtonClicked();
  });
});
async function loginButtonClicked () {
  const username = document.querySelector('.input-username-login').value.trim();
  const password = document.querySelector('.input-password-password').value.trim();

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
         // alert("Incorrect email or password. Please try again!");
        }
  }
}