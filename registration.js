let user = new User();
let navigation = new Navigation()
navigation.addNavigation()
navigation.displayMobileMenu()
navigation.cart()
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
