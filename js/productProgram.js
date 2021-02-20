let html = '';
const content = document.querySelector('main');

products.forEach((product) => {
html += `

    <img class = "productImg" src="${product.image}" alt="${product.apparelType}"> 
    <h2 class= "apparel">${product.apparelType} | ${product.productID}</h2>
    <h4 class= "description">${product.description}</h2>
    <h2 class= "price">${product.price}</h2>
    <div class= "btnDiv"><button id="btnPro">Add</button>
    <button id="btnProRem">Remove</button></div>

`;

})

content.insertAdjacentHTML('beforeend', html);

