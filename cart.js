let navigation = new Navigation();
navigation.addNavigation();
navigation.displayMobileMenu();
navigation.cart();
navigation.navLogout()

let session = new Session();
let getCartItem = session.getCartItem();

if (getCartItem !== null && getCartItem !== undefined) {
  let style = document.createElement("style");
  let carts = document.querySelectorAll(".cart");
  style.innerHTML =
    '.cart::after {content: " ";width: 9px;height: 9px;background-color: red;position: absolute;top: 3px;right: 0;border-radius: 50%;}';
  carts.forEach((cart) => cart.appendChild(style));
}

