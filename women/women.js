import http from "../services/httpService.js";
import products from "../products/products.js";


async function women(){
    try{
        const womenProducts = await http.getAll(encodeURI("https://fakestoreapi.com/products/category/women's clothing"))
        products.productsRender(womenProducts, false)
        console.log(womenProducts)
    } catch (error) {
        console.log(error.message);
    }
}



women()
