import styled from "@emotion/styled";
import { Box, CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import { Text, Button } from "movies-ui-components";
import { supabase } from "../../utils/supabaseClient";
import { useUser } from "../../hooks/useUser";

const Wrapper = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 10px;
  align-items: center;
`;

const LoginSectionHeader = () => {
  const { userDetails } = useUser();
  const [isLoading, setLoading] = useState(false);
  const { reload, push } = useRouter();

  const handleSignOut = useCallback(async () => {
    try {
      setLoading(true);
      await supabase.auth.signOut();
    } catch (error) {
      console.log("LOGOUT ERR", error);
    } finally {
      setLoading(false);
      reload();
    }
  }, [reload]);

  return (
    <Wrapper data-testid={"logedin-section-header"}>
      {userDetails && (
        <>
          <Text>Welcome: {userDetails?.email}</Text>
          <Button
            label={"Share a movie"}
            type="submit"
            onClick={() => push("/movies/share")}
          />
          <Button label={"logout"} type="submit" onClick={handleSignOut} />
        </>
      )}

      {isLoading && <CircularProgress size={20} />}
    </Wrapper>
  );
};

export default LoginSectionHeader;
