import React, { Component } from "react";
import { Route } from "react-router-dom";
import { toast } from "react-toastify";
import TMDBAPI from "../../services/TMDBAPI";
import routes from "../../routes";
import Loading from "../../Components/Loading/Loading";
import MovieDetails from "../../Components/MovieDetails/MovieDetails";
import AdditionalInfo from "../../Components/AdditionalInfo/AdditionalInfo";
import styles from "./MovieDetailsPage.module.css";

export default class MovieDetailsPage extends Component {
  state = { movie: {}, loading: false, error: null };

  componentDidMount() {
    this.setState({ loading: true });

    TMDBAPI.fetchMovieDetailsWithId(this.props.match.params.movieId)
      .then((movie) => this.setState({ movie }))
      .catch((error) =>
        this.notification(
          `Oops...Something went wrong. Error: ${error.status_message}`
        )
      )
      .finally(() => this.setState({ loading: false }));
  }

  notification = (message) => {
    toast.info(message);
  };

  handleGoBack = () => {
    const { state } = this.props.location;

    state && state.from
      ? this.props.history.push(state.from)
      : this.props.history.push("/movies");
  };

  render() {
    const { loading, movie } = this.state;

    return (
      <>
        {loading && <Loading />}
        <button
          className={styles.button}
          type="button"
          onClick={this.handleGoBack}
        >
          Back to the List of Movies
        </button>
        {movie && (
          <>
            <MovieDetails movie={this.state.movie} />
            <AdditionalInfo props={this.props} />{" "}
          </>
        )}
        {routes.map(({ label, path, isExact, isInAddInfo, component }) =>
          isInAddInfo ? (
            <Route
              key={label}
              path={path}
              exact={isExact}
              component={component}
            />
          ) : null
        )}
      </>
    );
  }
}
