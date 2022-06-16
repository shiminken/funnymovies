import React from "react";
import { ButtonWrapper } from "./Button.styled";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <ButtonWrapper>{props.label}</ButtonWrapper>;
};

export default React.memo(Button);
