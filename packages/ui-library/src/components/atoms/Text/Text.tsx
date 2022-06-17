import React, { CSSProperties } from "react";
import { TextWrapper } from "./Text.styled";

export interface TextProps {
  style?: CSSProperties;
  children: string;
}

const Text: React.FC<TextProps> = ({ children, style, ...registerProps }) => {
  return (
    <TextWrapper style={style} {...registerProps}>
      {children}
    </TextWrapper>
  );
};

export default React.memo(Text);
