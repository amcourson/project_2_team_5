$(document).ready(function() {

    $( "#saveRSVP" ).on("click",function() {
        updateRSVP();
      //  var checkedValue = $("input[name='rsvp']:checked").val();
       // alert(checkedValue);
    });
    $( "#saveGiftRSVP" ).on("click",function() {
    //  alert("in save gift" + checkedValue);
      updateRSVPGift();
     // alert(checkedValue);
  });
});

async function updateRSVPGift() {
    
  var checkedValue = $("input[name='rsvpGift']:checked").val();
  alert(checkedValue);

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  alert(checkedValue + id);
    const response = await fetch(`/api/gift/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ id: id, event_id: id }),
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

