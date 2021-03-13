document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector("main");
  const cartArr = [];

  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    const addProduct = document.createElement("div");

    addProduct.innerHTML = `
   <div class= "produ">
   <h2 class= "apparel"> ${product.apparelType} | ${product.productID}</h2>
    <img class = "productImg" src="${product.image}" alt="${product.apparelType}"> 
    <p class= "description"> ${product.description}</p>
    <h3 class= "price"> ${product.price}</h3>
    <div class="btnDiv"><button type= "button" value= "${product.productID}" id="btnPro">Add</button> 
    <button type= "button" value= "${product.productID}"id="btnProRem">Remove</button></div><br>   
   </div>
    `;

    content.appendChild(addProduct);
  }

  content.addEventListener("click", (e) => {
    e.preventDefault();
    const button = e.target;
    const action = button.textContent;
    const item = e.target.value;
    if (action === "Add" && cartArr.find((i) => i === item) == null) {
      cartArr.push(item);
      console.log(cartArr);
    } else if (action === "Remove") {
      const filtered = cartArr.filter((i) => i !== item);
      {
        console.log(filtered);
      }
    }
  });
});
