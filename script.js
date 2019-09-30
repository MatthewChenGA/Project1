const apikey = "ed061ade7bf94c1d86599a78fb325fe8"
const url = `https://api.spoonacular.com/recipes/random?apiKey=${apikey}`

const input = document.querySelector("input")
const button = document.querySelector("button")


button.addEventListener("click", async () => {
  const response = await axios.get(`${url}`)
  console.log(response.data);
})
