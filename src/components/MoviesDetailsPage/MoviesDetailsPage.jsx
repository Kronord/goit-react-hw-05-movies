import useFetchDetailsMovie from 'components/Hooks/useFetchDetailsMovie';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import { PacmanLoader } from 'react-spinners';
import {
  Container,
  StyledImage,
  Wrapper,
  InfoLinkBox,
  DiscrBox,
  Title,
  Subtitle,
  StyledLink,
  Button,
} from './MoviesDetails.style';

export default function MovieDetails() {
  const { data, status } = useFetchDetailsMovie();
  const navigate = useNavigate();
  const location = useLocation();

  const override = css`
    display: block;
    margin: 200px auto;
  `;

  const onGoBack = () => {
    if (location.state === null) {
      return navigate('/');
    }
    navigate(location?.state?.from ?? '/movies');
  };

  if (status === 'idle') {
    return <h1>Welcome</h1>;
  }

  if (status === 'pending') {
    return (
      <PacmanLoader
        color="#F5A623"
        css={override}
        size="50px"
        speedMultiplier="4"
      />
    );
  }

  if (status === 'resolved') {
    const {
      title,
      popularity,
      release_date,
      poster_path,
      tagline,
      overview,
      genres,
    } = data;
    
    return (
      <>
        <Button type="button" onClick={onGoBack}>
          Go back
        </Button>
        <Title>
          {title} &#40;{release_date.slice(0, 4)}&#41;
        </Title>
        <Container>
          <Wrapper>
            <StyledImage
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt="poster"
            />
          </Wrapper>
          <DiscrBox>
            <p>Popularity: {popularity}</p>
            <p>Tag Line: {tagline}</p>
            <Subtitle>Overview</Subtitle>
            <p>{overview}</p>
            <Subtitle>Genres</Subtitle>
            <p>{genres.map(el => el.name).join(', ')}</p>
          </DiscrBox>
        </Container>
        <InfoLinkBox>
          <Subtitle>Additional Information</Subtitle>
          <StyledLink
            to={'cast'}
            state={{ from: location.state !== null ? location.state.from : '' }}
          >
            Cast
          </StyledLink>
          <StyledLink
            to={'reviews'}
            state={{ from: location.state !== null ? location.state.from : '' }}
          >
            Reviews
          </StyledLink>
        </InfoLinkBox>
        <Outlet />
      </>
    );
  }

  if (status === 'rejected') {
    return <h1>Sorry, we don`t found this movie</h1>;
  }
}
