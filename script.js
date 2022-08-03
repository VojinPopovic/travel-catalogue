class SliderPopular {
  constructor(configPopular) {
    this.popularCountry = configPopular;
    this.sliderLeft();
    this.sliderRight()
  }
  sliderLeft() {
    let image = this.popularCountry.images;
    let imageDiv = document.querySelector(".picture-slider-container");
    let btnLeft = document.querySelector(".btn-left");
    let imgNum = 0;
    btnLeft.addEventListener("click", () => {
      this.removeSrc(imageDiv);
      if (imgNum < 0) {
        imgNum = image.length - 1;
        imageDiv.style.backgroundImage = `url("${image[imgNum]}")`;
        imageDiv.style.transition = "all 0.5s";
      } else {
        imageDiv.style.backgroundImage = `url("${image[imgNum]}")`;
        imageDiv.style.transition = "all 0.5s";
      }
      imgNum--;
    });
  }
  sliderRight() {
    let image = this.popularCountry.images;
    let imageDiv = document.querySelector(".picture-slider-container");
    let btnRight = document.querySelector(".btn-right");
    let imgNum = 0;
    btnRight.addEventListener("click", () => {
      this.removeSrc(imageDiv);
      if ((imgNum >= image.length)) {
        imgNum = 0;
        imageDiv.style.backgroundImage = `url("${image[imgNum]}")`;
      } else {
        imageDiv.style.backgroundImage = `url("${image[imgNum]}")`;
      }
      imgNum++;
    });
  }
  removeSrc(imageDiv) {
    imageDiv.style.backgroundImage = "none";
  }
}
