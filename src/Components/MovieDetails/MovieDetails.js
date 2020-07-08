import React from "react";
import TMDBAPI from "../../services/TMDBAPI";
import PropTypes from "prop-types";
import styles from "./MovieDetails.module.css";

function MovieDetails({ movie }) {
  const { poster_path, title, genres, overview, vote_average } = movie;
  const imageSize = "/w300";

  return (
    <div className={styles.container}>
      {poster_path ? (
        <img
          src={`${TMDBAPI.baseImgURL}${imageSize}${poster_path}`}
          alt={title}
        />
      ) : (
        <img
          src={TMDBAPI.posterPlaceholder}
          alt={title}
          width="200"
          height="300"
        />
      )}
      <div className={styles.infoContainer}>
        <h2>{title}</h2>
        <p>User Score: {vote_average * 10}% </p>
        <h4>Overview:</h4>
        <p>{overview}</p>
        <h4>Genres:</h4>
        <p>{genres && genres.map((gendre) => gendre.name).join(", ")}</p>
      </div>
    </div>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieDetails;
