import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 32px;
  right: 32px;
  display: flex;

  justify-content: space-between;
  /* width: 100%; */
  /* padding: 0 30px; */
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  border-bottom: ${p => p.theme.borders.m};
  border-color: ${p => p.theme.colors.bgSecondary};
  /* py={4}
      display="flex"
      position="fixed"
      top="0"
      left="0"
      width="100%"
      justifyContent="space-between"
      borderBottom="m"
      borderColor="bgSecondary"
      background-color="red" */
`;
