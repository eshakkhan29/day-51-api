const getSearchInput = () => {
    const inputValue = document.getElementById('input-field');
    const input = inputValue.value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
    .then(res => res.json())
    .then(data => showFood(data.meals))
}

const showFood = (food) => {
    const foodShow = document.getElementById('food-show');
    food.forEach(food => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div onclick="viewFullDitails('${food.idMeal}')" class="card h-100">
            <img src="${food.strMealThumb}" class="card-img-top" >
            <div class="card-body">
              <h5 class="card-title">${food.strMeal}</h5>
              <p class="card-text">${food.strInstructions.slice(0, 150)}</p>
            </div>
        </div>
        `;
        div.classList.add('col')
        foodShow.appendChild(div);
    });
}

const viewFullDitails = (foodid) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodid}`)
    .then(res => res.json())
    .then(data => foodDitails(data.meals[0]))
}

const foodDitails = (food) => {
    console.log(food);
    const foodDetails = document.getElementById('food-details');
    foodDetails.innerHTML = '';
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card mb-3">
            <img src="${food.strMealThumb}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${food.strMeal}</h5>
                <h5 class="card-title">in gradiant</h5>
                <p class="card-text">${food.strInstructions}</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        `;
        foodDetails.appendChild(div);
}
