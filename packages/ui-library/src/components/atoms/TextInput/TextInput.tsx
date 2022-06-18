import React, { CSSProperties } from "react";
import { Input, InputProps, FormHelperText, FormControl } from "@mui/material";
import styled from "@emotion/styled";
import colors from "../../../constants/colors";

export interface TextInputProps extends InputProps {
  errMessage?: string;
  label?: string | JSX.Element;
  style?: CSSProperties;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  name?: string;
  className?: string;
  wrapperClassName?: string;
  required?: boolean;
  helperClassName?: string;
  autoComplete?: string;
  type?: string;
}

const DefaultTextInput = styled(Input)`
  border: 1.5px solid ${colors.grey1};
  border-radius: 5px;
  padding: 0 5px;
`;

const FormHelperTextStyled = styled(FormHelperText)`
  margin-left: 0;
`;

const TextInput: React.FC<TextInputProps> = ({
  errMessage,
  label,
  style,
  name,
  className,
  wrapperClassName,
  helperClassName,
  required,
  ...registerProps
}) => {
  const renderErrMessage = (
    <FormHelperTextStyled>{errMessage}</FormHelperTextStyled>
  );

  return (
    <FormControl className={wrapperClassName} required={required}>
      <DefaultTextInput
        id={name}
        disableUnderline
        style={style}
        {...registerProps}
      />
      {errMessage && renderErrMessage}
    </FormControl>
  );
};

export default React.memo(TextInput);
