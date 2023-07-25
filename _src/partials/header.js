export default function getHeader(title = 'E-com') {

return `
<h1 class="title">${title}</h1>
        <!-- cart menu -->
        <!-- preciso de um container para receber a a class show cart -->
        <div id="cart-modal" class="cart-modal">
            <h3>My Cart</h3>

            <!-- items do menu -->
            <section id="cart-products-container"  class="cart-products-container">
                
            </section>
        </div>        
        <!-- cart modal-->
        <div id="cart-container" class="cart-container" >
            <button id="cart-btn" class="cart-btn">
                <svg class="cart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
                <svg class="closeIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>                
                <span id="cart-item-count" class="cart-item-count">0</span>
            </button>
        </div>
`
}