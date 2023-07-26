import http from "../_src/services/httpService.js";
import products from "../_src/products/products.js";
import header from '../_src/partials/header.js'
import cart from '../_src/cart/cart-model.js'
import cartView from '../_src/cart/cartView.js'


async function women() {

    const headerContainer = document.querySelector('header')
    headerContainer.innerHTML = header()
    
    setTimeout(async () => {
        cartView.init(products, cart)
        products.setCart(cart)
        // encodeURI, e usado para juntar os espacos que tem nesse http
        try {
            const womenProducts = await http.getAll(encodeURI("https://fakestoreapi.com/products/category/women's clothing"))
            // products.productsRender(menProducts, false)
            console.log(womenProducts)
            products.productsRenderCategoryPage(womenProducts, 'women')
    
        } catch (error) {
            console.log(error.message);
        }
    }, 100)
}

women()


