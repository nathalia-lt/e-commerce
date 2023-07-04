// aqui eu import o meu http, que e onde eu fiz o fetch, para poder usar aqui nesse arquivo
import http from "../services/httpService.js";
import products from "../products/products.js";


async function men(){
    // encodeURI, e usado para juntar os espacos que tem nesse http
    try{
        const menProducts = await http.getAll(encodeURI("https://fakestoreapi.com/products/category/men's clothing"))
        // products.productsRender(menProducts, false)
        menRender(menProducts, false)
        console.log(menProducts)
    } catch (error) {
        console.log(error.message);
    }
}

function menTemplate(menProduct){
    return `<div class="women-card">
    <img width="40px" src="${menProduct.image}" alt='${menProduct.name}' />
    <p>${menProduct.title}</p>
    <p>${menProduct.rating.rate} ⭐</p>
    <p>$: ${menProduct.price}</p>
</div>`
}

function menRender(menClothes){
    const menContainer = document.getElementById('products-container')
    menClothes.forEach(product => {
        menContainer.innerHTML += menTemplate(product)
    });
}

men()