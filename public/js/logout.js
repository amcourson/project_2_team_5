
$(document).ready(function() {
  $( "#logout" ).on("click",function() {
    loginButtonClicked();
  });
});

const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
        alert("You're Logout!!");
        document.location.replace('/index');
    } else {
      alert("Something wrong happened, please try again!!");
    }
  };
  
  