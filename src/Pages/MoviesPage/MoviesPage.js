import React, { Component } from "react";
import getQueryParams from "../../utils/getQueryParams";
import TMDBAPI from "../../services/TMDBAPI";
import { toast } from "react-toastify";
import Loading from "../../Components/Loading/Loading";
import Searchbox from "../../Components/Searchbox/Searchbox";
import MoviesListByQuery from "../../Components/MoviesListByQuery/MoviesListByQuery";
export default class MoviesPage extends Component {
  state = { movies: [], loading: false, error: null, query: null };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);
    if (query) {
      this.fetchWithQuery(query);
      this.setState({ query: query });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (prevQuery !== nextQuery) {
      this.fetchWithQuery(nextQuery);
    }
  }

  fetchWithQuery = (query) => {
    this.setState({ loading: true });

    TMDBAPI.fetchMoviesWithQuery(query)
      .then((movies) => this.setState({ movies }))
      .catch((error) =>
        this.notification(
          `Oops...Something went wrong. Error: ${error.status_message}`
        )
      )
      .finally(() => this.setState({ loading: false }));
  };

  handleChangeQuery = (query) => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  notification = (message) => {
    toast.info(message);
  };

  render() {
    const { match, location } = this.props;
    const { loading, movies } = this.state;

    return (
      <>
        <Searchbox onSubmit={this.handleChangeQuery} />
        {loading && <Loading />}
        {movies.length > 0 && (
          <MoviesListByQuery
            movies={movies}
            location={location}
            match={match}
          />
        )}
      </>
    );
  }
}
