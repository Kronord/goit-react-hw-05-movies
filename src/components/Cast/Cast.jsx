import { getMovieCredits } from "components/services/FilmsApi";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { css } from '@emotion/react';
import { PacmanLoader } from 'react-spinners';
import styled from 'styled-components';

const List = styled.ul`
    display: flex;
    margin: 0 20px;
    padding: 0;
    flex-wrap: wrap;
    list-style: none;
`;

const Item = styled.li`
    width: 100px;
    margin: 0 23px 10px 0;
`;

const Photo = styled.img`
    width: 100px;
`;

export default function Cast() { 
    const [data, setData] = useState(null);
    const { movieId } = useParams();
    const [status, setStatus] = useState('idle');

    const override = css`
      display: block;
      margin: 200px auto;
    `;

    useEffect(() => {
        setStatus('pending');
        getMovieCredits(movieId).then(res => {
            setData(res.cast);
            setStatus('resolved');
        })
    }, [movieId]);

    console.log(data);

    if (status === 'idle') { 
        return <h1>Welcome</h1>
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
          <List>
            {data &&
              data.map(el => {
                return (
                  <Item key={el.cast_id}>
                    <Photo
                      src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
                      alt="profile"
                    />
                    <p>{el.name}</p>
                  </Item>
                );
              })}
          </List>
        );
    };
};