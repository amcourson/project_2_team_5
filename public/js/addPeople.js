$(document).ready(function(){
    var people = [];

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
});