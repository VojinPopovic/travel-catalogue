let session = new Session();
let getCartItem = session.getCartItem();
session = session.getSession();
let user = new User();

if (session !== null && session !== undefined) {
  user.showTextForm();
}

let navigation = new Navigation()
navigation.displayMobileMenu()
navigation.cart()
let loginForm = document.querySelector(".login-form");
let inputs = document.querySelectorAll(".login-input");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  user.login();
});

inputs.forEach((input) =>
  input.addEventListener("change", () => {
    if (input.parentElement.className.includes("name")) {
      user.username = input.value;
    } else if (input.parentElement.className.includes("password")) {
      user.password = input.value;
    }
  })
);

let register = document.querySelector(".register");
register.addEventListener("click", () => {
  window.location.href = "registration.html";
});

if (getCartItem !== null && getCartItem !== undefined) {
  let style = document.createElement("style");
  let carts = document.querySelectorAll(".cart");
  style.innerHTML =
    '.cart::after {content: " ";width: 9px;height: 9px;background-color: red;position: absolute;top: 3px;right: 0;border-radius: 50%;}';
  carts.forEach((cart) => cart.appendChild(style));
}
