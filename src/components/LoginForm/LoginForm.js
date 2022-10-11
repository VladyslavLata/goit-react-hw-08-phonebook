import { Formik, Form } from 'formik';
import * as yup from 'yup';
import {
  LabelName,
  Input,
  ErrorText,
  Label,
} from 'components/PhonebookForm/Phonebook.styled';
// import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
import { Button } from 'components/Button/Button';
// import { useAuth } from 'hooks/useAuth';

// const ErrorText = styled(ErrorMessage)`
//   color: red;
// `;

const schema = yup.object().shape({
  email: yup.string().strict().trim().email().required(),
  password: yup.string().strict().trim().min(6).max(30).required(),
});

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  // const loading = useSelector(selectLoading);
  const handleSubmit = (values, actions) => {
    dispatch(login({ ...values }));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Label htmlFor="email">
          <LabelName>Email</LabelName>
          <Input type="email" name="email" />
          <ErrorText component="p" name="email" />
        </Label>
        <Label htmlFor="password">
          <LabelName>Password</LabelName>
          <Input type="password" name="password" />
          <ErrorText component="p" name="password" />
        </Label>
        <Button margin="32px 0 0">Log In</Button>
        {/* <AddButton
          type="submit"
          // disabled={loading}
        >
          Log In
        </AddButton> */}
      </Form>
    </Formik>
  );
};
