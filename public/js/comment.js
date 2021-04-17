$(document).ready(function() {
    $( "#add-comment" ).on("click",function() {
        commentFormHandler();
      })
});

async function commentFormHandler() {
    let commentdate = new Date().toLocaleDateString();
    let commenttext = $('.comment-text').val();
    const event_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    if (commenttext) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ event_id, commenttext, commentdate }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.reload();
        } else {
            swal("Something wrong happened, please try again!!");
            $('#comment-form').style.display = "block";
        }
    }
}
