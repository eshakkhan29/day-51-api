const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountrys(data))
}
loadCountry();

const displayCountrys = countrys => {
    const mainDiv = document.getElementById('countrys');
    for(const country of countrys){
        const div = document.createElement('div');
        div.innerHTML = `
            <h2> Country name : ${country.name.common}</h2>
            <h3> Capital name : ${country.capital}</h3>
            <button onclick ="loadDetailesData('${country.name.common}')">See details</button>
        `;
        mainDiv.classList.add('country');
        mainDiv.appendChild(div);
    }
}

const loadDetailesData = (name) =>{
    fetch(`https://restcountries.com/v2/name/${name}`)
    .then(res => res.json())
    .then(data => seeDetais(data[0]))
}

const seeDetais = (country) => {
    const countryDetails = document.getElementById('details');
    countryDetails.innerHTML = `
        <img src="${country.flags.png}"></img>
        <h2> Country : ${country.name}</h2>
        <h3> Capital : ${country.capital}</h3>
        <h3> Region  : ${country.region}</h3>
    `;
    countryDetails.classList.add('country-details');
}