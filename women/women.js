import http from "../services/httpService.js";
import products from "../products/products.js";


async function women(){
    // encodeURI, e usado para juntar os espacos que tem nesse http
    try{
        const womenProducts = await http.getAll(encodeURI("https://fakestoreapi.com/products/category/women's clothing"))
        //products.productsRender(womenProducts, false)
        // pq eu tive que colocar o womenProducts como parametro? da onde ele veio? 
        //ja devo ter perguntado mas pq tenho que chamar essa funcao aqui dentro?
        womenRender(womenProducts, false)
        console.log(womenProducts)
    } catch (error) {
        console.log(error.message);
    }
}


//tenho que arrumar os dados do meu botao
    function womenTemplate(womenProduct){
        return `<div class="women-card">
        <img src="${womenProduct.image}" alt='${womenProduct.name}' />
        <div class="wrapper">
        <p class="title">${womenProduct.title}</p>
        <p class="rating">${womenProduct.rating.rate} ⭐</p>
        <p class="price">$: ${womenProduct.price}</p>
        <button class="add-btn">Add to Cart</button>
        </div>
    </div>`
    }

    // <button id="${product.id}" class="add-btn" data-id="${product.id}   "data-image="${product.image}" data-title="${product.title}" data-price="${product.price}">Add to Cart
    // </button>

    function womenRender(womenClothes){
        const womenContainer = document.getElementById('products-container')
        womenClothes.forEach(product => {
            womenContainer.innerHTML += womenTemplate(product)
        });
        //eu preciso colocar o settime out aqui?
        //eu quero alterar o css do womemTemplate
        setTimeout(womenRender, 50);
    }


women()


