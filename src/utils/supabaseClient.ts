import { MovieInformation } from "@/services/movieshare/movies.type";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://qjqfcuytjrlokttcqlrp.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqcWZjdXl0anJsb2t0dGNxbHJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTU1Mjk5NTQsImV4cCI6MTk3MTEwNTk1NH0.0icTV8Yt9c74qFHCacYQrlLn8RxbDNkJ9zPS4R-YrLk'

export const supabase = createClient(
  supabaseUrl as string,
  supabaseAnonKey as string
);

export const insertYoutubeUrl = async (params: MovieInformation) => {
  await supabase
    .from<MovieInformation>("movies")
    .insert({
      videoId: params.videoId,
      title: params.title,
      sharedName: params.sharedName,
      voteUpCount: params.voteUpCount,
      voteDownCount: params.voteDownCount,
      description: params.description,
    })
    .throwOnError(true);
};

export const getYoutubeUrl = () =>
  supabase.from<MovieInformation>("movies").select("*");
