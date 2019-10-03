const apikey = "&apiKey=ed061ade7bf94c1d86599a78fb325fe8"
const ingredientUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=`
const randomURL = `https://api.spoonacular.com/recipes/random?number=`
const input = document.querySelector("input")
const button = document.querySelector("button")
const display = document.querySelector("#info")

const displayRecipes = (array) => {
  display.innerHTML = ''
  array.forEach((recipe) => {
    const recipeDiv = document.createElement("div");
    recipeDiv.innerHTML = `
  <p>${recipe.title}</p>
  <img src=${recipe.image} />
  <p>Ingredients:<p>`
    console.log(recipe.usedIngredients);
    recipe.usedIngredients.forEach((ingredient) => {
      if (recipe.usedIngredients.length !== 0) {
        const ingredientP = document.createElement('p')
        ingredientP.textContent = `${ingredient.original}`
        recipeDiv.append(ingredientP)
      } else if (recipe.usedIngredients.length === 0) {
        recipe.missedIngredients.forEach((ingredient) => {
          const ingredientP = document.createElement('p')
          ingredientP.textContent = `${ingredient.original}`
          recipeDiv.append(ingredientP)
        })
      } else if (recipe.usedIngredients.length !== 0 && recipe.missedIngredients.length !== 0) {
        const ingredientP = document.createElement('p')
        ingredientP.textContent = `${ingredient.original}`
        recipeDiv.append(ingredientP)
        recipe.missedIngredients.forEach((ingredient) => {
          const ingredientP = document.createElement('p')
          ingredientP.textContent = `${ingredient.original}`
          recipeDiv.append(ingredientP)
        }
        )
      }
    })
    display.append(recipeDiv);
  });
}


button.addEventListener("click", async () => {
  const response = await axios.get(`${ingredientUrl}${input.value}${apikey}`)
  let recipes = response.data
  displayRecipes(recipes)
  console.log(recipes)
});

