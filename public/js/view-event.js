$(document).ready(function() {

  $( "#add-comment" ).on("click",function() {
    commentFormHandler();
  })
    $( "#saveRSVP" ).on("click",function() {
        updateRSVP();
    });
    $( "#saveRSVPpotluck" ).on("click",function() {
      updateRSVPPotluck();
    });
    $( "#saveGiftRSVP" ).on("click",function() {
        updateRSVPGift();
  });
});

async function updateRSVPPotluck() {
    
  var checkedValue = $("input[name='rsvpPotluck']:checked").val();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  alert(checkedValue + id);
    const response = await fetch(`/api/potluck/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ id: checkedValue, event_id: id }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      alert("RSVP Updated");
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }

}

async function updateRSVPGift() {
    
  var checkedValue = $("input[name='rsvpGift']:checked").val();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  alert(checkedValue + id);
    const response = await fetch(`/api/gift/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ id: checkedValue, event_id: id }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      alert("RSVP gift Updated");
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }

}

async function updateRSVP() {
    
    var rsvp = $("input[name='rsvp']:checked").val();
    var adultcount = $("#adult-count").val();
    var kidscount = $("#kids-count").val();
    alert(rsvp + adultcount + kidscount);

    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
      
      const response = await fetch(`/api/guest/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ rsvp, adultcount, kidscount, event_id: id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        alert("RSVP Updated");
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }

}

async function commentFormHandler() {
  let commentdate = new Date().toLocaleDateString();
  let commenttext = $('.comment-text').val();
  const event_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
  ];
  alert(commenttext + event_id)

  if (commenttext) {
      const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({ event_id, commenttext, commentdate }),
          headers: {
              'Content-Type': 'application/json'
          }
      });
      if (response.ok) {
          alert("Comment added");
          document.location.reload();
      } else {
          alert("Something wrong happened, please try again!!");
          $('#comment-form').style.display = "block";
      }
  }
}
