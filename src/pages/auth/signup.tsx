import styled from "@emotion/styled";
import { Box, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FormInputGroup, Button } from "movies-ui-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { User } from "@supabase/gotrue-js";
import MainTemplate from "../../components/MainTemplate";
import { useUser } from "../../hooks/useUser";
import { AuthValues } from "../../services/authentications/auth.type";
import { authSchema } from "../../services/authentications/schema";
import { supabase } from "../../utils/supabaseClient";

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
  loadingIndicator: {
    marginTop: "10px",
  },
};

const ButtonStyled = styled(Button)`
  margin-top: 15px;
`;

const SignUp = () => {
  const [validate, setValidate] = useState<any>({});
  const [isLoading, setLoading] = useState(false);
  const [newUser, setNewUser] = useState<User | null>(null);
  const { userDetails } = useUser();

  const { replace } = useRouter();
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
      const { error, user: createdUser } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
      });

      if (error) {
        alert(error?.message);
      } else {
        setNewUser(createdUser);
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

  useEffect(() => {
    if (newUser || userDetails) {
      void replace("/");
    }
  }, [newUser, userDetails, replace]);

  return (
    <MainTemplate isHideRightSide leftTitle="Sign Up" isBack>
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

        {isLoading && (
          <CircularProgress size={20} style={styles.loadingIndicator} />
        )}

        <ButtonStyled
          label={"Become our member"}
          type="submit"
          onClick={handleSubmit(onSubmit, _validationHandler)}
          disabled={isLoading}
        />
      </SignUpWrapper>
    </MainTemplate>
  );
};

export default React.memo(SignUp);
