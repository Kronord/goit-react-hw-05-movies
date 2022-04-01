import { Route, Routes, NavLink } from "react-router-dom";
import HomePage from './HomePage/HomePage';
// import Cast from './Cast/Cast';
import MoviesDetailsPage from './MoviesDetailsPage/MoviesDetailsPage';
import MoviesPage from './MoviesPage/MoviesPage';
// import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MoviesDetailsPage />}>
          {/* <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} /> */}
        </Route>
      </Routes>
    </>
  );
};
