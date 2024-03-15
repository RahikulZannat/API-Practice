// function loadUsers(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data => userData(data))
// }
// function userData(data){
//     const ul = document.getElementById('users');
//     for(const user of data){
//         console.log(data);
//         const li = document.createElement('li');
//         li.innerText = user.email;
//         ul.appendChild(li);
//     }
// }

// function loadPosts(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => postLoad(data))
// }

// function postLoad(posts){
//     const ul = document.getElementById('post');
//     for(const post of posts){
//         const li = document.createElement('li');
//         li.innerText= post.title;
//         ul.appendChild(li);
//     }
// }

// function loadCountry(){
//     fetch('https://restcountries.com/v3.1/all')
//     .then(response => response.json())
//     .then(data => countries(data))
// }

// function countries(countryData){
//     const countryDiv = document.getElementById('country');
//     for(const country of countryData){
//         console.log(country.name);
//         const h3 = document.createElement('h3');
//         h3.innerText = country.name.common; 
//         countryDiv.appendChild(h3);
//     }
// }

const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then (res => res.json())
    .then(data => showResult(data.meals))
}

const showResult = meals => {
    const resultShow = document.getElementById('show-result');
    meals.forEach(meal =>{
        // console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `         
         <div onclick="loadDetails(${meal.idMeal})" class="card">
             <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                 <div class="card-body">
                     <h5 class="card-title">${meal.strMeal}</h5>
                     <p class="card-text">${meal.strInstructions.slice(0,300)}</p>
                 </div>
         </div>`;
         resultShow.appendChild(div);
    })
}

const loadDetails = mealId => {
    // console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch (url)
    .then (res => res.json())
    .then (data => displayDetail  (data.meals[0]))
}

const displayDetail = meal =>{
    console.log(meal);
    const showDetails = document.getElementById('show-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = ` <div class="card mx-auto" style="width: 18rem;">
                        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                            <div class="card-body">
                                 <h5 class="card-title">${meal.strMeal}</h5>
                                 <p class="card-text">${meal.strInstructions.slice(0,300)}</p>
                            </div>
                            <ul class="list-group list-group-flush">
                            <li class="list-group-item">${meal.strIngredient1}</li>
                            <li class="list-group-item">${meal.strIngredient2}</li>
                            <li class="list-group-item">${meal.strIngredient3}</li>
                            <li class="list-group-item">${meal.strIngredient4}</li>
                            <li class="list-group-item">${meal.strIngredient5}</li>
                            <li class="list-group-item">${meal.strIngredient6}</li>
                            </ul>
                         <div class="card-body">
                            <a href="${meal.strSource}" class="card-link">Source</a>
                            <a href="${meal.strYoutube}" class="card-link">Youtube</a>
                         </div>
                        </div>`;
    showDetails.appendChild(div);
}