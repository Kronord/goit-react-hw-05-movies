import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Wrapper, StyledNavLink } from './App.style';

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
      <Wrapper>
        <StyledNavLink to="/" end>
          Home
        </StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </Wrapper>

      <Suspense fallback={<h1>Download</h1>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MoviesDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to={'/'} />} />
        </Routes>
      </Suspense>
    </>
  );
};
