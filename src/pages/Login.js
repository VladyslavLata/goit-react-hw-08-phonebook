import { LoginForm } from 'components/LoginForm/LoginForm';
import { Box } from 'components/Box/Box';

const LoginPage = () => {
  return (
    <Box pt="80px" pb={5} display="flex" justifyContent="center">
      {/* <p>Login Form</p> */}
      <LoginForm />
    </Box>
  );
};

export default LoginPage;
