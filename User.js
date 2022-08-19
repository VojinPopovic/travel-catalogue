class User {
  constructor() {
    this.username = "";
    this.email = "";
    this.password = "";
    this.api = "https://62fa4d2bffd7197707e987ad.mockapi.io/users";
  }
  createUser() {
    let data = {
      username: this.username,
      email: this.email,
      password: this.password,
    };
    data = JSON.stringify(data);

    fetch(this.api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        let session = new Session();
        session.username = data.username;
        session.startSession();
        window.location.href = "index.html"
      });
  }
  login() {
    fetch(this.api)
      .then((response) => response.json())
      .then((data) => {
        let session = new Session();
        session = session.getSession();
        for (let i = 0; i < data.length; i++) {
          // prettier-ignore
          if(this.username === data[i].username && this.password === data[i].password){
            let session = new Session();
            session.username = this.username;
            session.startSession();
            this.showTextForm()
          }
        }
      });
  }
  showTextForm() {
    let textForm = document.querySelector(".message-form");
    let loginForm = document.querySelector(".login-form");
    let p = document.querySelector(".register-paragraph");
    let phoneNumber = document.querySelector(".login-message");
    phoneNumber.innerText = "Or send a message";
    p.style.display = "none";
    loginForm.style.display = "none";
    textForm.style.display = "block";
  }
}
