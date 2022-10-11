import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
// import { Box } from 'components/Box/Box';
import * as SC from './AppBar.styled';

export const AppBar = () => {
  const { isLogined } = useAuth();
  return (
    <SC.Header
    // as="header"
    // py={4}
    // display="flex"
    // position="fixed"
    // top="0"
    // left="0"
    // width="100%"
    // justifyContent="space-between"
    // borderBottom="m"
    // borderColor="bgSecondary"
    // background-color="red"
    >
      <Navigation />
      {isLogined ? <UserMenu /> : <AuthNav />}
    </SC.Header>
  );
};
