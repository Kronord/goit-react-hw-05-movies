import { getMovieReviews } from 'components/services/FilmsApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { css } from '@emotion/react';
import { PacmanLoader } from 'react-spinners';
import styled from 'styled-components';

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 20px;
`;

const Subtitle = styled.h4`
    color: orange;
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
        setStatus('pending')
        getMovieReviews(movieId).then(res => {
            setData(res.results);
            setStatus('resolved');
        })
    }, [movieId]);

    if (status === 'idle') { 
        return <h1>Welcome!</h1>
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
                  <li key={el.id}>
                    <Subtitle>{el.author}</Subtitle>
                    <p>{el.content}</p>
                  </li>
                );
              })}
          </List>
        );
    };    
};