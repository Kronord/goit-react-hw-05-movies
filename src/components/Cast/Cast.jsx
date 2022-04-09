import useFetchCast from 'components/Hooks/useFetchCast';
import { css } from '@emotion/react';
import { PacmanLoader } from 'react-spinners';
import { List, Item, Photo } from './Cast.Style';

export default function Cast() {
  const { data, status } = useFetchCast();

  const override = css`
    display: block;
    margin: 200px auto;
  `;

  if (status === 'idle') {
    return <h1>Welcome</h1>;
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
          data.map(({profile_path, cast_id, name}) => {
            let imgUrl = `https://image.tmdb.org/t/p/w500${profile_path}`;
            if (profile_path === null) {
              imgUrl =
                'https://pipesak.com/wp-content/uploads/2019/09/Mike-Place-Holder-PipeSak-About-Page.jpg';
            }
            return (
              <Item key={cast_id}>
                <Photo src={imgUrl} alt="profile" />
                <p>{name}</p>
              </Item>
            );
          })}
      </List>
    );
  }

  if (status === 'rejected') { 
    return <h1>Sorry, we don`t have any information</h1>
  };
}
