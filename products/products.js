import categoriesImages from './data.js'

const countItems = document.getElementById('cart-item-count')
const addedItemToCart = new CustomEvent('add-item-to-cart')

let cart = null
//eu to recebendo o obj do app e colocando na variavel cart
function setCart(obj) {
    cart = obj
}


function categoriesRender(categories) {
    const categoriesContainer = document.getElementById('categories-container')
    categories.forEach((category, index) => {
        categoriesContainer.innerHTML += categoryTemplate(category, index)
    })
}

function categoryTemplate(category, index) {
    return `
        <div class='category-card'>
        <img class="img-category" src="${categoriesImages[index]}" alt='${category}'/>
        <h3>${category}</h3>
        </div>
        `
}

function productsRender(allProducts, random = true) {

    const filteredProducts = allProducts.filter(item => item.category !== 'electronics')
    const productsToRender = random ? randomItems(filteredProducts) : filteredProducts
    const productsContainer = document.getElementById('products-container')
    productsToRender.forEach(product => {
        productsContainer.innerHTML += productTemplate(product)
    })
    //a funcao que esta dentro vai ser chamada depois do tempo.
    setTimeout(addEventListenerToCartBtns, 50)
}

function productsRenderCartPage(cartItems) {
    console.log(cartItems)
    const productsContainer = document.getElementById('cart-products-container')
    cartItems.forEach(product => {
        productsContainer.innerHTML += productTemplateCartPage(product)
    })
}

function productTemplateCartPage(product) {
    const total = parseFloat(product.quantity * product.price).toFixed(2)

    return `
        <div class="product-card-cart">
        <div class="wrapper">
            <img width="40px" src="${product.image}" alt='${product.title}'/>
            <p>${product.title}</p>
        </div>
        <div class="wrapper-info-cart">
        <p>$:${product.price}</p>
        <div class="wrapper-btn">
        <button class="decrease-btn">
        <svg class="icon plus" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
        </svg>
        </button>
        <p class="quantity-cart"> ${product.quantity}</p>
        <button class="increase-btn">
        <svg class="icon minus" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        </button>
        </div>
            <p>Total: $ ${total}</p>
            </div>
        </div>`
}


function productTemplate(product) {
    return `
        <div class="product-card">
            <img width="40px" src="${product.image}" alt='${product.title}' />
            <p class="description">${product.title}</p>
            <p>$: ${product.price}</p>
            <button id="${product.id}" class="add-btn" data-id="${product.id}" data-image="${product.image}" data-title="${product.title}" data-price="${product.price}">Add to Cart
            </button>
        </div>`
}

// add to cart function
//sempre que eu preciso adicionar alguma coisa ao carrinho eu procuro pela id, ne? ai eu coloco um data-key = value no button
//nao tenho certeza se vou precisar de timeout. quando eu preciso? onde eu coloco? acho que preciso pq tenho que esperar carregar meu html

//temos que criar um local storage pro cart
//o ideal seria ter um objeto cart, que tem um metodo 'addItem', que recebe os dados do produto como parametro

function addEventListenerToCartBtns() {
    const btnsAddCart = document.querySelectorAll('.add-btn')
    btnsAddCart.forEach(btnAddCart => {
        btnAddCart.addEventListener('click', () => {
            console.log(countItems)

            //eu coloco o data set pq eu to enviando todos os datas que tem no no meu button, os tres pontinhos desestrutura meus dados e manda em formato de the key value
            cart.addItem({ ...btnAddCart.dataset })
            countItems.dispatchEvent(addedItemToCart)
        })
    })
}


function randomItems(list, quantity = 4) {
    const size = list.length
    let itemIndex = [];

    for (let i = 0; i < quantity; i++) {
        itemIndex.push(Math.floor(Math.random() * size));
    }
    const selectedItems = list.filter((item, index) => {
        return itemIndex.includes(index)
    })
    return selectedItems
}
const products = {
    categoriesRender,
    productsRender,
    setCart,
    productsRenderCartPage
}
export default products
