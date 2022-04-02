import { Route, Routes, NavLink } from "react-router-dom";
import HomePage from './HomePage/HomePage';
import Cast from './Cast/Cast';
import MoviesDetailsPage from './MoviesDetailsPage/MoviesDetailsPage';
import MoviesPage from './MoviesPage/MoviesPage';
import Reviews from './Reviews/Reviews';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
  height: 50px;
  border-bottom: 3px solid orange;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 25px;
  margin-left: 60px;

  &:first-child {
    margin-left: 20px;
  }
`;

export const App = () => {
  return (
    <>
      <Wrapper>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/movies">Movies</StyledNavLink>
      </Wrapper>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MoviesDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
};
