const request = {
  getShows: () => {
    return [
      {
        Id: 1,
        Name: "Game of thrones",
        image: "https://i.ytimg.com/sh/ow8-ZftRoZelY710tvO45Q/market.jpg",
        Description: "Some description"
      },
      {
        Id: 2,
        Name: "Ray Donovan",
        image:
          "https://m.media-amazon.com/images/M/MV5BNWMwMjUyYmMtODYyOS00YjYwLWE0NjQtMGJiYzVmOGVjOGQ0XkEyXkFqcGdeQXVyOTA3MTMyOTk@._V1_.jpg",
        Description: "Some description"
      },
      {
        Id: 3,
        Name: "The Good Place",
        image: "http://writingexercises.co.uk/random-images.php",
        Description: "Some description"
      },
      {
        Id: 4,
        Name: "Baskets",
        image: "http://writingexercises.co.uk/random-images.php",
        Description: "Some description"
      }
    ];
  }
};

export default {
  request
};
