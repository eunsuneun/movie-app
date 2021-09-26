import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Movie.css';

function Movie({ year, title, summary, poster, genres }) {
  return (
    <Link
      className='movie'
      to={{
        pathname: '/movie-detail',
        state: {
          year,
          title,
          summary,
          poster,
          genres,
        },
      }}>
      <img src={poster} title={title} alt={title} />
      <div className='movie__data'>
        <h3 className='movie__title'>{title}</h3>
        <p className='movie__year'>{year}</p>
        <ul className='movie__genres'>
          {genres.map((genre, index) => (
            <li key={index} className='genre'>
              {genre}
            </li>
          ))}
        </ul>
        <p className='movie__summary'>{summary.slice(0, 180)}...</p>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
