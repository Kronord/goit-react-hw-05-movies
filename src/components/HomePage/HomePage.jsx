import useFetchHomePage from 'components/Hooks/useFetchHomePage';
import { css } from '@emotion/react';
import { PacmanLoader } from 'react-spinners';
import { Title, Item, List, StyledLink } from './HomePage.style';
import { useLocation } from 'react-router-dom';

export default function HomePage() {
  const { data, status } = useFetchHomePage();
  const location = useLocation();

  const override = css`
    display: block;
    margin: 200px auto;
  `;

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
                  <StyledLink to={`/movies/${id}`} state={{from: location}}>
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
