var guest = [];
var potluckItems = [];
var event_id = window.location.toString().split('/')[
  window.location.toString().split('/').length - 1
];    
event_id = event_id.replace('?','');
  $(document).ready(function() {
    alert("in ");

    $(".add-row-people").click(function(){
        var name = $("#people-name").val();
        var email = $("#people-email").val();
        var row = `<tr><td><input type='checkbox' name='check-people'></td><td>  ${name} </td><td> ${email} </td></tr>`;
        $("#table-people tbody").append(row);
    });
    $(".delete-row-people").click(function(){
        alert("delete pople");
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
                name = $(this).text();
          });
          $(this).closest('tr').find('td:eq(2)').each(function() {
                email = $(this).text();
          });
          guest.push({name: name, email: email, event_id: event_id });
        });
        console.log("people: " + guest[0].email);
      });

    
      $(".add-row-potluck").click(function(){
        var item = $("#item1").val();
        var qty = $("#quantity").val();
        var description = $("#description").val();
        var row = `<tr><td><input type='checkbox' name='check-item'></td><td>  ${item} </td><td> ${description} </td><td> ${qty} </td><td> ${qty} </td></tr>`;
        $("#table-potluck tbody").append(row);
    });
    
    // Find and remove selected table rows
    $(".delete-row-potluck").click(function(){
        $("#table-potluck tbody").find('input[name="check-item"]').each(function(){
            if($(this).is(":checked")){
              alert("deleting :" + $(this).parents("tr").index())
                potluckItems.splice($(this).parents("tr").index(), 1);
                $(this).parents("tr").remove();
            }
        });
    });
    
    $( "#savePotluck" ).click(function() {
        let name,description,headcount;
        
        $("#table-potluck tbody tr").find('input[name="check-item"]').each(function(){
          $(this).closest('tr').find('td:eq(1)').each(function() {
            name = $(this).text();
          });
          $(this).closest('tr').find('td:eq(2)').each(function() {
            description = $(this).text();
          });
          $(this).closest('tr').find('td:eq(3)').each(function() {
            headcount = $(this).text();
          });
          alert("event " + event_id);

          potluckItems.push({name: name, description: description, headcount: headcount, event_id: event_id});
        });
        });
    
    $( "#saveEventAsActive" ).on("click",function() {
        if (guest.length > 0) {
          alert(guest);

          saveGuestList();
        }
        if (potluckItems.length > 0 ) {
          alert(potluckItems[0].headcount);
          savePotluckList();
        }
    })
});

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
    alert("Guest added");
  } else {
    alert("Something went wrong ,please try again!!");
  }
}

async function savePotluckList (event) {
  alert("in save potluck");

  const response = await fetch('/api/potluck', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body:  JSON.stringify({potluckItems})
  });

  if (response.ok) {
    alert("Potluck items added");
  } else {
    alert("Something went wrong ,please try again!!");
  }
}
