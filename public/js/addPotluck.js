$(document).ready(function(){
    var items = [];

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
});