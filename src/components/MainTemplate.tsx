import React, { useCallback } from "react";
import { Footer, Header } from "movies-ui-components";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { useUser } from "@/hooks/useUser";
import { LoginSectionHeader, SignInForm } from "./molecules";
import { useRouter } from "next/router";
import { Button } from "movies-ui-components";

interface MainTemplateProps {
  children: JSX.Element;
  isHideRightSide?: boolean;
  leftTitle?: string;
  isBack?: boolean;
}

const Wrapper = styled(Box)`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header"
    "main"
    "footer";
`;

const AppName = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  margin-left: 10px;
`;

const LeftWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MainTemplate = ({
  children,
  isHideRightSide,
  leftTitle = "Funny movies",
  isBack,
}: MainTemplateProps) => {
  const { userDetails, isLoading } = useUser();
  const { back } = useRouter();

  const renderBackBtn = useCallback(
    () => <Button label={"Back"} type="submit" onClick={() => back()} />,
    [back]
  );
  const _renderLeftHeader = useCallback(() => {
    return (
      <LeftWrapper>
        {isBack && renderBackBtn()}
        <AppName>{leftTitle}</AppName>
      </LeftWrapper>
    );
  }, [isBack, leftTitle, renderBackBtn]);

  const _renderRightHeader = useCallback(() => {
    if (userDetails) {
      return <LoginSectionHeader />;
    } else {
      return <SignInForm />;
    }
  }, [userDetails]);

  return (
    <Wrapper>
      {!isLoading && (
        <>
          <Header
            leftHeader={_renderLeftHeader()}
            rightHeader={!isHideRightSide && _renderRightHeader()}
          />

          {children}
          <Footer />
        </>
      )}
    </Wrapper>
  );
};

export default React.memo(MainTemplate);
