import { lazy } from "react";

const HomePage = lazy(() =>
  import("./Pages/HomePage/HomePage" /*webpackChunkName: "HomePage"*/)
);
const MoviesPage = lazy(() =>
  import("./Pages/MoviesPage/MoviesPage" /*webpackChunkName: "MoviesPage"*/)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./Pages/MovieDetailsPage/MovieDetailsPage" /*webpackChunkName: "MovieDetailsPage"*/
  )
);
const NotFound = lazy(() =>
  import("./Pages/NotFound/NotFound" /*webpackChunkName: "NotFound"*/)
);
const Cast = lazy(() =>
  import("./Pages/Cast/Cast" /*webpackChunkName: "Cast"*/)
);
const Reviews = lazy(() =>
  import("./Pages/Reviews/Reviews" /*webpackChunkName: "Reviews"*/)
);

const routes = [
  {
    label: "Home",
    path: "/",
    isExact: true,
    isInNavMenu: true,
    isInAddInfo: false,
    component: HomePage,
  },
  {
    label: "Movies",
    path: "/movies",
    isExact: true,
    isInNavMenu: true,
    isInAddInfo: false,
    component: MoviesPage,
  },
  {
    label: "MoviesDelails",
    path: "/movies/:movieId",
    isExact: false,
    isInNavMenu: false,
    isInAddInfo: false,
    component: MovieDetailsPage,
  },
  {
    label: "Cast",
    forUrlAdd: "cast",
    path: "/movies/:movieId/cast",
    isExact: true,
    isInNavMenu: false,
    isInAddInfo: true,
    component: Cast,
  },
  {
    label: "Reviews",
    forUrlAdd: "reviews",
    path: "/movies/:movieId/reviews",
    isExact: true,
    isInNavMenu: false,
    isInAddInfo: true,
    component: Reviews,
  },
  {
    label: "NotFound",
    path: null,
    isExact: false,
    isInNavMenu: false,
    isInAddInfo: false,
    component: NotFound,
  },
];

export default routes;
