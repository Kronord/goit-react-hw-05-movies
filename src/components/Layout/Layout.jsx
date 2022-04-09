import { Wrapper, StyledNavLink } from './Layout.style';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export default function Layout() {
  return (
    <>
      <Wrapper>
        <StyledNavLink to="/" end>
          Home
        </StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </Wrapper>
      <Suspense fallback={<h1>Download</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
}
