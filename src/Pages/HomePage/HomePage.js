import React, { Component } from "react";
import TMDBAPI from "../../services/TMDBAPI";
import { toast } from "react-toastify";
import Loading from "../../Components/Loading/Loading";
import HomePageTrendingList from "../../Components/HomePageTrendingList/HomePageTrendingList";
import styles from "./HomePage.module.css";

export default class HomePage extends Component {
  state = { movies: [], loading: false, error: null };

  componentDidMount() {
    this.setState({ loading: true });

    TMDBAPI.fetchTrendingMovies()
      .then((movies) => this.setState({ movies }))
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

  render() {
    const { loading, movies } = this.state;
    return (
      <>
        <h2 className={styles.title}>Trending today</h2>
        {loading && <Loading />}
        {movies.length > 0 && (
          <HomePageTrendingList
            movies={this.state.movies}
            location={this.props.location}
          />
        )}
      </>
    );
  }
}
