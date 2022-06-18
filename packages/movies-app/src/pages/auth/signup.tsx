import MainTemplate from "@/components/MainTemplate";
import styled from "@emotion/styled";
import { Box, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { FormInputGroup, Button } from "ui-library";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { AuthValues } from "@/services/authentications/auth.type";
import { authSchema } from "@/services/authentications/schema";

const SignUpWrapper = styled(Box)`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

const styles = {
  formInput: {
    width: "300px",
    marginTop: "15px",
  },
};

const ButtonStyled = styled(Button)`
  margin-top: 15px;
`;

const SignUp = () => {
  const [validate, setValidate] = useState<any>({});
  const { push } = useRouter();
  const {
    handleSubmit,
    control,
    formState: {},
  } = useForm<AuthValues>({
    resolver: yupResolver(authSchema),
    defaultValues: {
      email: undefined,
      password: undefined,
    },
  });

  const _resetValidation = React.useCallback(
    (key: string) => {
      const _validate = { ...validate, [key]: null };
      setValidate(_validate);
    },
    [validate, setValidate]
  );

  const onSubmit = React.useCallback(async (data: AuthValues) => {
    console.log("DATA", data);
  }, []);

  const _validationHandler = React.useCallback(
    (e: any) => {
      setValidate(e);
    },
    [setValidate]
  );

  return (
    <MainTemplate isHideRightSide leftTitle="Sign Up">
      <SignUpWrapper>
        <FormInputGroup
          control={control}
          required
          autoComplete="email"
          type="email"
          errMessage={validate?.email?.message}
          resetValidate={() => _resetValidation("email")}
          name="email"
          id="email"
          placeholder="email"
          style={styles.formInput}
        />
        <FormInputGroup
          control={control}
          required
          autoComplete="password"
          type="password"
          errMessage={validate?.password?.message}
          resetValidate={() => _resetValidation("password")}
          name="password"
          id="password"
          placeholder="password"
          style={styles.formInput}
        />

        {/* <CircularProgress size={30} style={{ marginTop: "10px" }} /> */}

        <ButtonStyled
          label={"Become our member"}
          type="submit"
          onClick={handleSubmit(onSubmit, _validationHandler)}
        />
      </SignUpWrapper>
    </MainTemplate>
  );
};

export default React.memo(SignUp);
