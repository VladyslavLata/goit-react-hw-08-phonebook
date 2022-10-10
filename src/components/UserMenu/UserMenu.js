import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { Button } from 'components/Button/Button';
import { Box } from 'components/Box/Box';
import * as SC from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const userLogout = () => dispatch(logout());
  return (
    <Box display="flex">
      <p>
        {/* as="p" display="flex" justifyContent="baseline"> */}
        Welcom,
        <SC.UserIcon /> {user?.name}
      </p>
      <Button type="button" onClick={userLogout}>
        Logout
      </Button>
      {/* <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button> */}
    </Box>
  );
};
