import useFetchMoviesPage from 'components/Hooks/useFetchMoviesPage';
import { useState } from 'react';
import { css } from '@emotion/react';
import { PacmanLoader } from 'react-spinners';
import { Item, List, StyledLink, Input, Button, Form } from './Movies.style';
import { useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const [film, setFilm] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, status, location } = useFetchMoviesPage(searchParams);

  const override = css`
    display: block;
    margin: 200px auto;
  `;

  const handleChange = e => setFilm(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({query: `${film}`});
  };

  if (status === 'idle') {
    return (
      <Form onSubmit={handleSubmit}>
        <Input type="text" value={film} onChange={handleChange} />
        <Button type="submit">Search</Button>
      </Form>
    );
  };

  if (status === 'pending') {
    return (
      <PacmanLoader
        color="#F5A623"
        css={override}
        size="50px"
        speedMultiplier="4"
      />
    );
  };

  if (status === 'resolved') {
    return (
      <div>
        <Form onSubmit={handleSubmit}>
          <Input type="text" value={film} onChange={handleChange} />
          <Button type="submit">Search</Button>
        </Form>

        <List>
          {data.map(({id, name, title}) => {
            return (
              <Item key={id}>
                <StyledLink
                  to={{
                    pathname: `${id}`,
                  }}
                  state={{
                    from: location,
                  }}
                >
                  {name ?? title}
                </StyledLink>
              </Item>
            );
          })}
        </List>
      </div>
    );
  };

  if (status === 'rejected') {
    return <h1>Sorry, we don`t found this movie</h1>;
  };
}
