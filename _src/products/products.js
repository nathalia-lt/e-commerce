import categoriesImages from './data.js'


const addedItemToCart = new CustomEvent('add-item-to-cart')

let cart = null
//eu to recebendo o obj do app e colocando na variavel cart
//eu ja estou trazendo o cart para os produtos


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

function productsRenderCategoryPage(productsCategory, category) {

    const container = document.getElementById('products-container')
    console.log(container)
    console.log(productsCategory)
    productsCategory.forEach(product => {
        container.innerHTML += productsTemplateCategory(product, category)
    });

    setTimeout(addEventListenerToCartBtns, 50)
}

function productsTemplateCategory(product, category) {
    return `<div class="${category}-card">
    <img width="40px" src="${product.image}" alt='${product.name}' />
    <div class="wrapper">
    <p class="description">${product.title}</p>
    <p class="rating">${product.rating.rate} ⭐</p>
    <p class="price">$: ${product.price}</p>
    </div>
    ${addToCartButtonTemplate(product)}
</div>`
}


function productsRenderFrontPage(allProducts, random = true) {

    const filteredProducts = allProducts.filter(item => item.category !== 'electronics')
    const productsToRender = random ? randomItems(filteredProducts) : filteredProducts
    const productsContainer = document.getElementById('products-container')
    productsContainer.innerHTML = ''
    productsToRender.forEach(product => {
        productsContainer.innerHTML += productTemplateFrontPage(product)
    })
    //a funcao que esta dentro vai ser chamada depois do tempo.
    setTimeout(addEventListenerToCartBtns, 50)
}

function productsRenderCartPage(cartItems, total) {
    console.log(cartItems)

    const productsContainer = document.getElementById('cart-products-container')
    //tenho que limpar o container antes de desenhar o container novamente
    productsContainer.innerHTML = ''
    cartItems.forEach(product => {
        productsContainer.innerHTML += productTemplateCartPage(product)
    })

    productsContainer.innerHTML += `<div class="total-cart">${total}</div>`

    setTimeout(() => {
        addDecreaseQuantityEventToBtns()
        addIncreaseQuantityEventToBtns()
    }, 50)
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
                <button class="decrease-btn" data-id="${product.id}">
                    <svg class="icon plus" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                    </svg>
                </button>
                <p class="quantity-cart"> ${product.quantity}</p>
                <button class="increase-btn" data-id="${product.id}" >
                    <svg class="icon minus" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
            </div>
                <p>Total: $ ${total}</p>
            </div>
        </div>`
}

function addToCartButtonTemplate(product) {
    return `
            <button id="${product.id}" class="add-btn" data-id="${product.id}" data-image="${product.image}" data-title="${product.title}" data-price="${product.price}">Add to Cart
            </button>
    `
}


function productTemplateFrontPage(product) {
    return `
        <div class="product-card">
            <img width="40px" src="${product.image}" alt='${product.title}' />
            <p class="description">${product.title}</p>
            <p>$: ${product.price}</p>
            ${addToCartButtonTemplate(product)}
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
            const countItems = document.getElementById('cart-item-count')

            //eu coloco o data set pq eu to enviando todos os datas que tem no no meu button, os tres pontinhos desestrutura meus dados e manda em formato de the key value
            cart.addItem({ ...btnAddCart.dataset })
            if (countItems) {
                console.log(countItems)
                countItems.dispatchEvent(addedItemToCart)
            }
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


//Como eu rederizo os meus produtos aqui, é aqui que eu tenho que colocar a acao do botao aqui, que e o event listener.

function addDecreaseQuantityEventToBtns() {
    //eu tenho que chamar essas funcoes, eu vou chamar depois que eu renderizar o templete e pre isso vou precisar do settimeout.
    const decreaseBtns = document.querySelectorAll('.decrease-btn')
    decreaseBtns.forEach(decreaseBtn => {
        decreaseBtn.addEventListener('click', () => {
            const countItems = document.getElementById('cart-item-count')
            // aqui no dataset, eu nao preciso incluir no botao, ne? 
            // eu ja sei que tem uma id pq ta na minha variavel products no meu localstorage, right? SIIIIM
            const idToBeDecrease = decreaseBtn.dataset.id
            //abaixo eu estou alterando os meus elementos do carrinho
            cart.decreaseQuantity(idToBeDecrease)
            productsRenderCartPage(cart.getItems(), cart.getTotal())
            countItems.dispatchEvent(addedItemToCart)
        })
    })
}

function addIncreaseQuantityEventToBtns() {
    const increaseBtns = document.querySelectorAll('.increase-btn')

    increaseBtns.forEach(increaseBtn => {
        increaseBtn.addEventListener('click', () => {
            const countItems = document.getElementById('cart-item-count')
            const idToBeIncrease = increaseBtn.dataset.id
            cart.increaseQuantity(idToBeIncrease)
            //agora eu tennho que renderizar a minha pagina do cart para aparecer a atualizacao
            //pra isso eu importo normalmente? da pagina de produtos pra essa?
            //aqui eu faco products. para chamar minha variavel de products list? seria isso?
            productsRenderCartPage(cart.getItems(), cart.getTotal())
            countItems.dispatchEvent(addedItemToCart)
        })
    })

}


const products = {
    categoriesRender,
    setCart,
    productsRenderCartPage,
    productsRenderFrontPage,
    productsRenderCategoryPage,
}
export default products
