import React from "react";

interface ButtonProps {
  title: string;
  onClick: () => void;
}

const Button = (props: ButtonProps): JSX.Element => {
  return <div onClick={props.onClick}>{props.title}</div>;
};

export default Button;
