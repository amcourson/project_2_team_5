<<<<<<< HEAD

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
  
  
=======
$(document).ready(function() {
  $( "#logout" ).on("click",function() {
    logout();
  });
});
async function logout () {
  const response = await fetch('/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
      alert("You're Logout!!");
        document.location.replace('/index');
  } else {
    alert("Something wrong happened, please try again!!");
  }

}
>>>>>>> bb245f8207363ddc50e324fc79db9f5a85bfa271
