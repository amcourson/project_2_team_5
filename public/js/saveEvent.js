
  let status = "ACTIVE";
  var gift = [];
  var items = [];
  
  $(document).ready(function() { 

    var addressEL = $('#address');
    var virtualLinkEL = $('#virtualLinkEL');
   
    $( "#saveEventAsActive" ).on("click",function() {
      status = "DRAFT";
      saveButtonClicked();
    })
    $('#makeitVirtual').change(function() {
      if(this.checked) {
        addressEL.attr('hidden', true);
        virtualLinkEL.attr('hidden', false);
        isVirtual = true;
        
      }else {
        addressEL.attr('hidden', false);
        virtualLinkEL.attr('hidden', true);
        isVirtual = false;
      }  
    });
  });

  const saveGuestList = async (event) => {
    const response = await fetch('/lastAdded', {
      method: 'POST',
      body: JSON.stringify({ name, email, startdate, event_id}),
      headers: { 'Content-Type': 'application/json' },
    });
    let json = await response.json();

    if (response.ok) {
    } else {
      swal("Something wrong happened, please try again!!");
    }
  }
 
  const saveButtonClicked = async (event) => {
    
    let title = $('#event-title').val();
    let description = $('#event-description').val();
    let startdate = `${$('#startDate').val()} ${$('#startTime').val()}`;
    let enddate = `${$('#startDate').val()} ${$('#endTime').val()}`;
    let address  = $('#event-address').val();
    let city = $('#event-city').val();
    let state = $('#event-state').val();
    let virtualLink = $('#virtualLinkEL').val();
    let category = $('#event-category option:selected').attr("id");
    
    const response = await fetch('/api/events', {
      method: 'POST',
      body: JSON.stringify({ title, description, startdate, enddate, address, city, state, virtualLink, category, status }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      let json = await response.json();
      document.location.replace(`/EventDetails/${json}`);
    } 
    else if (response.status == 400 || response.status == 500) {
      swal("Something wrong happened, please try again!!");
    }
  }

function validate(field, text) {
    if (text == null || text == "") {
      alert(`Please Enter field`);
    }
  }

 
  
