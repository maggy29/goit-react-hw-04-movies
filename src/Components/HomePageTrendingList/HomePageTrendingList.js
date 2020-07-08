import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function HomePageTrendingList({ movies, location }) {
  return (
    <ul>
      {movies.map(({ id, title }) => {
        if (title) {
          return (
            <li key={id}>
              <Link
                to={{
                  pathname: `movies/${id}`,
                  state: { from: location },
                }}
              >
                {title}
              </Link>
            </li>
          );
        }
      })}
    </ul>
  );
}

HomePageTrendingList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape).isRequired,
  location: PropTypes.object.isRequired,
};

export default HomePageTrendingList;
