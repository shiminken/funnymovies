import React, { useCallback } from "react";
import { Footer, Header, Text } from "ui-library";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { SignInForm } from "./organisms";

interface MainTemplateProps {
  children: JSX.Element;
  isHideRightSide?: boolean;
  leftTitle?: string;
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
`;

const MainTemplate = ({
  children,
  isHideRightSide,
  leftTitle = "Funny movies",
}: MainTemplateProps) => {
  const _renderLeftHeader = useCallback(() => {
    return <AppName>{leftTitle}</AppName>;
  }, []);

  const _renderRightHeader = useCallback(() => {
    return <SignInForm />;
  }, []);

  return (
    <Wrapper>
      <Header
        leftHeader={_renderLeftHeader()}
        rightHeader={!isHideRightSide && _renderRightHeader()}
      />
      {children}
      <Footer />
    </Wrapper>
  );
};

export default React.memo(MainTemplate);
