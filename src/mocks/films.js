// Функция из интернета по генерации случайного числа из диапазона
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const generatePreviewPosters = () => {
  const posters = [
    `avatar.jpg`,
    `aviator.jpg`,
    `bohemian-rhapsody.jpg`,
    `dardjeeling-limited.jpg`,
    `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    `johnny-english.jpg`,
    `macbeth.jpg`,
    `midnight-special.jpg`,
    `mindhunter.jpg`,
    `moonrise-kingdom.jpg`,
    `no-country-for-old-men.jpg`,
    `orlando.jpg`,
    `pulp-fiction.jpg`,
    `shutter-island.jpg`,
    `snatch.jpg`,
    `we-need-to-talk-about-kevin.jpg`,
    `what-we-do-in-the-shadows.jpg`,
  ];
  const randomIndex = getRandomInteger(0, posters.length - 1);
  return `img/` + posters[randomIndex];
};

const generateId = () => Date.now() + parseInt(Math.random() * 10000, 10);

const titles = [
  `Aviator`,
  `Bohemian Rhapsody`,
  `Dardjeeling Limited`,
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Johnny English`,
  `Macbeth`,
  `Midnight Special`,
  `Mindhunter`,
  `Moonrise Kingdom`,
  `No Country for Old Men`,
  `Orlando`,
  `Pulp Fiction`,
  `Shutter-island`,
  `Snatch`,
  `We Need to Talk About Kevin`,
  `What We Do in the Shadows`,
];

const directors = [
  `Wes Andreson`,
  `John Doe`,
  `Steven Spielberg`,
  `Quentin Tarantino`,
  `Alfred Hitchcoc`,
  `Christopher Nolan`,
  `Ridley Scott`,
  `Clint Eastwood`,
];

const actors = [
  `Bill Murray`,
  `Jude Law`,
  `Willem Dafoe`,
  `Saoirse Ronan`,
  `Jeff Goldblum`,
  `Adrien Brody`,
  `Tilda Swinton`,
  `Tony Revoloru`,
  `Tom Wilkinson`,
];

const genres = [
  `Drama`,
  `Comedies`,
  `Documentary`,
  `Horror`,
  `Kids & Family`,
  `Romance`,
  `Sci-Fi`,
  `Thrillers`,
];

const getImage = (title) => {
  return `img/${title}.jpg`;
};

const getRatingDescription = (value) => {
  let text = ``;
  switch (true) {
    case value === 10:
      text = `Awesome`;
      break;
    case value > 8:
      text = `Very good`;
      break;
    case value > 5:
      text = `Good`;
      break;
    case value > 3:
      text = `Normal`;
      break;
    case value > 0:
      text = `Bad`;
      break;
  }
  return text;
};

const generateDescription = () => {
  const descriptions =
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.
    Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis
    sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.
    Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue
    convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus
    sit amet tempus.`
  ;

  const description = descriptions.split(`. `);
  const randomIndex = getRandomInteger(0, description.length - 1);
  const descriptionContainer = [];

  for (let i = 0; i <= randomIndex; i++) {
    descriptionContainer.push(description[getRandomInteger(0, description.length - 1)]);

  }

  const renderComment = descriptionContainer.join(`.`);

  return renderComment;
};

const generateFilm = () => {
  const title = titles[getRandomInteger(0, titles.length - 1)];
  const rating = getRandomInteger(1.1, 10).toFixed(1);

  return {
    id: generateId(),
    preview: {
      title,
      src: getImage(title),
    },
    moreInfo: {
      backGroundSrc: getImage(title),
      posterSrc: generatePreviewPosters(),
      genre: genres[getRandomInteger(0, genres.length - 1)],
      releaseDate: Math.min(getRandomInteger(1970, 2020)),
      playVideoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      isAddToMyList: Boolean(getRandomInteger(0, 1))
    },
    overview: {
      description: generateDescription(),
      rating,
      ratingDescription: getRatingDescription(rating),
      ratingCount: getRandomInteger(0, 400),
      director: directors[getRandomInteger(0, directors.length - 1)],
      actorsList: actors[getRandomInteger(0, 4)],
    },
    details: {
      director: directors[getRandomInteger(0, directors.length - 1)],
      allActors: actors[getRandomInteger(0, 8)],
      runtime: getRandomInteger(60, 200),
    }
  };
};

const generateFilms = () => {
  const films = [];
  for (let i = 0; i < 8; i++) {
    films.push(generateFilm());
  }
  return films;
};

console.log(generateFilms());

const allFilms = generateFilms();

export default allFilms;
