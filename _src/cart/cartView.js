//cart.js vai ser o view do modal
// sem o curl brackets pq eu fiz o export default

//eu tenho que dizer que eu vou trabalhar com essas variaveis
//por isso crio elas global
let products;
let cart;

async function init(productsView, cartModel) {
    products = productsView;
    cart = cartModel;
    const countItems = document.getElementById('cart-item-count')
    const cartModal = document.querySelector('#cart-modal')
    const cartBtn = document.querySelector('#cart-btn')
    const closeIcon = document.querySelector('.closeIcon')
    const cartIcon = document.querySelector('.cart-icon')

    console.log(countItems)
    countItems.innerHTML = cart.countItems();

    cartBtn.addEventListener('click', () => {
        if (cartModal.classList.contains('show-cart')) {
            cartModal.classList.remove('show-cart');
            cartIcon.style.display = 'block';
            closeIcon.style.display = 'none';
            cartBtn.style.right = '1rem'
            countItems.style.display = 'grid';
        } else {
            cartModal.classList.add('show-cart');
            //quando eu abro o carrinho, para aparecer os items. eu chamo a funcao
            render();
            closeIcon.style.display = 'block';
            cartIcon.style.display = 'none';
            countItems.style.display = 'none';
        }
    })
    countItems.addEventListener('add-item-to-cart', () => {
        console.log('Ouviu')
        countItems.innerHTML = cart.countItems();
    })

}

function render() {
    //vai renderizar os produtos dentro do modal
    products.productsRenderCartPage(cart.getItems(), cart.getTotal())
}

const cartView = {
    init,
    render
}

export default cartView;

