class Navigation {
  displayMobileMenu() {
    let hamburger = document.querySelector(".hamburger-menu");
    let closeHamburger = document.querySelector(".close-hamburger-menu");
    let mobileMenu = document.querySelector(".ul-container-mobile");
    hamburger.addEventListener("click", () => {
      hamburger.style.display = "none";
      mobileMenu.style.display = "flex";
      closeHamburger.style.display = "block";
    });
    closeHamburger.addEventListener("click", () => {
      closeHamburger.style.display = "none";
      mobileMenu.style.display = "none";
      hamburger.style.display = "block";
    });
  }
  addNavigation() {
    let nav = document.querySelector("header");
    nav.innerHTML =
      '<nav><div class="content-container"><div class="logo-container"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="white" d="M12 9c1.59 7.61-2 13-2 13h3c1.88-5.8 1-9.91.5-12m2.16-2.84c.17.21.34.43.47.66a7.1 7.1 0 0 1-.63 8.44a7.11 7.11 0 0 0-.55-6.49c-.08-.13-.17-.24-.25-.36a7.123 7.123 0 0 0-2.16-1.98a7.127 7.127 0 0 0-4.96 6.79c0 .74.11 1.45.31 2.11a7.073 7.073 0 0 1-1.33-4.14c0-2.35 1.14-4.43 2.89-5.73C8 6.35 6.46 6.67 5.12 7.5c-.62.41-1.16.88-1.62 1.41c.55-1.33 1.5-2.52 2.8-3.34c1.5-.94 3.2-1.25 4.84-1.01C10.73 4 10.23 3.47 9.63 3c-.58-.42-1.21-.76-1.87-1c1.44.04 2.88.5 4.11 1.43c.63.47 1.13 1.04 1.53 1.64c.1 0 .19-.01.29-.01c3.2 0 5.91 2.11 6.81 5.02a7.073 7.073 0 0 0-4.84-2.92Z"/></svg></div><div class="ul-container"><ul class="desktop-navigation-ul"><li class="home"><a href="index.html">Home</a></li><li class="registration"><a href="registration.html">Register</a></li><li class="cart"></li></ul><div class="hamburger-menu"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M7.95 11.95h32m-32 12h32m-32 12h32"/></svg></div><div class="close-hamburger-menu"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg></div><div class="ul-container-mobile"><ul class="mobile-navigation-ul"><li class="home"><a href="index.html">Home</a></li><li class="registration"><a href="registration.html">Register</a></li><li class="cart"></li></ul></div></div></div></nav>';
  }
  cart() {
    let carts = document.querySelectorAll(".cart");
    carts.forEach((cart) =>
      cart.addEventListener("click", () => (window.location.href = "cart.html"))
    );
  }
  navLogout() {
    let user = new User();
    user.logout()
  }
}
