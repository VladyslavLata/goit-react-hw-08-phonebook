// import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Box } from 'components/Box/Box';
import * as SC from './Navigation.styled';

export const Navigation = () => {
  const { isLogined } = useAuth();
  return (
    <nav>
      <Box as="ul" display="flex" gridGap={5}>
        <SC.Item>
          <SC.Link to="/">Home</SC.Link>
        </SC.Item>
        {isLogined && (
          <SC.Item>
            <SC.Link to="/contacts">Contacts</SC.Link>
          </SC.Item>
        )}
      </Box>
    </nav>
  );
};
