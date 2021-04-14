
   
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
      document.location.replace(`api/events/EventDetails/${json}`);
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

  


  
$(".add-row-gift").click(function(){
    var giftName = $("#gift-item").val();
    var giftUrl = $("#gift-url").val();
    var row = `<tr><td> <input type="checkbox" name="check-gift"></td><td> ${giftName} </td><td> ${giftUrl} </td></tr>`;
    $("#table-gift tbody").append(row);
});

// Find and remove selected table rows
$(".delete-row-gift").click(function(){
    alert("delete gift");

    $("#table-gift tbody").find('input[name="check-gift"]').each(function(){
        if($(this).is(":checked")){
            $(this).parents("tr").remove();
        }
    });
});

$( "#saveGift" ).click(function() {
    let giftname, url;

    $("#table-gift tbody tr").find('input[name="check-gift"]').each(function(){
      $(this).closest('tr').find('td:eq(1)').each(function() {
        giftname = $(this).text();
      });
      $(this).closest('tr').find('td:eq(2)').each(function() {
        url = $(this).text();
      });
      gift.push({giftname: giftname, url: url});
    });
    console.log("gift: " + gift);
  });
  

