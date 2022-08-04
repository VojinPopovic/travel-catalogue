configPopular = {
  country: "Iceland",
  capital: "Reykjavík",
  official_language: "Icelandic",
  // prettier-ignore
  images: ["/images/iceland.jpg","/images/iceland1.jpg","/images/iceland2.jpg",],
};

config = {
  Iceland: {
    capital: "Reykjavík",
    official_language: "Icelandic",
    images: ["/images/iceland.jpg", "/images/iceland1.jpg", "/images/iceland2.jpg"],
  },
  Sweden: {
    capital: "Stockholm",
    official_language: "Swedish",
    images: ["/images/sweden.jpg", "/images/sweden1.jpg", "/images/sweden2.jpg"],
  },
  Switzerland: {
    capital: "Bern",
    official_language: "German",
    // prettier-ignore
    images: ["/images/switzerland.jpg","/images/switzerland1.jpg","/images/switzerland2.jpg",
    ],
  },
  Hawaii: {
    capital: "Honolulu",
    official_language: "English",
    images: ["/images/hawaii.jpg", "/images/hawaii1.jpg", "/images/hawaii2.jpg"],
  },
};

let sliderPopular = new SliderPopular(configPopular);
let destinationList = new DestinationList(config);
