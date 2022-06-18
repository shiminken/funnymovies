import React, { useCallback, CSSProperties } from "react";
import styled from "@emotion/styled";
import colors from "../../../constants/colors";
import TextInput from "../../atoms/TextInput";

const HeaderWrapper = styled.div`
  background-color: ${colors.grey};
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 7vh;
  align-items: center;
  padding: 0 10px;
`;

export interface HeaderProps {
  rightHeader: string | JSX.Element;
  leftHeader: string | JSX.Element;
  style?: CSSProperties;
}

const Header: React.FC<HeaderProps> = ({ rightHeader, leftHeader }) => {
  const renderLeftSide = useCallback(() => {
    return <div>{leftHeader}</div>;
  }, []);

  const renderRightSide = useCallback(() => {
    return <div>{rightHeader}</div>;
  }, []);

  return (
    <HeaderWrapper>
      {renderLeftSide()}
      {renderRightSide()}
    </HeaderWrapper>
  );
};

export default React.memo(Header);
