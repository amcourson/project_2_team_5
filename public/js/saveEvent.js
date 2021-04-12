    
  let status = "ACTIVE";

  $(document).ready(function() {
    var addressEL = $('#address');
    var virtualLinkEL = $('#virtualLinkEL');
    
   
     $( "#save" ).on("click",function() {
       alert("save button clicked ");
       status = "ACTIVE";
        saveButtonClicked();
    });

    $( "#saveEventAsDraft" ).on("click",function() {
      alert("draft button clicked ");

      status = "DRAFT";
      saveButtonClicked();
  });
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

  const saveButtonClicked = async (event) => {

    alert(status);
    
    let title = $('#event-title').val();
    let description = $('#event-description').val();
    let startDate = `${$('#startDate').val()} ${$('#startTime').val()}`;
    let endDate = `${$('#startDate').val()} ${$('#endTime').val()}`;
    let address  = $('#event-address').val();
    let city = $('#event-city').val();
    let state = $('#event-state').val();
    let virtualLink = $('#virtualLinkEL').val();
    let category = $('#event-category option:selected').attr("id");
    
    const response = await fetch('/api/events', {
      method: 'POST',
      body: JSON.stringify({ title, description, startDate, endDate, address, city, state, virtualLink, category, status }),
      headers: { 'Content-Type': 'application/json' },
    });
    if  (response.ok) {
      alert("Event saved")

      showConfirm('Event Saved');
      document.location.replace('/dashboard');
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
  
  
