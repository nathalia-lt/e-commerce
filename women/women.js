import http from "../services/httpService.js";
import products from "../products/products.js";
import cart from "../cart/cart-model.js";


async function women(){
    // encodeURI, e usado para juntar os espacos que tem nesse http
    try{
        const womenProducts = await http.getAll(encodeURI("https://fakestoreapi.com/products/category/women's clothing"))
        //products.productsRender(womenProducts, false)
        // pq eu tive que colocar o womenProducts como parametro? da onde ele veio? 
        //ja devo ter perguntado mas pq tenho que chamar essa funcao aqui dentro?
        console.log(womenProducts)
        womenRender(womenProducts, false)
    } catch (error) {
        console.log(error.message);
    }
}


//tenho que arrumar os dados do meu botao
    function womenTemplate(product){
        return `<div class="women-card">
        <img src="${product.image}" alt='${product.name}' />
        <div class="wrapper">
        <p class="description">${product.title}</p>
        <p class="rating">${product.rating.rate} ⭐</p>
        <p class="price">$: ${product.price}</p>
        <button id="${product.id}" class="add-btn" data-id="${product.id}   "data-image="${product.image}" data-title="${product.title}" data-price="${product.price}">Add to Cart
        </button>
        </div>
    </div>`
    }


    function womenRender(womenProducts){
        const womenContainer = document.getElementById('products-container')
        console.log(womenProducts)
        womenProducts.forEach(product => {
            womenContainer.innerHTML += womenTemplate(product)
        });
        //eu preciso colocar o settime out aqui?
        //eu quero alterar o css do womemTemplate
        setTimeout(addEventListenerToBtn, 50);
    }


    function addEventListenerToBtn(){
         //pego o nodelist dos meus botoes e adiciono em cada botao o evento.
        const addBtns = document.querySelectorAll('.add-btn')
        console.log(addBtns)
        addBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // { } => estamos criando um objeto
                // dataset => é um objeto que contem todos os atributos data-*
                // ...dataset => estamos espalhando todos os atributos do objeto dataset
                // id = ....
                // image = ....
                // title = ....
                // price = ....
                // {...dataset} => estamos criando um objeto com os atributos que estavam no dataset
                // {
                //     id: ....,
                //     image: ....,
                //     title: ....,
                //     price: ....
                // }


                // [...dataset] => estamos criando um array com os atributos que foram espalhados a partir do dataset
                console.log(btn.dataset)
                cart.addItem({...btn.dataset})
            })
        })
    }


women()


