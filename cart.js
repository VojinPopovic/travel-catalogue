let navigation = new Navigation();
navigation.addNavigation();
navigation.displayMobileMenu();
navigation.cart();
navigation.navLogout();

let session = new Session();
let getCartItem = session.getCartItem();

if (getCartItem !== null && getCartItem !== undefined) {
  let style = document.createElement("style");
  let carts = document.querySelectorAll(".cart");
  style.innerHTML =
    '.cart::after {content: " ";width: 9px;height: 9px;background-color: red;position: absolute;top: 3px;right: 0;border-radius: 50%;}';
  carts.forEach((cart) => cart.appendChild(style));
}

let catalogueItem = document.createElement("div");
let picture = document.createElement("div");
let textDiv = document.createElement("div");
let country = document.createElement("h2");
let description = document.createElement("p");
let price = document.createElement("p");
let blabla = document.createElement("div");
let emptyCart = document.createElement("button");
let buy = document.createElement("button");
let countryList = config;

country.innerText = `${getCartItem}`;
description.innerText = `Capital: ${countryList[getCartItem].capital} 
      Official language: ${countryList[getCartItem].official_language}`;
catalogueItem.classList.add(
  "catalogue-item",
  `${countryList[getCartItem].category}`
);

picture.classList = "item-picture";
textDiv.classList = "text-container";
price.classList = "price";
blabla.classList = "buttons-container";
emptyCart.classList = "empty-cart";

price.innerHTML = `price: ${countryList[getCartItem].price}`;
let pictureUrl = countryList[getCartItem].images[0];
console.log(pictureUrl);
let cartItem = document.querySelector(".cart-content-container");
// prettier-ignore
cartItem.appendChild(catalogueItem).appendChild(picture).style.backgroundImage = `url("${pictureUrl}")`;
cartItem.appendChild(blabla).appendChild(emptyCart).innerText = "Empty Cart";
let buttons = document.querySelector(".buttons-container");
buttons.appendChild(buy).innerText = "Buy this trip";
cartItem.appendChild(price);
let item = document.querySelector(".catalogue-item");
item.appendChild(textDiv).appendChild(country);
let text = document.querySelector(".text-container");
text.appendChild(description);

let emptyCartButton = document.querySelector(".empty-cart");
emptyCartButton.addEventListener("click", () => {
  session.destroyCartItem(getCartItem);
  window.location.href = "index.html"
});
