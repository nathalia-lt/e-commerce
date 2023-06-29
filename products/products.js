import categoriesImages from './data.js'


    function categoriesRender(categories) {
        const categoriesContainer = document.getElementById('categories-container')
        categories.forEach((category, index) => {
            categoriesContainer.innerHTML += categoryTemplate(category, index)
        })
    }
    
    function categoryTemplate(category, index) {
        return `
        <div class='category-card'>
        <img src="${categoriesImages[index]}" alt='${category}'/>
        <h3>${category}</h3>
        </div>
        `
    }
    
    function productsRender(allProducts, random=true){
        const productsToRender = random ? randomItems(allProducts) : allProducts
        const productsContainer = document.getElementById('products-container')
        productsToRender.forEach(product => {
            productsContainer.innerHTML += productTemplate(product)
        })
    }
    
    function productTemplate(product){
        return`
        <div class="product-card">
            <img width="40px" src="${product.image}" alt='${product.name}' />
            <p>${product.title}</p>
            <p>$: ${product.price}</p>
        </div>`
    }
    
    function randomItems(list, quantity = 4){
        const size = list.length
        let itemIndex = [];
    
        for(let i = 0; i < quantity; i++) {
            itemIndex.push(Math.floor(Math.random()* size));
        }    
        const selectedItems = list.filter((item, index) => {
            return itemIndex.includes(index)
        })
        return selectedItems
    }
    const products = {
        categoriesRender,
        productsRender
    }
    export default products