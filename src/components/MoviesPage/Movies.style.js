import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const Input = styled.input`
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

export const Button = styled.button`
  width: 70px;
  height: 29px;
  color: #fff;
  border: 2px solid;
  border-radius: 5px;
  border-color: #ff8c00;
  background-color: #ffa50088;
  cursor: pointer;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
