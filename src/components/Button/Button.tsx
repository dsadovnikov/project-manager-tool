import React from 'react';
import styles from './Button.module.scss';

export enum ButtonType {
  button = 'button',
  reset = 'reset',
  submit = 'submit',
}

export enum ButtonTheme {
  positive = 'positive',
  negative = 'negative',
  neutral = 'neutral',
}

interface ButtonProps {
  type: ButtonType;
  theme: ButtonTheme;
  onClick: () => any;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Button = ({
  type,
  theme,
  onClick,
  disabled,
  children,
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={styles.btn}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
