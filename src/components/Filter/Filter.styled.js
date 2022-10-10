import styled from 'styled-components';

export const FilterHeader = styled.p`
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const Input = styled.input`
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
