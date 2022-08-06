configPopular = {
  country: "Iceland",
  capital: "Reykjavík",
  official_language: "Icelandic",
  images: [
    "/images/iceland.jpg",
    "/images/iceland1.jpg",
    "/images/iceland2.jpg",
  ],
};

config = {
  Iceland: {
    capital: "Reykjavík",
    official_language: "Icelandic",
    images: [
      "/images/iceland.jpg",
      "/images/iceland1.jpg",
      "/images/iceland2.jpg",
    ],
  },
  Sweden: {
    capital: "Stockholm",
    official_language: "Swedish",
    images: [
      "/images/sweden.jpg",
      "/images/sweden1.jpg",
      "/images/sweden2.jpg",
    ],
  },
  Switzerland: {
    capital: "Bern",
    official_language: "German",
    images: [
      "/images/switzerland.jpg",
      "/images/switzerland1.jpg",
      "/images/switzerland2.jpg",
    ],
  },
  Hawaii: {
    capital: "Honolulu",
    official_language: "English",
    images: [
      "/images/hawaii.jpg",
      "/images/hawaii1.jpg",
      "/images/hawaii2.jpg",
    ],
  },
  Thailand: {
    capital: "Bangkok",
    official_language: "Thai",
    images: [
      "/images/thailand.jpg",
      "/images/thailand1.jpg",
      "/images/thailand2.jpg",
    ],
  },
  Japan: {
    capital: "Tokyo",
    official_language: "Japanese",
    images: [
      "/images/japan.jpg",
      "/images/japan1.jpg",
      "/images/japan2.jpg",
    ],

  },
  Egypt:{
    capital:"Cairo",
    official_language:"Arabic",
    images: [
      "/images/egypt.jpg",
      "/images/egypt1.jpg",
      "/images/egypt2.jpg",
    ],
  }
};

let sliderPopular = new SliderPopular(configPopular);
let destinationList = new DestinationList(config);
