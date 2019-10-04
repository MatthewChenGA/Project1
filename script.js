const apikey = "&apiKey=84349fc25f7c47eebeb8821f693e149c"
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
    recipe.usedIngredients.forEach((ingredient) => {
      if (recipe.usedIngredients !== 0) {
        const ingredientP = document.createElement('p')
        ingredientP.textContent = `${ingredient.original}`
        recipeDiv.append(ingredientP)
      } else if (recipe.usedIngredients === 0) {
        recipe.missedIngredients.forEach((ingredient) => {
          const ingredientP = document.createElement('p')
          ingredientP.textContent = `${ingredient.original}`
          recipeDiv.append(ingredientP)
        })
      } else if (recipe.usedIngredients !== 0 && recipe.missedIngredients !== 0) {
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


// const displayRecipes = (array) => {



//   display.innerHTML = ''
//   array.forEach((recipe) => {

//     const recipeDiv = document.createElement("div");
//     recipeDiv.innerHTML = `
//   <p>${recipe.title}</p>
//   <img src=${recipe.image} />
//   <p>Ingredients: <p>`
//     // console.log(recipe.usedIngredients);

//     recipe.usedIngredients.forEach((ingredient) => {

//       if (recipe.usedIngredients.length !== 0) {
//         const ingredientP = document.createElement('p')
//         ingredientP.textContent = `${ingredient.original}`
//         recipeDiv.append(ingredientP)
//       } else if (recipe.usedIngredients.length === 0) {
//         recipe.missedIngredients.forEach((ingredient) => {
//           const ingredientP = document.createElement('p')
//           ingredientP.textContent = `${ingredient.original}`
//           recipeDiv.append(ingredientP)
//         })
//       } else if (recipe.usedIngredients.length !== 0 && recipe.missedIngredients.length !== 0) {
//         const ingredientP = document.createElement('p')
//         ingredientP.textContent = `${ingredient.original}`
//         recipeDiv.append(ingredientP)
//         recipe.missedIngredients.forEach((ingredient) => {
//           const ingredientP = document.createElement('p')
//           ingredientP.textContent = `${ingredient.original}`
//           recipeDiv.append(ingredientP)
//         })
//       }
//     })
//     display.append(recipeDiv);
//   });
// }


// button.addEventListener("click", async () => {
//   const response = await axios.get(`${ingredientUrl}${input.value}${apikey}`)
//   let recipes = response.data

//   console.log(recipes)
//   const mapped1 = recipes.map(rec1 => rec1)
//   console.log(mapped1)
//   for (i = 0; i < mapped1.length; i++) {
//     const mapped = recipes.map(rec => recipes[i])
//     console.log(mapped)
//     return mapped
//   }



//   for (i = 0; i < recipes; i++) {
//     console.log(recipes)
//   }
//   displayRecipes(recipes)


// });


// function test() {
//   if (let i = 0; i < response.length; i++) {
//     console.log("test")
//   }
// }