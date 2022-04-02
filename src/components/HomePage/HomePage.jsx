import { useState, useEffect } from 'react';
import { getTrendingFilms } from 'components/services/FilmsApi';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';
import styled from 'styled-components';

const Title = styled.h1`
  margin-left: 20px;
  color: orange;
`;

const Item = styled.li`
  margin-bottom: 10px;
  
  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    color: orange;
  }
`;

const List = styled.ul`
  list-style: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 18px;

  &:hover {
    color: orange;
  }
`;  



export default function HomePage() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('idle');

  const override = css`
    display: block;
    margin: 200px auto;
  `;

  useEffect(() => {
      setStatus('pending')
      getTrendingFilms().then(res => {
        setData(res.results);
        setStatus('resolved');
      });
    }, []);

  if (status === 'idle') { 
    return <h1>Welcome!</h1>
  };

  if (status === 'resolved') { 
    return (
      <>
        <Title>Trending today</Title>
        <List>
          {data &&
            data.map(el => {
              return (
                <Item key={el.id}>
                  <StyledLink to={`/movies/${el.id}`}>{el.name ?? el.title}</StyledLink>
                </Item>
              );
            })}
        </List>
      </>
    );
  };

  if (status === 'pending') { 
    return <PacmanLoader color="#F5A623" css={override} size="50px" />;
  };
    
}
