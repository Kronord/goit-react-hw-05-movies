import { useState } from 'react';
import { searchFilms } from 'components/services/FilmsApi';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import { PacmanLoader } from 'react-spinners';
import styled from 'styled-components';

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

const Input = styled.input`
  display: inline-block;
  margin: 0 10px 0 20px;
  width: 200px;
  font: inherit;
  border: 2px solid;
  border-radius: 5px;
  border-color: orange;
  font-size: 20px;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
`;

const Button = styled.button`
  width: 70px;
  height: 29px; 
  color: #fff;
  border: 2px solid;
  border-radius: 5px;
  border-color: #ff8c00;
  background-color: #ffa50088;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export default function MoviesPage() {
  const [data, setData] = useState();
  const [film, setFilm] = useState('');
  const [status, setStatus] = useState('idle');

  const override = css`
    display: block;
    margin: 200px auto;
  `;

  const handleChange = e => setFilm(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
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
          {data.map(el => {
            return (
              <Item key={el.id}>
                <StyledLink to={`/movies/${el.id}`}>{el.name ?? el.title}</StyledLink>
              </Item>
            );
          })}
        </List>
      </div>
    );
  }
}
