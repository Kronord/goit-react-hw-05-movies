import { useState, useEffect } from 'react';
import { getTrendingFilms } from 'components/services/FilmsApi';
import { css } from '@emotion/react';
import { PacmanLoader } from 'react-spinners';
import { Title, Item, List, StyledLink } from './HomePage.style';

export default function HomePage() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('idle');

  const override = css`
    display: block;
    margin: 200px auto;
  `;

  useEffect(() => {
    setStatus('pending');
    getTrendingFilms().then(res => {
      setData(res.results);
      setStatus('resolved');
    }).catch(error => setStatus('rejected'));
  }, []);

  if (status === 'idle') {
    return <Title>Trending today</Title>;
  }

  if (status === 'resolved') {
    return (
      <>
        <Title>Trending today</Title>
        <List>
          {data &&
            data.map(({id, name, title}) => {
              return (
                <Item key={id}>
                  <StyledLink to={`/movies/${id}`}>
                    {name ?? title}
                  </StyledLink>
                </Item>
              );
            })}
        </List>
      </>
    );
  }

  if (status === 'pending') {
    return <PacmanLoader color="#F5A623" css={override} size="50px" />;
  }

  if (status === 'rejected') { 
    return <h1>Sorry, we don`t have any information</h1>
  };
}
