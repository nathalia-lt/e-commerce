// aqui eu import o meu http, que e onde eu fiz o fetch, para poder usar aqui nesse arquivo
import http from "../services/httpService.js";
import products from "../products/products.js";


async function accessories(){
    // encodeURI, e usado para juntar os espacos que tem nesse http
    try{
        const jewelery = await http.getAll(encodeURI("https://fakestoreapi.com/products/category/jewelery"))
        // products.productsRender(menProducts, false)
        jeweleryRender(jewelery, false)
        console.log(jewelery)
    } catch (error) {
        console.log(error.message);
    }
}

function jeweleryTemplate(jeweleryProduct){
    return `<div class="jew-card">
    <img width="40px" src="${jeweleryProduct.image}" alt='${jeweleryProduct.name}' />
    <div class="wrapper">
        <p class="title">${jeweleryProduct.title}</p>
        <p class="rating">${jeweleryProduct.rating.rate} ⭐</p>
        <p class="price">$: ${jeweleryProduct.price}</p>
    </div>
    <button class="add-btn">Add to Cart</button>
</div>`
}

function jeweleryRender(jew){
    const jeweleryContainer = document.getElementById('products-container')
    jew.forEach(product => {
        jeweleryContainer.innerHTML += jeweleryTemplate(product)
    });
    setTimeout(jeweleryRender, 50);
}

accessories()