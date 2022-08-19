let user = new User();
let navigation = new Navigation();
navigation.addNavigation();
navigation.displayMobileMenu();
navigation.cart();
let registerForm = document.querySelector(".registration-form");
let inputs = document.querySelectorAll(".registration-input");

inputs.forEach((input) =>
  input.addEventListener("change", () => {
    if (input.parentElement.className.includes("name")) {
      user.username = input.value;
    } else if (input.parentElement.className.includes("email")) {
      user.email = input.value;
    } else if (input.parentElement.className.includes("password")) {
      user.password = input.value;
    }
  })
);

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  user.createUser();
});

let session = new Session();
let getCartItem = session.getCartItem();

if (getCartItem !== null && getCartItem !== undefined) {
  let style = document.createElement("style");
  let carts = document.querySelectorAll(".cart");
  style.innerHTML =
    '.cart::after {content: " ";width: 9px;height: 9px;background-color: red;position: absolute;top: 3px;right: 0;border-radius: 50%;}';
  carts.forEach((cart) => cart.appendChild(style));
}
