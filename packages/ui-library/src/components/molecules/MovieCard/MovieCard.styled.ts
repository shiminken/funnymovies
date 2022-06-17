import styled from "@emotion/styled";
import { Box } from "@mui/system";
import colors from "../../../constants/colors";
import Text from "../../atoms/Text";


export const Row = styled(Box)`
  display: flex;
  flex-direction: row;
`;

export const Container = styled(Row)`
  height: 200px;
`;

export const ThumbWrapper = styled(Box)``;

export const MovieDetailWrapper = styled(Box)`
  margin-left: 20px;
`;

export const Title = styled(Text)`
  color: ${colors.pink};
  font-weight: 600;
`;

export const SharedName = styled(Text)`
  margin-left: 5px;
  font-weight: 600;
`;
export const Description = styled(Text)`
  font-style: italic;
  width: 50%;
`;

export const Reaction = styled(Text)`
  font-weight: 600;
`
