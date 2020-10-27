import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {allFilms} from './mocks/films.js';
import {allReviews} from './mocks/reviews';

const movie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

ReactDOM.render(
    <App
      title={movie.title} genre={movie.genre} year={movie.year}
      films = {allFilms}
      Reviews = {allReviews} />,
    document.querySelector(`#root`)

);

