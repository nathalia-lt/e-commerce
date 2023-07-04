
//cart.js e meu controlador
// sem o curl brackets pq eu fiz o export default
import products from '../products/products.js';
import cart from './cart-model.js'

async function initFrontPage() {
    
    products.setCart(cart)
    products.productsRenderCartPage(cart.getItems())

}
initFrontPage()

