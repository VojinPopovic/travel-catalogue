let session = new Session();
session = session.getSession();

if (session !== "" && session !== undefined) {
  window.location.href = "cart.html";
  console.log("cao");
}
let user = new User();
let inputs = document.querySelectorAll("input");
let forms = document.querySelectorAll("form");
forms.forEach((form) =>
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    user.createUser();
  })
);
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
