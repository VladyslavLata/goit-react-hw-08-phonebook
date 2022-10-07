import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Box } from 'components/Box/Box';

export const AppBar = () => {
  const { isLogined } = useAuth();
  return (
    <Box
      as="header"
      py={4}
      display="flex"
      justifyContent="space-between"
      borderBottom="fat"
      borderColor="bgSecondary"
    >
      <Navigation />
      {isLogined ? <UserMenu /> : <AuthNav />}
    </Box>
  );
};
