// sem o curl brackets pq eu fiz o export default
import products from './products/products.js';
import http from './services/httpService.js'
import testimonials from './testimonials/testimonials.js';
import cart from './cart/cart-model.js'
import cartView from './cart/cartView.js'

console.log('http', http); //aqui eu vejo o que eu estou exportando do meu arquivo http, no caso o getAll ans getOne
console.log(products);
//App vai ser meu controlador. Responsavel por chamar os outros arquivos
//fazendo fetch e chamando para renderizar
// let allProducts = [];


async function initFrontPage() {
    //eu to mandando o objeto cart para o project, torno ele acessivel para o project. vou no project e crio o a funcao
    cartView.init(products, cart)
    
    products.setCart(cart)
    try{
        //aqui eu estou colocando esse fetch ja na minha array
        const productsList = await http.getAll('https://fakestoreapi.com/products')
        products.productsRender(productsList)
        testimonials.render()

    } catch (error) {
        console.log(error.message);
    }
}
initFrontPage()