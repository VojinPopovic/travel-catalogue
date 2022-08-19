class Session {
  constructor() {
    this.username = "";
    this.destination = "";
  }
  startSession() {
    let date = this.expires();
    document.cookie = `${this.username}=1; expires=${date}`;
  }
  getSession() {
    let name = this.username;
    let cookie = document.cookie;
    cookie = cookie.split(";");
    for (let i = 0; i < cookie.length; i++) {
      if (cookie[i].includes("1")) {
        let index = cookie.indexOf("=");
        console.log(cookie.substring(0, index));
        return cookie.substring(0, index);
      }
    }
  }
  createCartItem() {
    let date = this.expires();
    document.cookie = `${this.destination}=2; expires=${date}`;
  }
  expires() {
    let date = new Date();

    let today = date.getTime();
    let expires = 60 * 60 * 1000;

    date.setTime(today + expires);
    return date.toUTCString();
  }

  getCartItem() {
    let cookie = document.cookie.split(";");
    for (let i = 0; i < cookie.length; i++) {
      if (cookie[i].includes("2")) {
        let index = cookie[i].indexOf("=");
        return cookie[i].substring(0, index);
      }
    }
  }
}
