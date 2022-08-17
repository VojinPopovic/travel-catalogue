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
      });
  }
  login() {
    fetch(this.api)
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          // prettier-ignore
          if(this.username === data[i].username && this.password === data[i].password){
          console.log("cao")  
          }
        }
      });
  }
}
