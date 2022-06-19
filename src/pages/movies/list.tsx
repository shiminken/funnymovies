import { CircularProgress } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";

import { MovieCard } from "movies-ui-components";
import { MovieListWrapper, styles } from "../../../styles/movies.styled";
import { MovieInformation } from "../../services/movieshare/movies.type";
import { getMovieList } from "../../services/movieshare";

const MovieList = () => {
  const [moviesData, setMoviesData] = useState<MovieInformation[]>([]);
  const [isLoading, setLoading] = useState(false);

  const getAllYoutubeUrl = useCallback(async () => {
    try {
      setLoading(true);
      const data = (await getMovieList()) as MovieInformation[];
      if (data?.length) {
        setMoviesData(data.reverse());
      }
    } catch (error) {
      console.log("GET YOUT TUBE URL ERROR", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void getAllYoutubeUrl();
  }, [getAllYoutubeUrl]);

  const renderMoviesList = useCallback(() => {
    if (moviesData.length) {
      return moviesData.map((item: MovieInformation, key: number) => {
        const {
          videoId,
          title,
          sharedName,
          voteUpCount,
          voteDownCount,
          description,
        } = item;

        return (
          <MovieCard
            key={key}
            videoId={videoId}
            title={title}
            sharedName={sharedName}
            voteUpCount={voteUpCount}
            voteDownCount={voteDownCount}
            description={description}
            style={styles.movieCard}
            data-testid={`movielists-item-${key}`}
          />
        );
      });
    }
  }, [moviesData]);

  return (
    <MovieListWrapper>
      {isLoading ? <CircularProgress size={20} /> : renderMoviesList()}
    </MovieListWrapper>
  );
};

export default MovieList;
