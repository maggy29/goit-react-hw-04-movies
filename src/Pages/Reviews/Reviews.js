import React, { Component } from "react";
import TMDBAPI from "../../services/TMDBAPI";
import Loading from "../../Components/Loading/Loading";
import { toast } from "react-toastify";
import SmoothScroll from "../../utils/SmoothScroll";
import ReviewsList from "../../Components/ReviewsList/ReviewsList";
import styles from "./Reviews.module.css";
export default class Reviews extends Component {
  state = { reviews: [], loading: false, error: null };

  componentDidMount() {
    this.setState({ loading: true });

    TMDBAPI.fetchReviewsWithMovieId(this.props.match.params.movieId)
      .then((reviews) => this.setState({ reviews }))
      .catch((error) =>
        this.notification(
          `Oops...Something went wrong. Error: ${error.status_message}`
        )
      )
      .finally(() => {
        this.setState({ loading: false });
        SmoothScroll();
      });
  }

  handleCloseReviews = () => {
    const { state } = this.props.location;
    if (state && state.from) return this.props.history.push(state.from);
  };

  handleBackToListOfMovies = () => {
    const { state } = this.props.location;
    if (state && state.from && state.from.state && state.from.state.from)
      return this.props.history.push(state.from.state.from);
  };

  notification = (message) => {
    toast.info(message);
  };

  render() {
    const { reviews, loading } = this.state;

    return (
      <>
        {loading && <Loading />}

        {reviews.length > 0 ? (
          <ReviewsList reviews={reviews} />
        ) : (
          <p>We have no reviews for this movie</p>
        )}
        <button
          className={styles.button}
          type="button"
          onClick={this.handleCloseReviews}
        >
          Close Reviews
        </button>
        <button
          className={styles.button}
          type="button"
          onClick={this.handleBackToListOfMovies}
        >
          Back to List of Movies
        </button>
      </>
    );
  }
}
