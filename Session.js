class Session {
  constructor() {
    this.username = "";
  }
  startSession() {
    let date = new Date();

    let today = date.getTime();
    let expires = 60 * 60 * 1000;

    date.setTime(today + expires);
    document.cookie = `${this.username}=1; expires=${date.toUTCString()}`;
  }
  getSession() {
    let name = this.username;
    let cookie = document.cookie;
    if (cookie.includes("=")) {
      let index = cookie.indexOf("=")
      return cookie.substring(0, index)
    }
  }
}
