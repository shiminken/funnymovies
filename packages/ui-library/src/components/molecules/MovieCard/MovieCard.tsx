import React, { CSSProperties } from "react";
import {
  Container,
  ThumbWrapper,
  MovieDetailWrapper,
  Title,
  Row,
  SharedName,
  Description,
  Reaction,
} from "./MovieCard.styled";
import Text from "../../atoms/Text";

export interface MovieCardProps {
  videoId: string;
  title: string;
  sharedName: string;
  voteUpCount?: string;
  voteDownCount?: string;
  description?: string;
  style?: CSSProperties;
}

const MovieCard: React.FC<MovieCardProps> = ({
  videoId,
  title,
  sharedName,
  voteUpCount,
  voteDownCount,
  description,
  style,
  ...registerProps
}) => {
  return (
    <Container style={style} {...registerProps}>
      <ThumbWrapper>
        <iframe
          height="200"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </ThumbWrapper>

      <MovieDetailWrapper>
        <Title>{title}</Title>
        <Row>
          <Text>Shared by:</Text>
          <SharedName>{sharedName}</SharedName>
        </Row>
        <Row>
          <Row>
            <Text>Like: </Text>
            <Reaction>{voteUpCount}</Reaction>
          </Row>
          <Row marginLeft={3}>
            <Text>Dislike: </Text>
            <Reaction>{voteDownCount}</Reaction>
          </Row>
        </Row>
        <Text>Description:</Text>
        <Description>{description}</Description>
      </MovieDetailWrapper>
    </Container>
  );
};

export default React.memo(MovieCard);
