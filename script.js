class SliderPopular {
  constructor(configPopular) {
    this.popularCountry = configPopular;
    this.imgNum = 0;
    this.sliderLeft();
    this.sliderRight();
  }
  sliderLeft() {
    let image = this.popularCountry.images;
    let imageDiv = document.querySelector(".picture-slider-container");
    let btnLeft = document.querySelector(".btn-left");
    btnLeft.addEventListener("click", () => {
      this.removeSrc(imageDiv);

      this.imgNum--;
      if (this.imgNum < 0) {
        this.imgNum = image.length - 1;
        imageDiv.style.backgroundImage = `url("${image[this.imgNum]}")`;
      } else {
        imageDiv.style.backgroundImage = `url("${image[this.imgNum]}")`;
      }
      console.log(this.imgNum);
    });
  }
  sliderRight() {
    let image = this.popularCountry.images;
    let imageDiv = document.querySelector(".picture-slider-container");
    let btnRight = document.querySelector(".btn-right");
    btnRight.addEventListener("click", () => {
      this.removeSrc(imageDiv);
      this.imgNum++;
      if (this.imgNum >= image.length) {
        this.imgNum = 0;
        imageDiv.style.backgroundImage = `url("${image[this.imgNum]}")`;
      } else {
        imageDiv.style.backgroundImage = `url("${image[this.imgNum]}")`;
      }

      console.log(this.imgNum);
    });
  }
  removeSrc(imageDiv) {
    imageDiv.style.backgroundImage = "none";
  }
}
