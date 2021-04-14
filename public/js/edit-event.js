$(document).ready(function() {
  $( "#updateEvent" ).on("click",function() {
    updateEvent();
  })
  $( "#deleteEvent" ).on("click",function() {
    deletePost();
  })
});
async function deletePost() {
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
      const response = await fetch(`/api/events/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
          id: id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        alert("Event deleted..");
        document.location.replace('/Dashboard/');
      } else {
        alert(response.statusText);
      }
}
