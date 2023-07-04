import categoriesImages from './data.js'

    let cart = null
    //eu to recebendo o obj do app e colocando na variavel cart
    function setCart(obj){
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
        <img src="${categoriesImages[index]}" alt='${category}'/>
        <h3>${category}</h3>
        </div>
        `
    }
    
    function productsRender(allProducts, random=true){
        const productsToRender = random ? randomItems(allProducts) : allProducts
        const productsContainer = document.getElementById('products-container')
        productsToRender.forEach(product => {
            productsContainer.innerHTML += productTemplate(product)
        })
        //a funcao que esta dentro vai ser chamada depois do tempo.
        setTimeout(addEventListenerToCartBtns, 50)             
        }
    
    function productsRenderCartPage(cartItems){
        const productsContainer = document.getElementById('products-container')
        cartItems.forEach(product => {
            productsContainer.innerHTML += productTemplateCartPage(product)
        })
    }

    function productTemplateCartPage(product){
        const total = parseFloat(product.quantity * product.price).toFixed(2)

        return`
        <div class="product-card">
            <img width="40px" src="${product.image}" alt='${product.title}' />
            <p>${product.title}</p>
            <p>$: ${product.price}</p>
            <p>Qauntity:${product.quantity}</p>
            <p>Total: $ ${total}</p>
        </div>`
    } 
    

    function productTemplate(product){
        return`
        <div class="product-card">
            <img width="40px" src="${product.image}" alt='${product.title}' />
            <p>${product.title}</p>
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

    function addEventListenerToCartBtns(){
            const btnsAddCart = document.querySelectorAll('.add-btn')
            btnsAddCart.forEach(btnAddCart => {
                btnAddCart.addEventListener('click', () => {
                    //eu coloco o data set pq eu to enviando todos os datas que tem no no meu button, os tres pontinhos desestrutura meus dados e manda em formato de the key value
                    cart.addItem({...btnAddCart.dataset})
                })
            })
    }
    



    
    function randomItems(list, quantity = 4){
        const size = list.length
        let itemIndex = [];
    
        for(let i = 0; i < quantity; i++) {
            itemIndex.push(Math.floor(Math.random()* size));
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
