async function commentFormHandler(event) {

    event.preventDefault();
    let currentdate = new Date().toLocaleDateString();

    let text = $('.comment-text').val();
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
            $('#comment-form').style.display = "block";
        }
    }
}
document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);

