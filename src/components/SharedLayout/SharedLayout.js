import { Box } from 'components/Box/Box';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';

export const SharedLayout = ({ children }) => {
  return (
    <>
      <Box my={0} mx="auto" p={(0, 4)}>
        <AppBar />
        <Outlet />
      </Box>
    </>
  );
};
