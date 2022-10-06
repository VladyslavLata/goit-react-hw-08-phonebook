import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppBar } from './AppBar/AppBar';
import { refreshUser } from 'redux/auth/operations';
import { LoginPage, Home, ContactsPage, RegisterPage } from 'pages';
import { PrivateRoute, RestrictedRoute } from 'utils';
import { useAuth } from 'hooks/useAuth';
import { Spinner } from './Spinner/Spinner';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Spinner loading={true} size={'24'} />
  ) : (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<Home />} />
        <Route
          path="contacts"
          // element={<ContactsPage />}
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route
          path="login"
          // element={<LoginPage />}
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="register"
          // element={<RegisterPage />}
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
      </Route>
    </Routes>
  );
};
