import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  margin-left: 20px;
  color: orange;
`;

export const Item = styled.li`
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    color: orange;
  }
`;

export const List = styled.ul`
  list-style: none;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 18px;

  &:hover {
    color: orange;
  }
`;