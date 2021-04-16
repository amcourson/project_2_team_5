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
      swal("You're logout");

      //alert("You're Logout!!");
        document.location.replace('/index');
  } else {
    swal("Something wrong happened, please try again!!");

  //  alert("Something wrong happened, please try again!!");
  }

}
