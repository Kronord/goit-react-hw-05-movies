import { useState, useEffect } from 'react';
import { searchFilms } from 'components/services/FilmsApi';
import { css } from '@emotion/react';
import { PacmanLoader } from 'react-spinners';
import { Item, List, StyledLink, Input, Button, Form } from './Movies.style';
import { useLocation, useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const [data, setData] = useState();
  const [film, setFilm] = useState('');
  const [status, setStatus] = useState('idle');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const override = css`
    display: block;
    margin: 200px auto;
  `;

  useEffect(() => {
    if (location.search !== '') {
      setStatus('pending');
      searchFilms(searchParams.get('query')).then(res => {
        setData(res.results);
        setStatus('resolved');
      });
    }
  }, [location.search, searchParams]);

  const handleChange = e => setFilm(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams(`query=${film}`);
    setStatus('pending');
    searchFilms(film).then(res => {
      setData(res.results);
      setStatus('resolved');
    });
  };

  if (status === 'idle') {
    return (
      <Form onSubmit={handleSubmit}>
        <Input type="text" value={film} onChange={handleChange} />
        <Button type="submit">Search</Button>
      </Form>
    );
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
                    search: location.search,
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
  }
}
