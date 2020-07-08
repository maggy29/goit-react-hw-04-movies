const baseURL = "https://api.themoviedb.org/3";
const baseImgURL = "https://image.tmdb.org/t/p";
const APIKeyV3 = "31b24e0a66c0bbe28612d035f3c6a86f";
const posterPlaceholder =
  "https://nwamotherlode.com/wp-content/uploads/2011/06/movie-graphic-placeholder.jpg";

const fetchTrendingMovies = () => {
  return fetch(
    `${baseURL}/trending/all/day?api_key=${APIKeyV3}&language=en-US&page=1`
  )
    .then((data) => data.json())
    .then((dataJson) => dataJson.results);
};

const fetchMoviesWithQuery = (query) => {
  return fetch(
    `${baseURL}/search/movie?api_key=${APIKeyV3}&query=${query}&language=en-US&page=1`
  )
    .then((data) => data.json())
    .then((dataJson) => dataJson.results);
};

const fetchMovieDetailsWithId = (Id) => {
  return fetch(`${baseURL}/movie/${Id}?api_key=${APIKeyV3}`).then((data) =>
    data.json()
  );
};

const fetchCastWithMovieId = (Id) => {
  return fetch(`${baseURL}/movie/${Id}/credits?api_key=${APIKeyV3}`)
    .then((data) => data.json())
    .then((dataJson) => dataJson.cast);
};

const fetchReviewsWithMovieId = (Id) => {
  return fetch(`${baseURL}/movie/${Id}/reviews?api_key=${APIKeyV3}`)
    .then((data) => data.json())
    .then((dataJson) => dataJson.results);
};

export default {
  baseImgURL,
  posterPlaceholder,
  fetchTrendingMovies,
  fetchMoviesWithQuery,
  fetchMovieDetailsWithId,
  fetchCastWithMovieId,
  fetchReviewsWithMovieId,
};
