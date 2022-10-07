import { Box } from 'components/Box/Box';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from 'components/AppBar/AppBar';

export const SharedLayout = () => {
  return (
    <Box my={0} mx="auto" px={5}>
      <AppBar />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Box>
  );
};
