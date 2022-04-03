import { getMovieReviews } from 'components/services/FilmsApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { css } from '@emotion/react';
import { PacmanLoader } from 'react-spinners';
import { List, Subtitle, WarnMessage } from './Reviews.style';

export default function Cast() {
  const [data, setData] = useState([]);
  const { movieId } = useParams();
  const [status, setStatus] = useState('idle');

  const override = css`
    display: block;
    margin: 200px auto;
  `;

  useEffect(() => {
    setStatus('pending');
    getMovieReviews(movieId)
      .then(res => {
        setData(res.results);
        console.log(res);
        data.length > 0 ? setStatus('resolved') : setStatus('rejected');
      })
      .catch(error => setStatus('rejected'));
  }, [data.length, movieId]);

  if (status === 'idle') {
    return <h1>Welcome!</h1>;
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
      <List>
        {data &&
          data.map(({id, author, content}) => {
            return (
              <li key={id}>
                <Subtitle>{author}</Subtitle>
                <p>{content}</p>
              </li>
            );
          })}
      </List>
    );
  }

  if (status === 'rejected') {
    return <WarnMessage>We don`t have any reviews for this movie</WarnMessage>;
  }
}
