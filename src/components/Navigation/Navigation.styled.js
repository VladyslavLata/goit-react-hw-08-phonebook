import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  color: ${p => p.theme.colors.black};
  padding: ${p => p.theme.space[3]}px 0;

  &.active {
    color: green;
  }
`;

export const Item = styled.li`
  border-bottom: 1px solid red;
`;
