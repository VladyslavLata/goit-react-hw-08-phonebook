import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const Label = styled.label`
  position: relative;
  display: block;

  &:not(:last-child) {
    /* color: red; */
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;

export const Input = styled(Field)`
  padding: ${p => p.theme.space[0]} ${p => p.theme.space[3]}px;
  width: 320px;
  height: 30px;
  font-size: ${p => p.theme.fontSizes.s};
  border: ${p => p.theme.borders.m};
  border-radius: ${p => p.theme.radii.sm};
  border-color: ${p => p.theme.colors.bgSecondary};

  &:focus-within {
    border-color: ${p => p.theme.colors.accent};
  }
`;

export const LabelName = styled.p`
  margin-bottom: ${p => p.theme.space[2]}px;
`;

// export const AddButton = styled.button`
//   display: flex;
//   justify-content: center;
//   padding: ${p => p.theme.space[3]}px;
//   margin-top: ${p => p.theme.space[4]}px;
//   border-radius: ${p => p.theme.radii.sm};
//   cursor: pointer;

//   &:active {
//     background-color: ${p => p.theme.colors.accent};
//   }
// `;

export const ErrorText = styled(ErrorMessage)`
  position: absolute;
  bottom: -${p => p.theme.space[4]}px;
  left: 0;
  color: ${p => p.theme.colors.red};
  font-size: ${p => p.theme.fontSizes.xs};
`;
