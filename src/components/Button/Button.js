import * as SC from './Button.styled';

export const Button = ({
  disabled = false,
  type = 'submit',
  onClick,
  children,
}) => {
  return (
    <SC.Button type={type} disabled={disabled} onClick={onClick}>
      {children}
    </SC.Button>
  );
};
