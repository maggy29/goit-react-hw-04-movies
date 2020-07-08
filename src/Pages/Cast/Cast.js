import React, { Component } from "react";
import TMDBAPI from "../../services/TMDBAPI";
import Loading from "../../Components/Loading/Loading";
import { toast } from "react-toastify";
import SmoothScroll from "../../utils/SmoothScroll";
import CastList from "../../Components/CastList/CastList";
import styles from "./Cast.module.css";

export default class Cast extends Component {
  state = { cast: null, loading: false, error: null };

  componentDidMount() {
    this.setState({ loading: true });

    TMDBAPI.fetchCastWithMovieId(this.props.match.params.movieId)
      .then((cast) => this.setState({ cast }))
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

  handleCloseCast = () => {
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
    const { cast, loading } = this.state;

    return (
      <>
        {loading && <Loading />}
        {cast && <CastList cast={cast} />}
        <button
          className={styles.button}
          type="button"
          onClick={this.handleCloseCast}
        >
          Close Cast
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
