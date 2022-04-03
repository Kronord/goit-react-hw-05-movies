import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
`;

export const StyledImage = styled.img`
  display: block;
  width: 300px;
  margin-left: 20px;
`;

export const Wrapper = styled(Container)`
  flex-direction: column;
`;

export const InfoLinkBox = styled(Wrapper)`
  margin: 20px;
  padding-left: 15px;
  border: 3px solid orange;
  border-radius: 5px;
`;

export const DiscrBox = styled(Wrapper)`
  width: 600px;
  margin-left: 50px;
`;

export const Title = styled.h2`
  display: block;
  margin-left: 20px;
`;

export const Subtitle = styled.h3`
  color: orange;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 18px;
  margin-bottom: 10px;

  &:hover {
    color: orange;
  }
`;
export const Button = styled.button`
  width: 70px;
  height: 29px;
  margin: 10px 0 0 20px;
  color: #fff;
  border: 2px solid;
  border-radius: 5px;
  border-color: #ff8c00;
  background-color: #ffa50088;
  cursor: pointer;`
