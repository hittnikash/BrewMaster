let html = '';
const content = document.querySelector('main');
let i = 0;

products.forEach((product, i) => {
html += `

    <img class = "productImg" src="${product.image}" alt="${product.apparelType}"> 
    <h2 class= "apparel">${product.apparelType} | ${product.productID}</h2>
    <h4 class= "description">${product.description}</h2>
    <h2 class= "price">${product.price}</h2>
    
    <div class= "btnDiv"><button type= "button" value= "${product.price}" id="btnPro">Add</button> 
    <button type= "button" value= "${product.price}"id="btnProRem">Remove</button></div>   

`;

 
    // click on item add button that items product.price to the cart.
   
    content.insertAdjacentHTML('beforeend', html);
    
    const cartArr = [];
    const removeBtn = document.getElementById('btnProRem');
    const addBtn = document.getElementById('btnPro');
    const cart = document.getElementById('cart');
    



    addBtn.addEventListener('click', () => {
        const prices = products.filter(product =>  {
        cartArr.push(`${product.price}`);
        console.log(cartArr);
        })
        })
   







 
  
    // const clicked = true;
    // addBtn.addEventListener('click', () => {
    //     if (clicked === true) {
    //         cartArr.push(product.price);
    //         console.log(cartArr);
    //     } 
    // })
}) 

{/* <div class= "btnDiv"><button type= "button" value= "${product.price}" id="btnPro">Add</button> 
<button type= "button" value= "${product.price}"id="btnProRem">Remove</button></div>   */}


