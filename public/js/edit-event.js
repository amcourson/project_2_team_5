$(document).ready(function() {
  alert("in edit JS");

  $( "#updateEvent" ).on("click",function() {
    alert("active  button clicked ");
    updateEvent();
  })
  $( "#deleteEvent" ).on("click",function() {
    alert("delete  button clicked ");
    deletePost();
  })

});


async function updateEvent(event) {
  alert("im update");

    let title = $('#event-title').val();
   /* let description = $('#event-description').val();
    let address  = $('#event-address').val();
    let city = $('#event-city').val();
    let state = $('#event-state').val();
    let virtualLink = $('#virtualLinkEL').val();
    */


    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    alert(title + id);

      
      const response = await fetch(`/api/events/${id}`, {
        method: 'PUT',
        body: JSON.stringify({id,  title }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        alert("Event Updated");
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }

}
async function deletePost() {
  //event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
      alert(id);

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

//delete-post
//$('.edit-event').addEventListener('click', updateEvent);