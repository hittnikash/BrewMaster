
const brews = [
    {
      style: "Pilsner", 
      image: "images/pilsner.jpg",
      color: "straw", 
      originalGravityRange: "<b>Original Gravity:</b> 1.040 - 1.044",
      finalGravityRange: "<b>Final Gravity:</b> 1.009 - 1.012",
      IBUrange: "<b>IBU:</b>2 8 - 33",
      ABVpercentage: "<b>ABV:</b> 4.0% - 4.5%",
      ingredients0: "<b>Fermentables:</b><br> 3.3lb. Pilsen Liquid Malt Extract,<br>2lb. Pilsen Dry Malt Extract.",
      ingredients1: "<b>Specialty Grains:</b><br> 12oz. Pilsen",
      ingredients2: "<b>Hops:</b><br> 3 packs of .5oz. GR Hallertau",
      ingredients3: "<b>Yeast:</b><br> 1 sachet of Saccharomyces pastorianus, (lager yast)",
    },
    {
        style: "Irish Stout", 
        image: "",
        color: "Deep Brown", 
        originalGravityRange: "<b>Original Gravity:</b> 1.046 - 1.050",
        finalGravityRange: "<b>Final Gravity:</b> 1.011 - 1.014",
        IBUrange: "<b>IBU:</b> 31 - 35",
        ABVpercentage: "<b>ABV:</b> 4.5% - 5.0%",
        ingredients0: "<b>Fermentables:</b><br>3.3lb. Dark Liquid Malt Extract <br> 2lb. Dark Dry Malt Extract. <br> 5lb. Maltodextrin",
        ingredients1: "<b>Specialty Grains:</b><br> 12oz. Pilsen <br> 4oz Black Barley<br> 4oz. Chocolate Wheat",
        ingredients2: "<b>Hops:</b><br>1oz. Centennial<br> 1oz. UK Golding",
        ingredients3: "<b>Yeast:</b><br> 1 sachet of Saccharomyces cerevisiae, (Ale yast).",
      },
      {
        style: "Whisky Barrel Stout", 
        image: "",
        color: "Black", 
        originalGravityRange: "<b>Original Gravity:</b> 1.061 - 1.065",
        finalGravityRange: "<b>Final Gravity:</b> 1.016 - 1.019",
        IBUrange: "<b>IBU:</b> 35 - 38",
        ABVpercentage: "<b>ABV:</b> 5.5% - 6.0%",
        ingredients0: "<b>Fermentables:</b><br>3.3lb. Dark Liquid Malt Extract <br> 3.3lb. Extra Light Liquid Malt Extract<br> 1lb. Amber Dry Malt Extract",
        ingredients1: "<b>Specialty Grains:</b><br> 6oz. Black Barley <br> 8oz Chocolate Barley<br> 8 oz.Cara Brown",
        ingredients2: "<b>Hops:</b><br> 1oz. Cascade <br>.5oz. Cascade",
        ingredients3: "<b>Yeast:</b><br> 1 sachet of Saccharomyces cerevisiae, (Ale yast).",
        specialtyIngredients: "<b>Specialty Ingredients:</b> Oak Chips, 2.5 oz Whisky Barrel Chips"
      },
      {
        style: "Dunkelweizen", 
        image: "",
        color: "Brown", 
        originalGravityRange: "<b>Original Gravity:</b> 1.049 - 1.053",
        finalGravityRange: "<b>Final Gravity:</b> 1.012 - 1.015",
        IBUrange: "<b>IBU:</b> 10 - 14",
        ABVpercentage: "<b>ABV:</b> 4.75% - 5.25%",
        ingredients0: "<b>Fermentables:</b><br> 6.6lb. Wheat Liquid Malt Extract <br> 1lb. Maltodextrin",
        ingredients1: "<b>Specialty Grains:</b><br> 8oz. Chocolate Barley <br> 8oz. Munich Light.",
        ingredients2: "<b>Hops:</b><br> 1oz. Kent Golding <br> 1oz. Kent Golding",
        ingredients3: "<b>Yeast:</b><br> 1 sachet of Saccharomyces cerevisiae, (Ale yast).",
      },
      {
        style: "Belgian Tripel", 
        image: "",
        color: "Deep Gold", 
        originalGravityRange: "<b>Original Gravity:</b> 1.083 - 1.086",
        finalGravityRange: "<b>Final Gravity:</b> 1.017 - 1.020",
        IBUrange: "<b>IBU:</b> 24 - 30",
        ABVpercentage: "<b>ABV:</b> 8.5% - 9.0%",
        ingredients0: "<b>Fermentables:</b><br> 6.6lb. Light Liquid Malt Extract <br> 3lb. Pilsen Dry Malt Extract<br> 1lb. light Candi Sugar",
        ingredients1: "<b>Specialty Grains:</b><br> 4oz. Munich <br>",
        ingredients2: "<b>Hops:</b><br> 1oz. Willamette <br> 1oz. GR Tettnang ",
        ingredients3: "<b>Yeast:</b><br> 1 sachet of Saccharomyces cerevisiae, (Ale yast).",
      },
      {
        style: "Grapefruit IPA", 
        image: "",
        color: "Amber", 
        originalGravityRange: "<b>Original Gravity:</b> 1.054 - 1.058",
        finalGravityRange: "<b>Final Gravity:</b> 1.011 - 1.015",
        IBUrange: "<b>IBU:</b> 45 - 49",
        ABVpercentage: "<b>ABV:</b> 5.6% - 6.1%",
        ingredients0: "<b>Fermentables:</b><br> 6.6lb. Light Liquid Malt Extract <br> 1lb. Corn Sugar",
        ingredients1: "<b>Specialty Grains:</b><br> 8oz. Cara Red ",
        ingredients2: "<b>Hops:</b><br> 1oz. Columbus <br> 2oz. Chinnok <br> 2oz. Cascade",
        ingredients3: "<b>Yeast:</b><br> 1 sachet of Saccharomyces cerevisiae, (Ale yast).",
        specialtyIngredients: "<b>Specialty Ingredients:</b> 4oz. Brewers Best Natural Grapefruit Flavoring"
      },
      {
        style: "Latewood Oak'd IPA", 
        image: "",
        color: "Amber", 
        originalGravityRange: "<b>Original Gravity:</b> 1.056 - 1.060",
        finalGravityRange: "<b>Final Gravity:</b> 1.012 - 1.018",
        IBUrange: "<b>IBU:</b> 43 - 47",
        ABVpercentage: "<b>ABV:</b> 5.5% - 6.3%",
        ingredients0: "<b>Fermentables:</b><br> 6.6lb. Light Liquid Malt Extract <br> 1lb. Extra Light Dry Malt Extract <br> 1lb. Corn Sugar",
        ingredients1: "<b>Specialty Grains:</b><br> 8oz. Cara Brown <br> 8oz. Biscuit ",
        ingredients2: "<b>Hops:</b><br> 2oz. Simcoe <br> 2oz. Palisade",
        ingredients3: "<b>Yeast:</b><br> 1 sachet of Saccharomyces cerevisiae, (Ale yast).",
        specialtyIngredients: "<b>Specialty Ingredients:</b> 2.oz Oak Chips"
      },
      {
        style: "Belgian IPA", 
        image: "",
        color: "Pale Amber", 
        originalGravityRange: "<b>Original Gravity:</b> 1.052 - 1.056",
        finalGravityRange: "<b>Final Gravity:</b> 1.011 - 1.014",
        IBUrange: "<b>IBU:</b> 45 - 48",
        ABVpercentage: "<b>ABV:</b> 5.5% - 6.0%",
        ingredients0: "<b>Fermentables:</b><br> 6.6lb. Extra Light Liquid Malt Extract <br> 1lb. Soft Cadi Sugar",
        ingredients1: "<b>Specialty Grains:</b><br> 8oz. Caramel 30L <br> 4oz. Flaked Wheat",
        ingredients2: "<b>Hops:</b><br> 1oz. Simcoe<br> 1oz. Simcoe <br> 1oz. Chinnok <br> 1oz. Falconers Flight",
        ingredients3: "<b>Yeast:</b><br> 1 sachet of Saccharomyces cerevisiae, (Ale yast).",
     },
     {
        style: "Zombiefest", 
        image: "",
        color: "Amber", 
        originalGravityRange: "<b>Original Gravity:</b> 1.068 - 1.071",
        finalGravityRange: "<b>Final Gravity:</b> 1.014 - 1.018",
        IBUrange: "<b>IBU:</b> 15 - 20",
        ABVpercentage: "<b>ABV:</b> 6.9% - 7.4%",
        ingredients0: "<b>Fermentables:</b><br> 6.6lb. Light Liquid Malt Extract <br> 1lb. Amber Dry Malt Extract<br> 1lb. Corn Sugar",
        ingredients1: "<b>Specialty Grains:</b><br> 1lb. Cara Munich Light <br> 4oz. Aroma",
        ingredients2: "<b>Hops:</b><br> 1oz. Magnum",
        ingredients3: "<b>Yeast:</b><br> 1 sachet of Saccharomyces pastorianus, (lager yast).",
     },
     {
        style: "American Amber", 
        image: "",
        color: "Medium Amber", 
        originalGravityRange: "<b>Original Gravity:</b> 1.050 - 1.054",
        finalGravityRange: "<b>Final Gravity:</b> 1.012 - 1.015",
        IBUrange: "<b>IBU:</b> 22 - 26",
        ABVpercentage: "<b>ABV:</b> 4.75% - 5.25%",
        ingredients0: "<b>Fermentables:</b><br> 3.3lb. Amber Liquid Malt Extract <br> 2.5lb. Amber Dry Malt Extract",
        ingredients1: "<b>Specialty Grains:</b><br>8oz. Cara Brown",
        ingredients2: "<b>Hops:</b><br> 1oz. UK Golding<br> 1oz. UK Golding",
        ingredients3: "<b>Yeast:</b><br> 1 sachet of Saccharomyces cerevisiae, (Ale yast).",
     },
     {
        style: "Cream Ale", 
        image: "",
        color: "Straw", 
        originalGravityRange: "<b>Original Gravity:</b> 1.049 - 1.053",
        finalGravityRange: "<b>Final Gravity:</b> 1.010 - 1.014",
        IBUrange: "<b>IBU:</b> 16 - 18",
        ABVpercentage: "<b>ABV:</b> 5.25% - 5.75%",
        ingredients0: "<b>Fermentables:</b><br> 3.3lb. Extra Light Liquid Malt Extract <br> 2lb. Pilsen Dry Malt Extract <br>1lb Corn Sugar",
        ingredients2: "<b>Hops:</b><br> 1oz. CZ Saaz<br> 1oz. Mt. Hood",
        ingredients3: "<b>Yeast:</b><br> 1 sachet of Saccharomyces cerevisiae, (Ale yast).",
     },
     {
        style: "Ale", 
        image: "",
        color: "light brown", 
        originalGravityRange: "<b>Original Gravity:</b> 1.060 - 1.063",
        finalGravityRange: "<b>Final Gravity:</b> 1.013 - 1.016",
        IBUrange: "<b>IBU:</b> 37 - 40",
        ABVpercentage: "<b>ABV:</b> 6.0% - 6.3%",
        ingredients0: "<b>Fermentables:</b><br> 3lb. Briess CBW Pilsen light Dry Malt Extract<br> 2lb. Briess CBW Amber Dry Malt Extract <br> 1lb. Brewers Crystals, 56% Maltose Corn Sugar",
        ingredients1: "<b>Specialty Grains:</b><br>1.5lbs. Cara Brown",
        ingredients2: "<b>Hops:</b><br> 1oz. German Northern Brewer<br> .25oz. Czech Saaz",
        ingredients3: "<b>Yeast:</b><br> 1 sachet of Saccharomyces pastorianus, (lager yast). Recommended: Mangrove Jacks West Coast M44",
     },
     {
        style: "Red Ale", 
        image: "",
        color: "Medium Amber", 
        originalGravityRange: "<b>Original Gravity:</b> 1.048 - 1.052",
        finalGravityRange: "<b>Final Gravity:</b> 1.011 - 1.015",
        IBUrange: "<b>IBU:</b> 19 - 23",
        ABVpercentage: "<b>ABV:</b> 5.0% - 5.5%",
        ingredients0: "<b>Fermentables:</b><br> 6.6lbs. Light Liquid Malt Extract",
        ingredients1: "<b>Specialty Grains:</b><br>6oz. Cara Brown Supreme<br>1oz Chocolate Barley",
        ingredients2: "<b>Hops:</b><br> 1oz. UK Golding<br> 1oz. UK Golding",
        ingredients3: "<b>Yeast:</b><br> 1 sachet of Saccharomyces cerevisiae , (Ale yast).",
     }, 
     {
        style: "Honey Brown Ale", 
        image: "",
        color: "Dark Amber", 
        originalGravityRange: "<b>Original Gravity:</b> 1.042 - 1.046",
        finalGravityRange: "<b>Final Gravity:</b> 1.006 - 1.010",
        IBUrange: "<b>IBU:</b> 19 - 23",
        ABVpercentage: "<b>ABV:</b> 4.7% - 5.2%",
        ingredients0: "<b>Fermentables:</b><br> 3lbs. Extra Light Dry Malt Extract <br> 2lbs. Organic Honey",
        ingredients1: "<b>Specialty Grains:</b><br>4oz. Chocolate Barley<br>4oz. Honey <br> 4oz. Munich Light<br> 4oz. Carapils",
        ingredients2: "<b>Hops:</b><br> 1oz. East Kent Golding<br> 1oz. East Kent Golding",
        ingredients3: "<b>Yeast:</b><br> 1 sachet of Saccharomyces cerevisiae , (Ale yast).",
     }, 
     {
        style: "Blueberry Honey Ale", 
        image: "",
        color: "Golden", 
        originalGravityRange: "<b>Original Gravity:</b> 1.046 - 1.050",
        finalGravityRange: "<b>Final Gravity:</b> 1.006 - 1.010",
        IBUrange: "<b>IBU:</b> 16 - 19",
        ABVpercentage: "<b>ABV:</b> 5.25% - 5.7%",
        ingredients0: "<b>Fermentables:</b><br> 4lbs. Light Dry Malt Extract <br> 2lbs. Organic Honey",
        ingredients1: "<b>Specialty Grains:</b><br>4oz. Carapils<br>6oz. Honey",
        ingredients2: "<b>Hops:</b><br> 1oz. Cascade<br> 1oz. Cascade",
        ingredients3: "<b>Yeast:</b><br> 1 sachet of Saccharomyces cerevisiae , (Ale yast).",
        specialtyIngredients: "<b>Specialty Ingredients:</b> 4oz. Brewers Best Natural Blueberry Flavoring"
     }, 

 ];

















    let html = '';
    for (let i = 0; i < brews.length; i ++) {
        let brew = brews[i];
        html +=     ` 


        <h1 class= "brewType">${brew.style}</h1>
        <h3${brew.color}</h3>
        <img class= "brewImg" src="${brew.image}" alt="${brew.style}"> 
        <p>${brew.originalGravityRange}</p>
        <p>${brew.finalGravityRange}</p>
        <p>${brew.IBUrange}</p>
        <p>${brew.ABVpercentage}</p>
        <p>${brew.ingredients0}</p>
        <p>${brew.ingredients1}</p> 
        <p>${brew.ingredients2}</p>
        <p>${brew.ingredients3}</p>
        <p>${brew.specialtyIngredients}</p>
    `;

 }

 document.querySelector('main').insertAdjacentHTML('beforeEnd', html);





















// class Brews {
//     constructor(style, image, color, originalGravityRange, finalGravityRange, IBUrange, ABVpercentage, ingredients0, ingredients1, ingredients2, ingredients3) {
//        this.style = style;
//        this.image = image;
//        this.color = color;
//        this.originalGravityRange = originalGravityRange;
//        this.finalGravityRange = finalGravityRange;
//        this.IBUrange = IBUrange;
//        this.ABVpercentage = ABVpercentage;
//        this.ingredients0 = ingredients0;
//        this.ingredients1 = ingredients1;
//        this.ingredients2 = ingredients2;
//        this.ingredients3 = ingredients3;
//     }
// }
// var pilsners = new Brews("Pilsner", "images/pilsner.jpg", "straw", "<b>Original Gravity:</b> 1.040 - 1.044", "<b>Final Gravity:</b> 1.009 - 1.012", "<b>IBU:</b> 28 - 33", "<b>ABV:</b> 4.0% - 4.5", "<b>Fermentables:</b><br> 3.3lb. Pilsen Liquid Malt Extract,<br>2lb. Pilsen Dry Malt Extract.", "<b>Specialty Grains:</b><br> 12oz. Pilsen", "<b>Hops:</b><br> 3 packs of .5oz. GR Hallertau", "<b>Yeast:</b><br> 1 sachet of Saccharomyces pastorianus, (lager yast)");
// var IrishStouts = new Brews("Irish Stout", "Deep Brown", "<b>Original Gravity:</b> 1.046 - 1.050", "<b>Final Gravity:</b> 1.011 - 1.014", "<b>IBU:</b>31 - 35", "<b>ABV:</b>4.5% - 5.0", "<b>Fermentables:</b><br>3.3lb. Dark Liquid Malt Extract <br> 2lb. Dark Dry Malt Extract <br>.5lb. Maltodextrin", "<b>Specialty Grains:</b><br> 12oz. Pilsen <br>4oz Black Barley<br>4oz.Chocolate Wheat", "<b>Hops:</b><br>1oz. Centennial<br>1oz. UK Golding", "<b>Yeast:</b><br> 1 sachet of Saccharomyces cerevisiae, (Ale yast)." );


// document.getElementById('results').innerHTML = `


//         <h1 class= "brewType">${pilsners.style}</h1>
//         <h3${pilsners.color}</h3>
//         <img class= "brewImg" src="${pilsners.image}" alt="${pilsners.style}"> 
//         <p>${pilsners.originalGravityRange}</p>
//         <p>${pilsners.finalGravityRange}</p>
//         <p>${pilsners.IBUrange}</p>
//         <p>${pilsners.ABVpercentage}</p>
//         <p>${pilsners.ingredients0}</p>
//         <p>${pilsners.ingredients1}</p> 
//         <p>${pilsners.ingredients2}</p>
//         <p>${pilsners.ingredients3}</p>

// `;




