import styled from 'styled-components';

export const Button = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  /* padding: ${p => p.theme.space[2]}px; */
  border-radius: ${p => p.theme.radii.round};
  border: ${p => p.theme.borders.none};
  background-color: ${p => p.theme.colors.bgSecondary};
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.46);
  cursor: pointer;

  &:active {
    background-color: ${p => p.theme.colors.accent};
    box-shadow: none;
  }

  & svg {
    width: 24px;
    height: 24px;
  }
`;
