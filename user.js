


function getUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => set(data))
}

function set(users) {
    const section = document.getElementById('user-section');
   for(const user of users){
       const thikanaStreet = user.address.street;
       const thikanaCity = user.address.city;
       const div = document.createElement('div');
       div.innerHTML = `
           <h3>${user.name}</h3>
           <p> user no: ${user.id}</p>
           <h4>${user.email}</h4>
           <h4>${user.phone}</h4>
           <h4>${thikanaStreet}, ${thikanaCity}</h4>
       `;
       div.classList.add('user')
       section.appendChild(div);
   }
}


const  randomUsers = () => {
    fetch('https://randomuser.me/api/?results=15')
    .then(res => res.json())
    .then(data => getUsers(data))
}

const getUsers = users => {
    const usersData = users.results;
    const randomUser = document.getElementById('random-user');
    for(const user of usersData){
        const div = document.createElement('div');
        div.innerHTML = `
        <img src="${user.picture.large}">
            <h3>Name : ${user.name.first} ${user.name.last}</h3>
            <h4>${user.email}</h4>
            <h4>${user.phone}</h4>
        `;
        div.classList.add('user');
        randomUser.classList.add('random-User');
        randomUser.appendChild(div);
    }

}

const kanyeApi = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => quote(data))
}

const quote = (quote) => {
    const quoteSection = document.getElementById('kanye');
    const p = document.createElement('p');
    p.innerText = quote.quote;
    quoteSection.appendChild(p);
}
