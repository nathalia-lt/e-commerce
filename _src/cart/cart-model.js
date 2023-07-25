import { getFromStorage, setToStorage } from "../services/localStorage.js"


//model, eu coloco a logica, single responsibiity
//pq eu preciso ter acesso ao meu cart de varias partes do meu codigo, eu preciso colocar ele em objeto e exportar

// let products: armazena os meus produtos que estao no storage
//cada vez que eu altero a lista eu altero na memoria e no storage.
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
    // em algum momento deletei o que estava dentro desse local storage, vou colocar o o que eu acho que é
    persist()
    console.log(products)
    // update localstorage
}

function countItems(){
    const count = products.reduce((acc, item) => {
        return acc + item.quantity
    }, 0)
    return count
}


function removeItem(id) {
    // remove items from products list
    products = products.filter(product => product.id !== id)
    // update localstorage
    persist()
}

function clearCart() {}


function getItems() {
    return products
}

// ------------------------------------------------------
// aqui comeco meus 'devaneios' hehehe


function getTotal() {
    let sum = 0
products.forEach(item => {
    //parseFloat para ser um numero e nao concatenar string
            //parseFloat(string)
    sum += parseFloat(item.price) * item.quantity
})
//quando eu uso to toFixed retorna uma string
return sum.toFixed(2)
}

function getItemsCount() {
    let total = 0
    this.items.forEach(item =>{
        total += item.quantity
    })
    return total
}



// nao tenho certeza se essa logica vai aqui.
// increase and decrease quantity.

//so o cart model conhece essa funcao persistir, e um metodo privado
function persist() {
    setToStorage('e-commerce-cart', products)
}

function decreaseQuantity(id){
    const index = products.findIndex(item => item.id === id)
    if (products[index].quantity > 1){
        products[index].quantity -= 1
        persist()
    } else {
        removeItem(id)
    }

}


function increaseQuantity(id){
    const index = products.findIndex(item => item.id === id)
    products[index].quantity += 1
    persist()
}



let cart = {
    addItem,
    removeItem,
    clearCart,
    getItems,
    countItems,
    decreaseQuantity,
    increaseQuantity,
    getTotal
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