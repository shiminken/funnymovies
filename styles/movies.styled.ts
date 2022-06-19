import styled from "@emotion/styled";
import { Box } from "@mui/material";

import { Button } from "movies-ui-components";
import colors from "../src/constants/colors";

export const MovieListWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

export const ShareWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UrlWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const ButtonStyled = styled(Button)`
  width: 250px;
  margin-top: 10px;
  margin-left: 100px;
`;

export const ShareBoxWrapper = styled(Box)`
  padding: 20px;
  border: 1px solid ${colors.darkGreen};
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const styles = {
  movieCard: {
    width: "50%",
    marginTop: "50px",
  },
  formInput: {
    width: "250px",
  },
  youtubeText: {
    marginRight: "15px",
  },
  indicator: {
    marginTop: "10px",
  },
};
