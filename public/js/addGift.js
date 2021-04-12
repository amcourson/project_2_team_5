$(document).ready(function(){
    var gift = [];

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
});