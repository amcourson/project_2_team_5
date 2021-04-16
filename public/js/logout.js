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
