$(document).ready(function() {

    $( "#saveRSVP" ).on("click",function() {
        updateRSVP();
      //  var checkedValue = $("input[name='rsvp']:checked").val();
       // alert(checkedValue);
    });
});

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
        body: JSON.stringify({ id: id, rsvp, adultcount, kidscount, event_id: id
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

