import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function MoviesListByQuery(props) {
  const { movies, location, match } = props;
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link
            to={{
              pathname: `${match.url}/${id}`,
              state: { from: location },
            }}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

MoviesListByQuery.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape).isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default MoviesListByQuery;
