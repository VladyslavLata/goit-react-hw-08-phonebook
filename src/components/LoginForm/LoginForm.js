import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  LabelName,
  AddButton,
} from 'components/PhonebookForm/Phonebook.styled';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
// import { useAuth } from 'hooks/useAuth';

const ErrorText = styled(ErrorMessage)`
  color: red;
`;

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
        <label htmlFor="email">
          <LabelName>Email</LabelName>
          <Field type="email" name="email" />
          <ErrorText component="p" name="email" />
        </label>
        <label htmlFor="password">
          <LabelName>Password</LabelName>
          <Field type="password" name="password" />
          <ErrorText component="p" name="password" />
        </label>
        <AddButton
          type="submit"
          // disabled={loading}
        >
          Log In
        </AddButton>
      </Form>
    </Formik>
  );
};