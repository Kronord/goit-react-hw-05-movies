import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout/Layout';

const HomePage = lazy(() =>
  import('./HomePage/HomePage' /* webpackChunkName: 'HomePage' */)
);
const Cast = lazy(() => import('./Cast/Cast' /* webpackChunkName: 'Cast' */));
const MoviesDetailsPage = lazy(() =>
  import(
    './MoviesDetailsPage/MoviesDetailsPage' /* webpackChunkName: 'MovieDetails' */
  )
);
const MoviesPage = lazy(() =>
  import('./MoviesPage/MoviesPage' /* webpackChunkName: 'MoviePage' */)
);
const Reviews = lazy(() =>
  import('./Reviews/Reviews' /* webpackChunkName: 'Reviews' */)
);

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MoviesDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to={'/'} />} />
        </Route>
      </Routes>
    </>
  );
};
