let session = new Session();
session = session.getSession();

if (session !== "" && session !== undefined) {
  console.log("cao");
}
let user = new User();
let inputs = document.querySelectorAll("input");
let loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  user.login();
});
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

