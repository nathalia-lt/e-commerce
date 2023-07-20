import { getFromStorage, setToStorage } from "../services/localStorage.js"


//model, eu coloco a logica, single responsibiity
//pq eu preciso ter acesso ao meu cart de varias partes do meu codigo, eu preciso colocar ele em objeto e exportar

let products = getFromStorage('e-commerce-cart') || []
console.log(products)
//eu vou pegar uma array dos produtos que eu quero
// [
//     {
//         id: 1,
//         title: 'Product 1',
//         price: 9.99,
//         image: 'https://via.placeholder.com/200x150'
//         quantity: 1,
//
//     }
// ]

function addItem(product) {
    // add items to products list
    //verificar se o produto com aquele id ja existe
    // se existir, aumentar a quantidade em 1
    // se nao existir, adicionar o produto na lista com a quantidade 1
    console.log(product)
    const hasProduct = products.filter(item => {
        return item.id === product.id
    })
    if (hasProduct[0]){
        const index = products.findIndex(item => item.id === product.id)
        products[index].quantity += 1
    } else {
        const toBeAdded = {...product, quantity: 1}
        products.push(toBeAdded)    
    }
    setToStorage('e-commerce-cart', products)
    console.log(products)
    // update localstorage
}

function countItems(){
    const count = products.reduce((acc, item) => {
        return acc + item.quantity
    }, 0)
    return count
}

function removeItem(product) {
    // remove items from products list
    // update localstorage
}

function clearCart() {}


function getItems() {
    return products
}

let cart = {
    addItem,
    removeItem,
    clearCart,
    getItems,
    countItems
}

export default cart


// class Cart {
//     products = []

//     constructor() {
//         this.products = getFromStorage('e-commerce-cart')
//     }
//
//     function addItem(product) {
        // const hasProduct = products.filter(item => {
        //     return item.id === product.id
        // })
        // if (hasProduct[0]){
        //     const index = products.findIndex(item => item.id === product.id)
        //     products[index].quantity += 1
        // } else {
        //     const toBeAdded = {...product, quantity: 1}
        //     products.push(toBeAdded)    
        // }
        // setToStorage('e-commerce-cart', products)
        // console.log(products)
//    }
// }

// const cart = new Cart()