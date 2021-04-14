
   
  let status = "ACTIVE";

        var gift = [];
        var items = [];

  $(document).ready(function() {

    alert("in read");
    var addressEL = $('#address');
    var virtualLinkEL = $('#virtualLinkEL');
    $( "#saveEventAsDraft" ).on("click",function() {
      alert("draft button clicked ");

      status = "DRAFT";
      saveButtonClicked();
    })
  $( "#saveEventAsActive" ).on("click",function() {
    alert("active  button clicked ");

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
    alert("in save guest ");

    const response = await fetch('/lastAdded', {
      method: 'POST',
      body: JSON.stringify({ name, email, startdate, event_id}),
      headers: { 'Content-Type': 'application/json' },
    });
    let json = await response.json();

    if (response.ok) {
      alert("response" + response);
    } else {
      alert("NO Event found1");

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
      alert("id is:  "+ json);

      alert("Event saved");
      document.location.replace(`/EventDetails/${json}`);
    } 
    else if (response.status == 400 || response.status == 500) {
      alert("Something went wrong, please try again!!")

      showConfirm('Something went wrong, please try again!!');
    }
  }

  
  function showConfirm(message) {
    var mymodal = $('#confirm');
    mymodal.find('.modal-body').text(message);
    mymodal.modal('show');
  }

 

  
