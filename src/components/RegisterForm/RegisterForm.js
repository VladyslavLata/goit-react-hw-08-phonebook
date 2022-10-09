import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  LabelName,
  AddButton,
  Input,
} from 'components/PhonebookForm/Phonebook.styled';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
// import { useAuth } from 'hooks/useAuth';

const ErrorText = styled(ErrorMessage)`
  color: red;
`;

const schema = yup.object().shape({
  name: yup.string().strict().trim().min(1).max(30).required(),
  email: yup.string().strict().trim().email().required(),
  password: yup.string().strict().trim().min(6).max(30).required(),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();
  // const loading = useSelector(selectLoading);
  const handleSubmit = (values, actions) => {
    dispatch(register({ ...values }));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="name">
          <LabelName>Name</LabelName>
          <Input autoComplete="off" type="text" name="name" />
          <ErrorText component="p" name="name" />
        </label>
        <label htmlFor="email">
          <LabelName>Email</LabelName>
          <Input type="email" name="email" />
          <ErrorText component="p" name="email" />
        </label>
        <label htmlFor="password">
          <LabelName>Password</LabelName>
          <Input type="password" name="password" />
          <ErrorText component="p" name="password" />
        </label>
        <AddButton
          type="submit"
          // disabled={loading}
        >
          Register
        </AddButton>
      </Form>
    </Formik>
  );
};
