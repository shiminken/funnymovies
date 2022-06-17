import React, { CSSProperties } from "react";
import { ButtonWrapper } from "./Button.styled";

export interface ButtonProps {
  label: string;
  style?: CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ label, style, ...registerProps }) => {
  return (
    <ButtonWrapper style={style} {...registerProps}>
      {label}
    </ButtonWrapper>
  );
};

export default React.memo(Button);
