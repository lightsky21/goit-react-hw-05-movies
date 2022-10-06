import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Item = styled(NavLink)`
  text-decoration: none;

  :hover {
    color: pink;
  }
`;
