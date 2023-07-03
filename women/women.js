import http from "../services/httpService.js";
import products from "../products/products.js";


async function women(){
    // encodeURI, e usado para juntar os espacos que tem nesse http
    try{
        const womenProducts = await http.getAll(encodeURI("https://fakestoreapi.com/products/category/women's clothing"))
        products.productsRender(womenProducts, false)
        console.log(womenProducts)
    } catch (error) {
        console.log(error.message);
    }
}

    // function womenTemplate(womenProduct){
    //     return `<div class="women-card">
    //     <img width="40px" src="${womenProduct.image}" alt='${womenProduct.name}' />
    //     <p>${womenProduct.title}</p>
    //     <p>${womenProduct.rating}</p>
    //     <p>$: ${womenProduct.price}</p>
    // </div>`
    // }

    // function womenProductsRender(womenClothes){
    //     const womenContainer = document.getElementById('women-container')
    //     womenClothes.forEach(product => {
    //         womenContainer.innerHTML += womenTemplate(product)
    //     });
    // }


women()

// const women = {

// }

// export default women
