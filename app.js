import products from './products/products.js';
import http from './services/httpService.js'
import testimonials from './testimonials/testimonials.js';

console.log(http);
console.log(products);
//App vai ser meu controlador. Responsavel por chamar os outros arquivos
//fazendo fetch e chamando para renderizar
// let allProducts = [];

async function initFrontPage() {
    try{
        const categories = await http.getAll('https://fakestoreapi.com/products/categories')
        products.categoriesRender(categories)
        //aqui eu estou colocando esse fetch ja na minha array
        const productsList = await http.getAll('https://fakestoreapi.com/products')
        //productsRender(allProducts)
        products.productsRender(productsList)
        // const oneProduct = await getOne('https://fakestoreapi.com/products', 5)
        // outro fetch
        testimonials.render()

    } catch (error) {
        console.log(error.message);
    }
}
initFrontPage()