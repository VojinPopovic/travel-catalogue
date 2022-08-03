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
    descriptionA.setAttribute("href", `https://en.wikipedia.org/wiki/${this.popularCountry.country}`)
    sliderContainer
      .appendChild(descriptionDiv)
      .appendChild(descriptionUl)
      .appendChild(descriptionLi)
      .appendChild(descriptionA).classList = "country";
    // prettier-ignore
    let countryLink = document.querySelector(".country").innerHTML = `Country: ${this.popularCountry.country}`;

    sliderContainer
      .appendChild(descriptionDiv)
      .appendChild(descriptionUl)
      .appendChild(descriptionLi)
      .appendChild(descriptionA.cloneNode()).classList = "capital";
    // prettier-ignore
    let capitalLink = document.querySelector(".capital").innerHTML = `Capital: ${this.popularCountry.capital}`;
  }
}
