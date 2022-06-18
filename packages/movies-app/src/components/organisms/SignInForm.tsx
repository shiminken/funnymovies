import React, { useState } from "react";
import { FormInputGroup, Button } from "ui-library";
import { useForm } from "react-hook-form";
import { Box, CircularProgress } from "@mui/material";
import styled from "@emotion/styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { authSchema } from "@/services/authentications/schema";
import { AuthValues } from "@/services/authentications/auth.type";
import { supabase } from "@/utils/supabaseClient";

const Wrapper = styled(Box)`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px;
`;

const ButtonStyled = styled(Button)`
  height: 35px;
`;

const SignInForm = () => {
  const [validate, setValidate] = useState<any>({});
  const [isLoading, setLoading] = useState(false);
  const { push, reload } = useRouter();

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
    try {
      setLoading(true);
      const response = await supabase.auth.signIn({
        email: data.email,
        password: data.password,
      });

      if (response?.error?.message) {
        alert(response?.error?.message);
      } else {
        reload();
      }
    } catch (error) {
      console.log("Error occur", error);
    } finally {
      setLoading(false);
    }
  }, []);
  const _validationHandler = React.useCallback(
    (e: any) => {
      setValidate(e);
    },
    [setValidate]
  );

  return (
    <Wrapper>
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
      />
      {isLoading ? (
        <CircularProgress size={30} />
      ) : (
        <ButtonStyled
          label={"Login"}
          type="submit"
          onClick={handleSubmit(onSubmit, _validationHandler)}
        />
      )}

      <ButtonStyled
        label={"Register"}
        type="submit"
        onClick={() => push("/auth/signup")}
      />
    </Wrapper>
  );
};

export default React.memo(SignInForm);
