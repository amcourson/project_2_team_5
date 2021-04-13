$(document).ready(function() {

   $( "#loginButton" ).on("click", async function(){
     alert("in lgoin");

    //event.preventDefault();
    const username = $('.input-username-login').val();
    const password = $('.input-password-password').val();
    alert(username + password);

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
          });
                
          alert(response);
          return;

          console.log(response);
          if  (response.ok) {
            //document.location.replace('/dashboard');
          } 
          else if (response.status == 400 || response.status == 500) {
            alert("Incorrect email or password. Please try again!");
          }
    }
   }) 
});




/*

//const loginButtonClicked = async (event) => {
function login() {
    const username = $('.input-username-login').val();
    const password = $('.input-password-password').val();
    alert(username + password);

 if (username && password) {
   const response = fetch('/login', {
       method: 'POST',
       body: JSON.stringify({ username, password }),
       headers: { 'Content-Type': 'application/json' },
     });
           
     console.log(response);
     if (response.ok) {
       alert("logged in");

       //document.location.replace('/dashboard');
     } 
     else if (response.status == 400 || response.status == 500) {
       alert("Incorrect email or password. Please try again!");
     }
}
  }
   
*/

    




