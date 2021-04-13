    
  let status = "ACTIVE";

        var people = [];
        var gift = [];
        var items = [];

  $(document).ready(function() {
    var addressEL = $('#address');
    var virtualLinkEL = $('#virtualLinkEL');

     $( "#save" ).on("click",function() {
       alert(people);
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
      alert("Event saved");
      alert(items);

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

  $(".add-row-people").click(function(){
    var name = $("#people-name").val();
    var email = $("#people-email").val();
    var row = `<tr><td><input type='checkbox' name='check-people'></td><td>  ${name} </td><td> ${email} </td></tr>`;
    $("#table-people tbody").append(row);
});

// Find and remove selected table rows
$(".delete-row-people").click(function(){
    alert("delete pople");
    $("#table-people tbody").find('input[name="check-people"]').each(function(){
        if($(this).is(":checked")){
            $(this).parents("tr").remove();
        }
    });
});

$( "#savePeople" ).click(function() {
    let name, email;

    $("#table-people tbody tr").find('input[name="check-people"]').each(function(){
      $(this).closest('tr').find('td:eq(1)').each(function() {
            name = $(this).text();
      });
      $(this).closest('tr').find('td:eq(2)').each(function() {
            email = $(this).text();
      });
      people.push({name: name, email: email});
    });
 
    console.log("people: " + people[0].email);
  });


  $(".add-row-potluck").click(function(){
    var item = $("#item1").val();
    var qty = $("#quantity").val();
    var row = `<tr><td><input type='checkbox' name='check-item'></td><td>  ${item} </td><td> ${qty} </td></tr>`;
    $("#table-potluck tbody").append(row);
});

// Find and remove selected table rows
$(".delete-row-potluck").click(function(){
    $("#table-potluck tbody").find('input[name="check-item"]').each(function(){
        if($(this).is(":checked")){
            $(this).parents("tr").remove();
        }
    });
});

$( "#savePotluck" ).click(function() {
    let item,qty;
    
    $("#table-potluck tbody tr").find('input[name="check-item"]').each(function(){
      $(this).closest('tr').find('td:eq(1)').each(function() {
         item = $(this).text();
      });
      $(this).closest('tr').find('td:eq(2)').each(function() {
        qty = $(this).text();
      });
      items.push({item: item, qty: qty});
    });
 
    console.log("items: "+ items);
  });
  
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
  


  const commentFormHandler = async (event) => {
    alert("in comment");
    event.preventDefault();
    let currentdate = new Date().toLocaleDateString();

    let text = $('.comment-text').value;
    const event_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ event_id, text, currentdate }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            alert("Comment added");
            document.location.reload();
        } else {
            alert("Something wrong happened, please try again!!");
            document.querySelector('#comment-form').style.display = "block";
        }
    }
}



$('.comment-form').addEventListener('submit', commentFormHandler);