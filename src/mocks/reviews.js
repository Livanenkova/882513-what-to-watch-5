export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const generateCommentTime = () => {
  const time = parseInt(new Date().getTime(), 10);
  return getRandomInteger(time, 12);
};

const generateReview = () => {
  return {
    text: `test review`,
    rate: getRandomInteger(1.1, 10).toFixed(1),
    author: `noname`,
    time: generateCommentTime()
  };
};

const generateReviews = () => {
  const reviews = [];
  for (let i = 0; i < 8; i++) {
    reviews.push(generateReview());
  }
  return reviews;
};

export const allReviews = generateReviews();
