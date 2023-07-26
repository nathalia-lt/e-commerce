// aqui eu import o meu http, que e onde eu fiz o fetch, para poder usar aqui nesse arquivo
import http from "../_src/services/httpService.js";
import products from "../_src/products/products.js";
import header from '../_src/partials/header.js'
import cart from '../_src/cart/cart-model.js'
import cartView from '../_src/cart/cartView.js'


// async function accessories(){
//     // encodeURI, e usado para juntar os espacos que tem nesse http
//     try{
//         const jewelery = await http.getAll(encodeURI("https://fakestoreapi.com/products/category/jewelery"))
//         // products.productsRender(menProducts, false)
//         jeweleryRender(jewelery, false)
//         console.log(jewelery)
//     } catch (error) {
//         console.log(error.message);
//     }
// }

async function accessories() {

    const headerContainer = document.querySelector('header')
    headerContainer.innerHTML = header()
    
    setTimeout(async () => {
        cartView.init(products, cart)
        products.setCart(cart)
        // encodeURI, e usado para juntar os espacos que tem nesse http
        try {
            const jeweleryProducts = await http.getAll(encodeURI("https://fakestoreapi.com/products/category/jewelery"))
            // products.productsRender(menProducts, false)
            console.log(jeweleryProducts)
            products.productsRenderCategoryPage(jeweleryProducts, 'jewelery')
    
        } catch (error) {
            console.log(error.message);
        }
    }, 100)
}

accessories()