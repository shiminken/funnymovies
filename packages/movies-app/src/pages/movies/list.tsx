import { MovieInformation } from "@/services/authentications/auth.type";
import { getYoutubeUrl } from "@/utils/supabaseClient";
import { CircularProgress } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";

import { MovieCard } from "ui-library";
import { MovieListWrapper, styles } from "./movies.styled";

const MovieList = () => {
  const [moviesData, setMoviesData] = useState<MovieInformation[]>([]);
  const [isLoading, setLoading] = useState(false);

  const getAllYoutubeUrl = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await getYoutubeUrl();
      if (data?.length) {
        setMoviesData(data.reverse());
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getAllYoutubeUrl();
  }, []);

  const renderMoviesList = useCallback(() => {
    if (moviesData.length) {
      return moviesData.map((item: MovieInformation, key: number) => {
        return (
          <MovieCard
            key={key}
            videoId={item.videoId}
            title={item.title}
            sharedName={item.sharedName}
            voteUpCount={item.voteUpCount}
            voteDownCount={item.voteDownCount}
            description={item.description}
            style={styles.movieCard}
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
