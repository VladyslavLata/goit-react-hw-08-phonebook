import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Outlet } from 'react-router-dom';

export const AppBar = () => {
  const { isLogined } = useAuth();
  return (
    <>
      <header>
        <Navigation />
        {isLogined ? <UserMenu /> : <AuthNav />}
      </header>
      <Outlet />
    </>
  );
};
