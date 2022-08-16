class FormValidation {
  constructor(errors) {
    this.errors = errors;
    this.validation();
  }
  validation() {
    let inputs = document.querySelectorAll(".input");
    let form = document.querySelector("form");
    let paragraph = document.createElement("p");
    form.addEventListener("submit", (e) => e.preventDefault());
    inputs.forEach((input) =>
      input.addEventListener("change", (e) => {
        let error = input.previousElementSibling.innerText;
        if (e.target.value.length < 5) {
          this.errorRemove();
          input.closest("div").appendChild(paragraph);
          // prettier-ignore
          this.errors[error.toLowerCase()].push("Needs to have more than 5 characters")
          paragraph.innerText = this.errors[error.toLowerCase()];
        } else {
          if (error === "Name") {
            let name = e.target.value.split(" ");
            if (name.length < 2) {
              this.errorRemove();
              this.errors.name.push("Enter your first and last name");
              input.closest("div").appendChild(paragraph);
              paragraph.innerText = `${this.errors.name}`;
            } else if (name.length >= 2) {
              paragraph.innerText = "";
            }
          }
          if (error === "Email") {
            let email = e.target.value;
            if (!this.validateEmail(email)) {
              this.errorRemove();
              this.errors.email.push("Invalid Email adress");
              input.closest("div").appendChild(paragraph);
              paragraph.innerText = `${this.errors.email}`;
            } else {
              paragraph.innerText = "";
            }
          }
        }
      })
    );
  }
  errorRemove() {
    for (let error in this.errors) {
      this.errors[error] = [];
    }
  }
  validateEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  }
}
