const brews = [
  {
    style: "pilsner",
    image: "images/beer/pilsner.jpg",
    color: "<h5>Color:</h5> Straw",
    originalGravityRange: "<h5>Original Gravity:</h5> 1.040 - 1.044",
    finalGravityRange: "<h5>Final Gravity:</h5> 1.009 - 1.012",
    IBUrange: "<h5>IBU:</h5> 2 8 - 33",
    ABVpercentage: "<h5>ABV:</h5> 4.0% - 4.5%",
    ingredients0:
      "<h5>Fermentables:</h5><br> 3.3lbs. Pilsen Liquid Malt, <br>2lbs. Pilsen Dry Malt.",
    ingredients1: "<h5>Specialty Grains:</h5><br> 12oz. Pilsen",
    ingredients2: "<h5>Hops:</h5><br> 1.5oz. GR Hallertau",
    ingredients3:
      "<h5>Yeast:</h5><br> 1 sachet of Saccharomyces pastorianus,<br> (lager yast)",
    specialtyIngredients: "<h5>Specialty Ingredients:</h5><br>(optional)",
  },
  {
    style: "whisky-barrel-stout",
    image: "images/beer/barrel.jpg",
    color: "<h5>Color:</5> Black",
    originalGravityRange: "<h5>Original Gravity:</h5> 1.061 - 1.065",
    finalGravityRange: "<h5>Final Gravity:</h5> 1.016 - 1.019",
    IBUrange: "<h5>IBU:</h5> 35 - 38",
    ABVpercentage: "<h5>ABV:</h5> 5.5% - 6.0%",
    ingredients0:
      "<h5>Fermentables:</h5><br>3.3lbs. Dark Liquid Malt, <br> 3.3lbs. Extra Light Liquid Malt, <br> 1lbs. Amber Dry Malt.",
    ingredients1:
      "<h5>Specialty Grains:</h5><br> 6oz. Black Barley, <br> 8oz Chocolate Barley,<br> 8 oz.Cara Brown",
    ingredients2: "<h5>Hops:</h5><br> 1.5oz. Cascade",
    ingredients3:
      "<h5>Yeast:</h5><br> 1 sachet of Saccharomyces cerevisiae,<br> (Ale yast).",
    specialtyIngredients:
      "<h5>Specialty Ingredients:</h5><br> Oak Chips, 2.5 oz Whisky Barrel Chips.",
  },
  {
    style: "irish-stout",
    image: "images/beer/irishStout.jpg",
    color: "<h5>Color:</h5> Deep-Brown",
    originalGravityRange: "<h5>Original Gravity:</h5> 1.046 - 1.050",
    finalGravityRange: "<h5>Final Gravity:</h5> 1.011 - 1.014",
    IBUrange: "<h5>IBU:</h5> 31 - 35",
    ABVpercentage: "<h5>ABV:</h5> 4.5% - 5.0%",
    ingredients0:
      "<h5>Fermentables:</h5><br> 3.3lbs. Dark Liquid Malt<br> 2lbs. Dark Dry Malt, <br> 5lbs. Maltodextrin.",
    ingredients1:
      "<h5>Specialty Grains:</h5><br> 12oz. Pilsen, <br> 4oz Black Barley,<br> 4oz. Chocolate Wheat",
    ingredients2: "<h5>Hops:</h5><br>1oz. Centennial,<br> 1oz. UK Golding",
    ingredients3:
      "<h5>Yeast:</h5><br> 1 sachet of Saccharomyces cerevisiae,<br> (Ale yast).",
    specialtyIngredients:
      "<h5>Specialty Ingredients:</h5><br> 4oz. Brewers Best Natural coffee Flavoring.",
  },
  {
    style: "belgian-Saison",
    image: "images/beer/belgianSaison.jpg",
    color: "<h5>Color:</h5> Deep-Gold",
    originalGravityRange: "<h5>Original Gravity:</h5> 1.048 - 1.052",
    finalGravityRange: "<h5>Final Gravity:</h5> 1.011 - 1.015",
    IBUrange: "<h5>IBU:</h5> 31 - 35",
    ABVpercentage: "<h5>ABV:</h5> 5.25% - 5.75%",
    ingredients0:
      "<h5>Fermentables:</h5><br> 4lbs. Extra Light Dry Malt, <br>1lbs. Candi Sugar.",
    ingredients1: "<h5>Specialty Grains:</h5><br> 1oz. Vienna,<br> 12oz. flaked Wheat,<br> 4oz. Caramel 30L",
    ingredients2: "<h5>Hops:</h5><br> 1oz. Brewers Gold, <br> 1oz. Tettnang ",
    ingredients3:
      "<h5>Yeast:</h5><br> 1 sachet of Saccharomyces cerevisiae,<br> (Ale yast).",
    specialtyIngredients: "<h5>Specialty Ingredients:</h5><br>(optional)",
  },
  {
    style: "dunkelweizen",
    image: "images/beer/dunkel.jpg",
    color: "<h5>Color:</h5> Brown",
    originalGravityRange: "<h5>Original Gravity:</h5> 1.049 - 1.053",
    finalGravityRange: "<h5>Final Gravity:</h5> 1.012 - 1.015",
    IBUrange: "<h5>IBU:</h5> 10 - 14",
    ABVpercentage: "<h5>ABV:</h5> 4.75% - 5.25%",
    ingredients0:
      "<h5>Fermentables:</h5><br> 6.6lbs. Wheat Liquid Malt, <br> 1lbs. Maltodextrin.",
    ingredients1:
      "<h5>Specialty Grains:</h5><br> 8oz. Chocolate Barley, <br> 8oz. Munich Light.",
    ingredients2: "<h5>Hops:</h5><br> 2oz. Kent Golding",
    ingredients3:
      "<h5>Yeast:</h5><br> 1 sachet of Saccharomyces cerevisiae, <br>(Ale yast).",
    specialtyIngredients: "<h5>Specialty Ingredients:</h5><br>(optional)",
  },
  {
    style: "Gin-Barrel-Saison",
    image: "images/beer/gin.jpg",
    color: "<h5>Color:</h5> Deep Gold",
    originalGravityRange: "<h5>Original Gravity:</h5> 1.047 - 1.051",
    finalGravityRange: "<h5>Final Gravity:</h5> 1.012 - 1.018",
    IBUrange: "<h5>IBU:</h5> 23 - 27",
    ABVpercentage: "<h5>ABV:</h5> 4.3% - 5.2%",
    ingredients0:
      "<h5>Fermentables:</h5><br> 6.6lbs. Pilsner Liquid Malt, <br> 1lb. Wheat Dry Malt.",
    ingredients1:
      "<h5>Specialty Grains:</h5><br> 8oz. Carapils",
    ingredients2: "<h5>Hops:</h5><br> 2oz. Tettnang, <br> 1oz. GR Hallertau",
    ingredients3:
      "<h5>Yeast:</h5><br> 1 sachet of Saccharomyces cerevisiae,<br> (Ale yast).",
    specialtyIngredients: "<h5>Specialty Ingredients:</h5><br> 2.oz  Gin-soaked Oak Chips.",
  },
  {
    style: "grapefruit-ipa",
    image: "images/beer/gipa.jpg",
    color: "<h5>Color:</h5> Amber",
    originalGravityRange: "<h5>Original Gravity:</h5> 1.054 - 1.058",
    finalGravityRange: "<h5>Final Gravity:</h5> 1.011 - 1.015",
    IBUrange: "<h5>IBU:</h5> 45 - 49",
    ABVpercentage: "<h5>ABV:</h5> 5.6% - 6.1%",
    ingredients0:
      "<h5>Fermentables:</h5><br> 6.6lbs. Light Liquid Malt, <br> 1lbs. Corn Sugar.",
    ingredients1: "<h5>Specialty Grains:</h5><br> 8oz. Cara Red ",
    ingredients2:
      "<h5>Hops:</h5><br> 1oz. Columbus, <br> 2oz. Chinnok, <br> 2oz. Cascade",
    ingredients3:
      "<h5>Yeast:</h5><br> 1 sachet of Saccharomyces cerevisiae,<br> (Ale yast).",
    specialtyIngredients:
      "<h5>Specialty Ingredients:</h5><br> 4oz. Brewers Best Natural Grapefruit Flavoring.",
  },
  {
    style: "belgian-ipa",
    image: "images/beer/ipaBell.jpg",
    color: "<h5>Color:</h5> Pale Amber",
    originalGravityRange: "<h5>Original Gravity:</h5> 1.052 - 1.056",
    finalGravityRange: "<h5>Final Gravity:</h5> 1.011 - 1.014",
    IBUrange: "<h5>IBU:</h5> 45 - 48",
    ABVpercentage: "<h5>ABV:</h5> 5.5% - 6.0%",
    ingredients0:
      "<h5>Fermentables:</h5><br> 6.6lbs. Extra Light Liquid Malt, <br> 1lbs. Soft Cadi Sugar.",
    ingredients1:
      "<h5>Specialty Grains:</h5><br> 8oz. Caramel 30L <br> 4oz. Flaked Wheat",
    ingredients2:
      "<h5>Hops:</h5><br> 2oz. Simcoe, <br> 1oz. Chinnok, <br> 1oz. Falconers Flight",
    ingredients3:
      "<h5>Yeast:</h5><br> 1 sachet of Saccharomyces cerevisiae,<br> (Ale yast).",
    specialtyIngredients: "<h5>Specialty Ingredients:</h5><br>(optional)",
  },
  {
    style: "latewood-oak'd-ipa",
    image: "images/beer/dipa.jpg",
    color: "<h5>Color:</h5> Amber",
    originalGravityRange: "<h5>Original Gravity:</h5> 1.056 - 1.060",
    finalGravityRange: "<h5>Final Gravity:</h5> 1.012 - 1.018",
    IBUrange: "<h5>IBU:</h5> 43 - 47",
    ABVpercentage: "<h5>ABV:</h5> 5.5% - 6.3%",
    ingredients0:
      "<h5>Fermentables:</h5><br> 6.6lbs. Light Liquid Malt, <br> 1lb. Extra Light Dry Malt, <br> 1lbs. Corn Sugar.",
    ingredients1:
      "<h5>Specialty Grains:</h5><br> 8oz. Cara Brown, <br> 8oz. Biscuit ",
    ingredients2: "<h5>Hops:</h5><br> 2oz. Simcoe, <br> 2oz. Palisade",
    ingredients3:
      "<h5>Yeast:</h5><br> 1 sachet of Saccharomyces cerevisiae,<br> (Ale yast).",
    specialtyIngredients: "<h5>Specialty Ingredients:</h5><br> 2.oz Oak Chips.",
  },
  {
    style: "belgian-tripel",
    image: "images/beer/belgianTripel.jpg",
    color: "<h5>Color:</h5> Deep-Gold",
    originalGravityRange: "<h5>Original Gravity:</h5> 1.083 - 1.086",
    finalGravityRange: "<h5>Final Gravity:</h5> 1.017 - 1.020",
    IBUrange: "<h5>IBU:</h5> 24 - 30",
    ABVpercentage: "<h5>ABV:</h5> 8.5% - 9.0%",
    ingredients0:
      "<h5>Fermentables:</h5><br> 6.6lbs. Light Liquid Malt, <br> 3lbs. Pilsen Dry Malt, <br> 1lbs. light Candi Sugar.",
    ingredients1: "<h5>Specialty Grains:</h5><br> 4oz. Munich <br>",
    ingredients2: "<h5>Hops:</h5><br> 1oz. Willamette, <br> 1oz. GR Tettnang ",
    ingredients3:
      "<h5>Yeast:</h5><br> 1 sachet of Saccharomyces cerevisiae, <br>(Ale yast).",
    specialtyIngredients: "<h5>Specialty Ingredients:</h5><br>(optional)",
  },
  {
    style: "zombiefest",
    image: "images/beer/zombieFest.jpg",
    color: "<h5>Color:</h5> Amber",
    originalGravityRange: "<h5>Original Gravity:</h5> 1.068 - 1.071",
    finalGravityRange: "<h5>Final Gravity:</h5> 1.014 - 1.018",
    IBUrange: "<h5>IBU:</h5> 15 - 20",
    ABVpercentage: "<h5>ABV:</h5> 6.9% - 7.4%",
    ingredients0:
      "<h5>Fermentables:</h5><br> 6.6lbs. Light Liquid Malt, <br> 1lbs. Amber Dry Malt<br> 1lbs. Corn Sugar.",
    ingredients1:
      "<h5>Specialty Grains:</h5><br> 1lbs. Cara Munich Light, <br> 4oz. Aroma",
    ingredients2: "<h5>Hops:</h5><br> 1oz. Magnum",
    ingredients3:
      "<h5>Yeast:</h5><br> 1 sachet of Saccharomyces pastorianus,<br> (lager yast).",
    specialtyIngredients: "<h5>Specialty Ingredients:</h5><br>(optional)",
  },
  {
    style: "brown-ale",
    image: "images/beer/ale.jpg",
    color: "<h5>Color:</h5> Light-Brown",
    originalGravityRange: "<h5>Original Gravity:</h5>1.060 - 1.063",
    finalGravityRange: "<h5>Final Gravity:</h5>1.013 - 1.016",
    IBUrange: "<h5>IBU:</h5>37 - 40",
    ABVpercentage: "<h5>ABV:</h5> 6.0% - 6.3%",
    ingredients0:
      "<h5>Fermentables:</h5><br>3lbs. Briess Pilsen light Dry Malt,<br> 2lbs. Briess Amber Dry Malt, <br> 1lbs. Brewers Crystals: 56% Maltose Corn Sugar.",
    ingredients1: "<h5>Specialty Grains:</h5><br>1.5lbs. Cara Brown",
    ingredients2: "<h5>Hops:</h5><br>1oz. German Northern Brewer<br> .25oz. Czech Saaz",
    ingredients3:
      "<h5>Yeast:</h5><br>1 sachet of Saccharomyces pastorianus,<br> (lager yast). Recommended: Mangrove Jacks West Coast M44. ",
    specialtyIngredients:
      "<h5>Specialty Ingredients:</h5><br>(optional)",
  },
  {
    style: "american-amber",
    image: "images/beer/amber.jpg",
    color: "<h5>Color:</h5> Medium Amber",
    originalGravityRange: "<h5>Original Gravity:</h5> 1.050 - 1.054",
    finalGravityRange: "<h5>Final Gravity:</h5> 1.012 - 1.015",
    IBUrange: "<h5>IBU:</h5> 22 - 26",
    ABVpercentage: "<h5>ABV:</h5> 4.75% - 5.25%",
    ingredients0:
      "<h5>Fermentables:</h5><br> 3.3lbs. Amber Liquid Malt, <br> 2.5lb. Amber Dry Malt.",
    ingredients1: "<h5>Specialty Grains:</h5><br>8oz. Cara Brown",
    ingredients2: "<h5>Hops:</h5><br> 2oz. UK Golding",
    ingredients3:
      "<h5>Yeast:</h5><br> 1 sachet of Saccharomyces cerevisiae,<br> (Ale yast).",
    specialtyIngredients: "<h5>Specialty Ingredients:</h5><br>(optional)",
  },
  {
    style: "vanilla-cremé-ale",
    image: "images/beer/creamAle.jpg",
    color: "<h5>Color:</h5> Straw",
    originalGravityRange: "<h5>Original Gravity:</h5> 1.049 - 1.053",
    finalGravityRange: "<h5>Final Gravity:</h5> 1.010 - 1.014",
    IBUrange: "<h5>IBU:</h5> 16 - 18",
    ABVpercentage: "<h5>ABV:</h5> 5.25% - 5.75%",
    ingredients0:
      "<h5>Fermentables:</h5><br> 3.3lbs. Extra Light Liquid Malt, <br> 2lbs. Pilsen Dry Malt, <br>1lbs Corn Sugar.",
    ingredients1: "<h5>Specialty Grains:</h5><br> .5oz Vienna",
    ingredients2: "<h5>Hops:</h5><br> 1oz. CZ Saaz,<br> 1oz. Mt. Hood",
    ingredients3:
      "<h5>Yeast:</h5><br> 1 sachet of Saccharomyces cerevisiae,<br> (Ale yast).",
    specialtyIngredients:
      "<h5>Specialty Ingredients:</h5><br>4oz. Brewers Best Natural Vanilla Flavoring.",
  },
  {
    style: "red-ale",
    image: "images/beer/redAle.jpg",
    color: "<h5>Color:</h5> Medium Amber",
    originalGravityRange: "<h5>Original Gravity:</h5> 1.048 - 1.052",
    finalGravityRange: "<h5>Final Gravity:</h5> 1.011 - 1.015",
    IBUrange: "<h5>IBU:</h5> 19 - 23",
    ABVpercentage: "<h5>ABV:</h5> 5.0% - 5.5%",
    ingredients0: "<h5>Fermentables:</h5><br> 6.6lbs. Light Liquid Malt",
    ingredients1:
      "<h5>Specialty Grains:</h5><br>6oz. Cara Brown Supreme,<br>1oz Chocolate Barley.",
    ingredients2: "<h5>Hops:</h5><br> 2oz. UK Golding",
    ingredients3:
      "<h5>Yeast:</h5><br> 1 sachet of Saccharomyces cerevisiae,<br> (Ale yast).",
    specialtyIngredients: "<h5>Specialty Ingredients:</h5><br>(optional)",
  },
  {
    style: "honey-brown-ale",
    image: "images/beer/brown.jpg",
    color: "<h5>Color:</h5> Dark Amber",
    originalGravityRange: "<h5>Original Gravity:</h5> 1.042 - 1.046",
    finalGravityRange: "<h5>Final Gravity:</h5> 1.006 - 1.010",
    IBUrange: "<h5>IBU:</h5> 19 - 23",
    ABVpercentage: "<h5>ABV:</h5> 4.7% - 5.2%",
    ingredients0: "<h5>Fermentables:</h5><br> 3lbs. Extra Light Dry Malt",
    ingredients1:
      "<h5>Specialty Grains:</h5><br>4oz. Chocolate Barley,<br>4oz. Honey, <br> 4oz. Munich Light,<br> 4oz. Carapils",
    ingredients2: "<h5>Hops:</h5><br> 2oz. East Kent Golding",
    ingredients3:
      "<h5>Yeast:</h5><br> 1 sachet of Saccharomyces cerevisiae,<br> (Ale yast).",
    specialtyIngredients:
      "<h5>Specialty Ingredients:</h5><br> 2lbs. Organic Honey.",
  },
  {
    style: "blueberry-honey-ale",
    image: "images/beer/blue.jpg",
    color: "<h5>Color:</h5> Golden",
    originalGravityRange: "<h5>Original Gravity:</h5> 1.046 - 1.050",
    finalGravityRange: "<h5>Final Gravity:</h5> 1.006 - 1.010",
    IBUrange: "<h5>IBU:</h5> 16 - 19",
    ABVpercentage: "<h5>ABV:</h5> 5.25% - 5.7%",
    ingredients0:
      "<h5>Fermentables:</h5><br> 4lbs. Light Dry Malt, <br> 2lbs. Organic Honey.",
    ingredients1: "<h5>Specialty Grains:</h5><br>4oz. Carapils,<br>6oz. Honey",
    ingredients2: "<h5>Hops:</h5><br> 2oz. Cascade",
    ingredients3:
      "<h5>Yeast:</h5><br> 1 sachet of Saccharomyces cerevisiae,<br> (Ale yast).",
    specialtyIngredients:
      "<h5>Specialty Ingredients:</h5><br>4oz. Brewers Best Natural Blueberry Flavoring.",
  },
];

let html = "";
for (let i = 0; i < brews.length; i++) {
  let brew = brews[i];

  html += ` 
<div class="imgBrew">
<div><img class= "brewImg" src="${brew.image}" alt="${brew.style}"></img></div>
  <div class="menu"></div>
  <button class="accordionB">${brew.style}</button>
  <div class="panel">
    <ul class= "ingredients">
      <h1 class= "brewStyle">${brew.style}</h1>
        <li>${brew.color}</li>
        <li>${brew.originalGravityRange}</li>
        <li>${brew.finalGravityRange}</li>
        <li>${brew.IBUrange}</li>
        <li>${brew.ABVpercentage}</li>
        <li>${brew.ingredients0}</li>
        <li>${brew.ingredients1}</li> 
        <li>${brew.ingredients2}</li>
        <li>${brew.ingredients3}</li>
        <li>${brew.specialtyIngredients}</li>
      </ul>
  </div>
</div>
    `;
}
document.querySelector("main").insertAdjacentHTML("beforeEnd", html);

const recipe = document.getElementsByClassName("accordionB");
var i;

for (i = 0; i < recipe.length; i++) {
  recipe[i].addEventListener("click", function () {
    this.classList.toggle("active");

    /* Toggles between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}





