import React from "react";
import { TextWrapper } from "./Text.styled";

export interface ButtonProps {
  label: string;
}

const Text = (props: ButtonProps) => {
  return <TextWrapper>{props.label}</TextWrapper>;
};

export default React.memo(Text);
