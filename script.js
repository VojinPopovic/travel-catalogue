class SliderPopular {
  constructor(configPopular) {
    this.popularCountry = configPopular;
    this.imgNum = 0;
    this.sliderLeft();
    this.sliderRight();
    this.sliderDescription();
  }
  sliderLeft() {
    let image = this.popularCountry.images;
    let imageDiv = document.querySelector(".picture-slider-container");
    let btnLeft = document.querySelector(".btn-left");
    btnLeft.addEventListener("click", () => {
      this.imgNum--;
      if (this.imgNum < 0) {
        this.imgNum = image.length - 1;
        imageDiv.style.backgroundImage = `url("${image[this.imgNum]}")`;
      } else {
        imageDiv.style.backgroundImage = `url("${image[this.imgNum]}")`;
      }
    });
  }
  sliderRight() {
    let image = this.popularCountry.images;
    let imageDiv = document.querySelector(".picture-slider-container");
    let btnRight = document.querySelector(".btn-right");
    btnRight.addEventListener("click", () => {
      this.imgNum++;
      if (this.imgNum >= image.length) {
        this.imgNum = 0;
        imageDiv.style.backgroundImage = `url("${image[this.imgNum]}")`;
      } else {
        imageDiv.style.backgroundImage = `url("${image[this.imgNum]}")`;
      }
    });
  }
  sliderDescription() {
    let sliderContainer = document.querySelector(".picture-slider-container");
    let descriptionDiv = document.createElement("div");
    descriptionDiv.classList = "description";
    let descriptionUl = document.createElement("ul");
    let descriptionLi = document.createElement("li");
    let descriptionA = document.createElement("a");

    // prettier-ignore
    sliderContainer
      .appendChild(descriptionDiv)
      .appendChild(descriptionUl)
      .appendChild(descriptionLi)
      .appendChild(descriptionA).classList = "country";
    // prettier-ignore
    let countryLink = document.querySelector(".country");
    countryLink.innerHTML = `Country: ${this.popularCountry.country}`;
    countryLink.setAttribute(
      "href",
      `https://www.google.com/search?q=${this.popularCountry.country}`
    );

    sliderContainer
      .appendChild(descriptionDiv)
      .appendChild(descriptionUl)
      .appendChild(descriptionLi)
      .appendChild(descriptionA.cloneNode()).classList = "capital";
    // prettier-ignore
    let capitalLink = document.querySelector(".capital");
    capitalLink.innerHTML = `Capital: ${this.popularCountry.capital}`;
    capitalLink.setAttribute(
      "href",
      `https://www.google.com/search?q=${this.popularCountry.capital}`
    );
  }
}

class DestinationList {
  constructor(config) {
    this.countryList = config;
    this.populateList();
    this.displayOverlay();
  }
  populateList() {
    let catalogue = document.querySelector(".grid-center");
    for (let destination in this.countryList) {
      console.log(this.countryList[destination].capital);
      let item = document.createElement("div");
      let picture = document.createElement("div");
      let textDiv = document.createElement("div");
      let country = document.createElement("h2");
      let description = document.createElement("p");

      country.innerText = `${destination}`;
      description.innerText = `Capital: ${this.countryList[destination].capital} 
      Official language: ${this.countryList[destination].official_language}`;
      item.classList = "catalogue-item";
      picture.classList = "item-picture";
      textDiv.classList = "text-container";
      let pictureUrl = this.countryList[destination].images[0];
      // prettier-ignore
      catalogue.appendChild(item).appendChild(picture).style.backgroundImage = `url("${pictureUrl}")`;

      let catalogueItems = document.querySelectorAll(".catalogue-item");
      catalogueItems.forEach((el) => el.appendChild(textDiv));
      let textDivs = document.querySelectorAll(".text-container");
      textDivs.forEach((el) => {
        el.appendChild(country);
        el.appendChild(description);
      });
    }
  }
  displayOverlay() {
    let catalogueItem = document.querySelectorAll(".catalogue-item");
    let overlay = document.querySelector(".overlay");
    let cancel = document.querySelector(".close-overlay");
    catalogueItem.forEach((item) =>
      item.addEventListener("click", () => {
        overlay.style.display = "flex";
      })
    );
    cancel.addEventListener("click", () => (overlay.style.display = "none"));
  }
}
