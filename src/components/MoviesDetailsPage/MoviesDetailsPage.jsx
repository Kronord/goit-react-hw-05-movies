import { useParams, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from 'components/services/FilmsApi';
import { css } from '@emotion/react';
import { PacmanLoader } from 'react-spinners';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const StyledImage = styled.img`
  display: block;
  width: 300px;
  margin-left: 20px;
`;

const Wrapper = styled(Container)`
  flex-direction: column;
`;

const DiscrBox = styled(Wrapper)`
  width: 600px;
  margin-left: 50px;
`;

const Title = styled.h2`
  display: block;
  margin-left: 20px;
`;

export default function MovieDetails() {
  const { movieId } = useParams();
  // const match = useMatch('/movies');
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('idle');

  const override = css`
    display: block;
    margin: 200px auto;
  `;

  // console.log(match);

  useEffect(() => {
    setStatus('pending');
    getMovieDetails(movieId)
      .then(res => {
        setData(res);
        setStatus('resolved');
      })
      .catch(error => setStatus('rejected'));
  }, [movieId]);

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
    return (
      <>
        <Title>
          {data.title} &#40;{data.release_date.slice(0, 4)}&#41;
        </Title>
        <Container>
          <Wrapper>
            <StyledImage
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt="poster"
            />
          </Wrapper>
          <DiscrBox>
            <p>Popularity: {data.popularity}</p>
            <p>Tag Line: {data.tagline}</p>
            <h3>Overview</h3>
            <p>{data.overview}</p>
            <h3>Genres</h3>
            <p>{data.genres.map(el => el.name).join(', ')}</p>
          </DiscrBox>
        </Container>
        <Wrapper>
          <h3>Additional Information</h3>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </Wrapper>
        <Outlet />
      </>
    );
  }

  if (status === 'rejected') {
    return <h1>Sorry, we don`t found this movie</h1>;
  }
}
