import React from "react";
import TMDBAPI from "../../services/TMDBAPI";
import styles from "./CastList.module.css";
function CastList({ cast }) {
  const imageSize = "/w200";

  return (
    <ul className={styles.container}>
      {cast.map((castItem) => (
        <li className={styles.item} key={castItem.id}>
          {castItem.profile_path ? (
            <img
              src={`${TMDBAPI.baseImgURL}${imageSize}${castItem.profile_path}`}
              alt={castItem.name}
            />
          ) : (
            <img
              src={TMDBAPI.posterPlaceholder}
              alt={castItem.name}
              width="200"
              height="300"
            />
          )}
          <h4>{castItem.name}</h4>
          <p>Character: {castItem.character}</p>
        </li>
      ))}
    </ul>
  );
}

export default CastList;
