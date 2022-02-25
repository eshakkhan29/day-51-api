document.getElementById('show-comment').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => getComments(data))
})

const getComments = (comments) => {
    const commentSec = document.getElementById('comments-section');
    for(const comment of comments){
        // console.log(comment);
        const div = document.createElement('div');
        div.innerHTML = `
        <h3>${comment.name}, user ID: ${comment.id}</h3>
        <p>${comment.email}</p>
        <p>${comment.body}</p>
        `;
        div.classList.add('body');
        commentSec.appendChild(div);
    }
}