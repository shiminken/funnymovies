import axios from "axios";
import { MovieInformation } from "./movies.type";

const youtubeAPIKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const baseApiUrl = process.env.NEXT_PUBLIC_SUPABASE_API;
const apiKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const requestOptions = {
  method: "GET",
};
const baseMovieConfig = {
  url: `${baseApiUrl}/movies?apikey=${apiKey}`,
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json'
  }
}




export const updateMovieInfors = async (
  videoId: string,
  sharedName: string
) => {
  try {
    const fetchResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${youtubeAPIKey}&part=snippet,statistics`,
      requestOptions
    );
    const responseJson = await fetchResponse.json();
    const response = await responseJson?.items?.[0];
    const params = {
      videoId,
      title: response?.snippet?.title,
      sharedName,
      voteUpCount: response?.statistics?.likeCount,
      voteDownCount: "0",
      description: response?.snippet?.description,
    };
    await insertMovie(params);
  } catch (error) {
    console.log("ERR", error);
  }
};

export const getMovieList = async () => {
  try {
  const responseAxios = await axios({
    method: 'GET',
    ...baseMovieConfig
  })
  const response = await responseAxios?.data
  return response
  } catch (error) {
    console.log('Get Movie List Error', error)
  }
}


export const insertMovie = async (params: MovieInformation) => {
  try {
   await axios({
    method: 'POST',
    ...baseMovieConfig,
    data: JSON.stringify(params)
  })
  } catch (error) {
    console.log('Get Movie List Error', error)
  }
}
