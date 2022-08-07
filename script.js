class DestinationList {
  constructor(config) {
    this.countryList = config;
    this.imgNum = 0;
    this.populateList();
    this.displayOverlay();
  }
  populateList() {
    let catalogue = document.querySelector(".grid-center");
    for (let destination in this.countryList) {
      let item = document.createElement("div");
      let picture = document.createElement("div");
      let textDiv = document.createElement("div");
      let country = document.createElement("h2");
      let description = document.createElement("p");

      country.innerText = `${destination}`;
      description.innerText = `Capital: ${this.countryList[destination].capital} 
      Official language: ${this.countryList[destination].official_language}`;
      item.classList.add(
        "catalogue-item",
        `${this.countryList[destination].category}`
      );
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
      this.filterDestinations(catalogueItems);
      this.mostPopularFinder(destination);
    }
  }
  displayOverlay() {
    let catalogueItem = document.querySelectorAll(".catalogue-item");
    let overlay = document.querySelector(".overlay");
    let cancel = document.querySelector(".close-overlay");
    catalogueItem.forEach((item) =>
      item.addEventListener("click", () => {
        overlay.style.display = "flex";
        let destinationName = item.querySelector("h2").innerText;
        let imageDivClass = "overlay-picture-container";
        this.sliderLeft(destinationName, imageDivClass);
        this.sliderRight(destinationName, imageDivClass);
      })
    );
    cancel.addEventListener("click", () => {
      overlay.style.display = "none";
    });
  }
  filterDestinations(catalogueItems) {
    let selection = document.querySelector("select");
    selection.addEventListener("change", (e) => {
      catalogueItems.forEach((item) => {
        item.style.display = "none";
        if (item.className.includes(e.target.value)) {
          item.style.display = "block";
        }
        if (e.target.value === "all") {
          item.style.display = "block";
        }
      });
    });
  }

  sliderDescription(destination) {
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
    countryLink.innerHTML = `Country: ${destination}`;
    countryLink.setAttribute(
      "href",
      `https://www.google.com/search?q=${destination}`
    );

    sliderContainer
      .appendChild(descriptionDiv)
      .appendChild(descriptionUl)
      .appendChild(descriptionLi)
      .appendChild(descriptionA.cloneNode()).classList = "capital";
    // prettier-ignore
    let capitalLink = document.querySelector(".capital");
    capitalLink.innerHTML = `Capital: ${this.countryList[destination].capital}`;
    capitalLink.setAttribute(
      "href",
      `https://www.google.com/search?q=${this.countryList[destination].capital}`
    );
  }
  mostPopularFinder(destination) {
    if (this.countryList[destination].category.includes("most")) {
      let imageDivClass = "picture-slider-container";
      this.sliderLeft(destination, imageDivClass);
      this.sliderRight(destination, imageDivClass);
      this.sliderDescription(destination);
    }
  }
  sliderLeft(destination, imageDivClass) {
    let image = this.countryList[destination].images;
    let imageDiv = document.querySelector(`.${imageDivClass}`);
    let btnLeft = document.querySelectorAll(".btn-left");
    let btnLeftNew;
    btnLeft.forEach((btn) => {
      this.removeEvents(btn, btnLeftNew).addEventListener("click", (e) => {
        this.imgNum--;
        if (this.imgNum < 0) {
          this.imgNum = image.length - 1;
          imageDiv.style.backgroundImage = `url("${image[this.imgNum]}")`;
        } else {
          imageDiv.style.backgroundImage = `url("${image[this.imgNum]}")`;
        }
      });
    });
  }
  sliderRight(destination, imageDivClass) {
    let image = this.countryList[destination].images;
    let imageDiv = document.querySelector(`.${imageDivClass}`);
    let btnRight = document.querySelectorAll(".btn-right");
    let btnRightNew = [];
    btnRight.forEach((btn) => {
      this.removeEvents(btn, btnRightNew).addEventListener("click", (e) => {
        this.imgNum++;
        if (this.imgNum >= image.length) {
          this.imgNum = 0;
          imageDiv.style.backgroundImage = `url("${image[this.imgNum]}")`;
        } else {
          imageDiv.style.backgroundImage = `url("${image[this.imgNum]}")`;
        }
      });
    });
  }

  removeEvents(btn, newBtn) {
    newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);
    return newBtn;
  }
}
