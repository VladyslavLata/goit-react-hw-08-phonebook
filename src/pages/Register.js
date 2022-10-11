import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Box } from 'components/Box/Box';

const RegisterPage = () => {
  return (
    <Box pt="80px" pb={5} display="flex" justifyContent="center">
      {/* <p>Register form</p> */}
      <RegisterForm />
    </Box>
  );
};

export default RegisterPage;
