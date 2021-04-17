var guest = [];
var potluckItems = [];
var giftItems = [];

var event_id = window.location.toString().split('/')[
  window.location.toString().split('/').length - 1
];    
event_id = event_id.replace('?','');
 

  $(document).ready(function() { 
     
    $(".add-row-people").click(function(){
        var name = $("#people-name").val();
        var email = $("#people-email").val();
        var row = `<tr><td><input type='checkbox' name='check-people'></td><td>  ${name} </td><td> ${email} </td></tr>`;
        $("#table-people tbody").append(row);
    });
    $(".delete-row-people").click(function(){
        $("#table-people tbody").find('input[name="check-people"]').each(function(){
            if($(this).is(":checked")){
               guest.splice($(this).parents("tr").index(), 1);
                  $(this).parents("tr").remove();
            }
        });
    });
    $( "#savePeople" ).click(function() {
        let name, email;
       
        $("#table-people tbody tr").find('input[name="check-people"]').each(function(){
          $(this).closest('tr').find('td:eq(1)').each(function() {
                name = $(this).text().trim();
          });
          $(this).closest('tr').find('td:eq(2)').each(function() {
                email = $(this).text().trim();
          });
          guest.push({name: name, email: email, event_id: event_id });
        });
        console.log("people: " + guest[0].email);
      });

    
    $(".add-row-potluck").click(function(){
        var item = $("#item1").val();
        var qty = $("#quantity").val();
        var description = $("#description").val();
        var row = `<tr><td><input type='checkbox' name='check-item'></td><td>  ${item} </td><td> ${description} </td><td> ${qty} </td></tr>`;
        $("#table-potluck tbody").append(row);
    });
    $(".delete-row-potluck").click(function(){
        $("#table-potluck tbody").find('input[name="check-item"]').each(function(){
            if($(this).is(":checked")){
                potluckItems.splice($(this).parents("tr").index(), 1);
                $(this).parents("tr").remove();
            }
        });
    });
    $( "#savePotluck" ).click(function() {
        let name,description,headcount;
        
        $("#table-potluck tbody tr").find('input[name="check-item"]').each(function(){
          $(this).closest('tr').find('td:eq(1)').each(function() {
            name = $(this).text().trim();
          });
          $(this).closest('tr').find('td:eq(2)').each(function() {
            description = $(this).text().trim();
          });
          $(this).closest('tr').find('td:eq(3)').each(function() {
            headcount = $(this).text().trim();
          });
          potluckItems.push({name: name, description: description, headcount: headcount, event_id: event_id});
        });
        });

    $(".add-row-gift").click(function(){
        var giftName = $("#gift-item").val();
        var giftUrl = $("#gift-url").val();
        var row = `<tr><td> <input type="checkbox" name="check-gift"></td><td> ${giftName} </td><td> ${giftUrl} </td></tr>`;
        $("#table-gift tbody").append(row);
    });
    $(".delete-row-gift").click(function(){
        $("#table-gift tbody").find('input[name="check-gift"]').each(function(){
            if($(this).is(":checked")){
              giftItems.splice($(this).parents("tr").index(), 1);
                $(this).parents("tr").remove();
            }
        });
    });
    $( "#saveGift" ).click(function() {
        let name, url;
    
        $("#table-gift tbody tr").find('input[name="check-gift"]').each(function(){
          $(this).closest('tr').find('td:eq(1)').each(function() {
            name = $(this).text().trim();
          });
          $(this).closest('tr').find('td:eq(2)').each(function() {
            url = $(this).text().trim();
          });
          giftItems.push({name: name, url: url, event_id: event_id});
        });
      });
        
    $( "#saveEventAsActive" ).on("click",function() {
      swal({
        title: "Are you sure?",
        text: "Once saved,you won't be able to Edit/Delete Potluck, Gift and Guest list. Are you sure you want to save this event ?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            document.location.replace('/dashboard');
            saveEvent();
        } else {
          swal("Event not saved.");
        }
      });
      })
});

  function saveEvent( event) {
      if (guest.length > 0) {
        saveGuestList();
      }
      if (potluckItems.length > 0 ) {
         savePotluckList();
      }
      if (giftItems.length > 0) {
         saveGiftList();
      }
}

function showDashboard() {
  document.location.replace('/Dashboard');
}
async function saveGuestList (event) {
  const response = await fetch('/api/guest', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body:  JSON.stringify({guest})
  });

  if (response.ok) {
  } else {
    swal("Something wrong happened, please try again!!");
  }
}

async function savePotluckList (event) {
  const response = await fetch('/api/potluck', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body:  JSON.stringify({potluckItems})
  });

  if (response.ok) {
  } else {
    swal("Something wrong happened, please try again!!");
  }
}

async function saveGiftList (event) {
  const response = await fetch('/api/gift', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body:  JSON.stringify({giftItems})
  });

  if (response.ok) {
  } else {
    swal("Something wrong happened, please try again!!");
  }
}
