fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => stePost(data));

function stePost(posts) {
    // console.log(posts);
    const divPost = document.getElementById('posts');
    for(const post of posts){
        console.log(post.title);
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        h3.innerText = `${post.title}`;
        p.innerText = `${post.body}`;
        divPost.appendChild(h3);
        divPost.appendChild(p);
    }
    
}

