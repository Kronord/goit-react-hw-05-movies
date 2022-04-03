import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
  height: 50px;
  border-bottom: 3px solid orange;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 25px;
  margin-left: 60px;
  color: #000;

  &:first-child {
    margin-left: 20px;
  }

  &.active {
    color: orange;
  }
`;