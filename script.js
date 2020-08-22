// DOM Elements
const search = document.getElementById("search"),
    submit = document.getElementById("submit"),
    random  = document.getElementById("random"),
    mealsEl = document.getElementById("meals"),
    resultText = document.getElementById("result-text"),
    single_mealEl = document.getElementById("single-meal");

//Event listeners
submit.addEventListener('submt', searchMeal);

// Search meal and fetch from API
function searchMeal(){
    e.preventDefault();

    //Clear single meal
    single_mealEl.innerHTML = ''

    //Get search term
    const term = search.value;

  // Check for empty
  if (term.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        resultHeading.innerHTML = `<h2>Search results for '${term}':</h2>`;

        if (data.meals === null) {
          resultHeading.innerHTML = `<p>There are no search results, please try again.<p>`;
        } else {
          mealsEl.innerHTML = data.meals
            .map(
              meal => `
            <div class="meal">
              <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
              <div class="meal-info" data-mealID="${meal.idMeal}">
                <h3>${meal.strMeal}</h3>
              </div>
            </div>
          `
            )
            .join('');
        }
      });
    // Clear search text
    search.value = '';
  } else {
    alert('Please enter a search term');
  }
}  