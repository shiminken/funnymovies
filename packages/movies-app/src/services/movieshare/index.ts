import { insertYoutubeUrl } from "@/utils/supabaseClient";

const youtubeAPIKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
const requestOptions = {
  method: 'GET',
};

export const updateMovieInfors = async (videoId: string, sharedName: string) => {
  try {

    const fetchResponse = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${youtubeAPIKey}&part=snippet,statistics`, requestOptions)
    const responseJson =  await fetchResponse.json()
    const response = await responseJson?.items?.[0]
    const params = {
      videoId,
      title: response?.snippet?.title,
      sharedName,
      voteUpCount: response?.statistics?.likeCount,
      voteDownCount: '0',
      description: response?.snippet?.description
    }
    await insertYoutubeUrl(params)

  } catch (error) {
    console.log('ERR', error)
  }
}
