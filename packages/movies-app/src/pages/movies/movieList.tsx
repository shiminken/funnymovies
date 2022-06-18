import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";

import { MovieCard } from "ui-library";

const MovieListWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
`;

const MovieList = () => {
  return (
    <MovieListWrapper>
      <MovieCard
        videoId="XkpRo8smQ5M"
        title="Spider man"
        sharedName="Xuka"
        voteUpCount="16"
        voteDownCount="20"
        description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC"
      />
    </MovieListWrapper>
  );
};

export default MovieList;
