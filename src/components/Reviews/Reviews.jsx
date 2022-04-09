import useFetchReviews from 'components/Hooks/useFetchReviews';
import { css } from '@emotion/react';
import { PacmanLoader } from 'react-spinners';
import { List, Subtitle, WarnMessage } from './Reviews.style';

export default function Cast() {
  const { data, status } = useFetchReviews();

  const override = css`
    display: block;
    margin: 200px auto;
  `;

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
