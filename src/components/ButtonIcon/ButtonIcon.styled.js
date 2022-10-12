import styled from 'styled-components';

export const Button = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: ${p => p.position[0]}px;
  right: ${p => p.position[1]}px;
  width: ${p => p.size};
  height: ${p => p.size};
  border-radius: ${p => p.theme.radii.round};
  border: ${p => p.theme.borders.none};
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.46);
  background-color: ${p => p.theme.colors.accent};
  cursor: pointer;

  &:hover,
  :focus {
    background-color: ${p => p.theme.colors.bgSecondary};
  }

  &:active {
    box-shadow: none;
  }

  & svg {
    width: 100%;
    height: 100%;
  }
`;
