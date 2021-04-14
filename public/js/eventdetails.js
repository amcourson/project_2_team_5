var guest = [];
var event_id;

  $(document).ready(function() {  
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
       event_id = window.location.toString().split('/')[
          window.location.toString().split('/').length - 1
        ];    
        event_id = event_id.replace('?','');

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

      $( "#saveEventAsActive" ).on("click",function() {
        if (guest) {
          alert(JSON.stringify(guest[0].event_id));
          saveGuestList();
        }
    })
});

async function saveGuestList (event) {

  const response = await fetch('/guest', {
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
