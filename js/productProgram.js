document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector("main");

  const cartArr = [];
function display() {
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    const addProduct = document.createElement("div");

    addProduct.innerHTML = `
   <div class= "produ">
   <h2 class= "apparel"> ${product.apparelType} | ${product.productID}</h2>
    <img class = "productImg" src="${product.image}" alt="${product.apparelType}"> 
    <section class= "description"><p> <h5>Product Description:</h5><br> ${product.description}</p></section>
    <h3 class= "price"> price: $ ${product.price}</h3>
    <div class="btnDiv"><button type= "button" value= "${product.price}" id="btnPro">add</button> 
    <button type= "button" value= "${product.price}"id="btnProRem">remove</button></div><br>   
   </div>
    `;
    
    content.appendChild(addProduct);
  }
}
display();
 /// LIGHTBOX: To see a larger image of a product ///
 const lightbox = document.createElement('div');
 lightbox.id = 'lightbox';
 document.body.appendChild(lightbox);
 
 /// To click on an image of a product ///
 const images = document.querySelectorAll('img');
 
 images.forEach(image => {
     image.addEventListener('click', e => {
         lightbox.classList.add('active');
         const img = document.createElement('img');
         img.src = image.src;
 
  /// To remove the xtra images from lightbox ///
         while (lightbox.firstChild) {
             lightbox.removeChild(lightbox.firstChild);
         }
          lightbox.appendChild(img);
     });
 });
 
 /// To click off an product image and hide the lightbox ///
 lightbox.addEventListener('click', e => {
     if (e.target !== e.currentTarget) return;
     lightbox.classList.remove('active');
   });
 

//  Shopping Cart
  content.addEventListener("click", (e) => {
    e.preventDefault();
    const button = e.target;
    const action = button.textContent;
    const item = e.target.value;

    // Shopping Cart Div
    const cartModal = document.createElement('div');
    const cartIcon = document.getElementById('cart');
    cartModal.id = 'cartModal';
    document.body.appendChild(cartModal);
   
//Adds item to cart
    if (action === "add" && cartArr.find((i) => i === item) == null) {
      cartArr.push(item);
      console.log(cartArr);

//Removes item from cart
  } else if (action === "remove" && cartArr.find(i => i === item)) {
    const index = cartArr.indexOf(item);
    if (index > -1) {
      cartArr.splice(index, 1);
    }
    console.log(cartArr);
}

// To open cart Div 
     cartIcon.addEventListener('click', e => {
         cartModal.classList.add('active');

// To hide cart Div 
 cartIcon.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return;
  cartModal.classList.remove('active');
  });
});
  
//calculate total cart  
  function totals() {

//strings to numbers
    const prices = cartArr.map(item => parseFloat(item));

//adds cart total
    const total = prices.reduce((sum, item) => sum += item, 0);

//only 2 decimal places 
  const stringTotal = total.toFixed(2);

//displays individual added items to cart Modal  
  const added = cartArr.join("<br>");
  const addItems = cartArr.length;

  cartModal.innerHTML = `
  <h6>Qty in Cart: ${addItems}<h6> 
  <h6>${added}</h6><br> 
  <h2>Total: $ ${stringTotal}<h2>  `;
  }

 return totals();
  
 });
});

