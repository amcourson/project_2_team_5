$(document).ready(function() {
  $( "#add-comment" ).on("click",function() {
    commentFormHandler();
  })
  
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
        document.location.replace('/Dashboard/');
      } else {
        swal("Something wrong happened, please try again!!");
      }
}

async function commentFormHandler() {
  let commentdate = new Date().toLocaleDateString();
  let commenttext = $('.comment-text').val();
  const event_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
  ];

  if (commenttext) {
      const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({ event_id, commenttext, commentdate }),
          headers: {
              'Content-Type': 'application/json'
          }
      });
      if (response.ok) {
          document.location.reload();
      } else {
          swal("Something wrong happened, please try again!!");
          $('#comment-form').style.display = "block";
      }
  }
}



