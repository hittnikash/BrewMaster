let html = '';
const content = document.querySelector('main');
const cartArr = [];


for (let i = 0; i < products.length; i ++) {
    let product = products[i];
    const addProduct = document.createElement('div')
    addProduct.innerHTML = `

    <img class = "productImg" src="${product.image}" alt="${product.apparelType}"> 
    <h2 class= "apparel"> ${product.apparelType} | ${product.productID}</h2>
    <h4 class= "description"> ${product.description}</h2>
    <h2 class= "price"> ${product.price}</h2>
    
    <div class= "btnDiv"><button type= "button" value= "${product.price}" id="btnPro">Add</button> 
    <button type= "button" value= "${product.price}"id="btnProRem">Remove</button></div>   
    `;

    content.appendChild(addProduct)
    // click on item add button that items product.price to the cart.
   
} 

content.addEventListener('click', (e) => {
    e.preventDefault()
    const button = e.target;
    const action = button.textContent;
    if (action === 'Add') {
        cartArr.push(e.target.value);
        console.log(cartArr);
    } else if (action === 'Remove') {
        const filterd = cartArr.filter(button => e.target.value) 
        cartArr.pop(e.target.value)
        console.log(cartArr);
        console.log(filtered);
    }
  }
})

