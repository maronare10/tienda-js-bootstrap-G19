async function renderCategories() {
  const response = await fetch('https://fakestoreapi.com/products/categories')
  // console.log(response)
  const categories = await response.json()
  // console.log(categories)

  const categoriesSection = document.querySelector('.categories')
  let categoryButtons = ''

  categories.forEach(category => {
    categoryButtons = categoryButtons + `<button class="btn btn-primary">${category}</button>`
  })

  // console.log(categoryButtons)

  categoriesSection.innerHTML = categoryButtons

  const buttons = document.querySelectorAll('button')

  buttons.forEach(button => {
    button.addEventListener('click', event => {
      // console.log(event.target.textContent)
      fetchProductsByCategory(event.target.textContent)
    })

    button.addEventListener('click', event => {
      button.classList.toggle("red")
      // console.log(event)
      // if (event.target.style.backgroundColor === '') {
      //   event.target.style.backgroundColor = "blue"
      // } else if (event.target.style.backgroundColor === 'blue') {
      //   event.target.style.backgroundColor = "green"
      // } else if (event.target.style.backgroundColor === 'green') {
      //   event.target.style.backgroundColor = "orange"
      // }
    })

  })
}

renderCategories()

async function fetchProductsByCategory(categoryName) {
  const response = await fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
  // console.log(response)
  const products = await response.json()
  console.log(products)

  const productsSection = document.querySelector('.products')
  let productElements = ''

  products.forEach(product => {
    productElements = productElements + `
    <div class="col">
      <article class="card h-100">
      <img class="card-img-top w-25"src="${product.image}" alt="imagen de producto">
      <div class="card-body">
        <h2 class="card-title fs-6">${product.title}</h2>
        <p class="card-text">S/ ${product.price}</p>
      </div>
      </article>
    </div>
        `
  })

            productsSection.innerHTML = productElements
}

