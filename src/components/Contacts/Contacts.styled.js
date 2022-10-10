import styled from 'styled-components';

export const Number = styled.p`
  margin-top: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.s};
`;

export const ContactCard = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  padding: ${p => p.theme.space[3]}px;
`;
