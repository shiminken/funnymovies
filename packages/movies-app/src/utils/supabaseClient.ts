import { MovieInformation } from '@/services/authentications/auth.type';
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl as string, supabaseAnonKey as string)

export const insertYoutubeUrl = async (params: MovieInformation) => {
  await supabase
    .from<MovieInformation>('movies')
    .insert({
      videoId: params.videoId,
      title: params.title,
      sharedName: params.sharedName,
      voteUpCount: params.voteUpCount,
      voteDownCount: params.voteDownCount,
      description: params.description
    }).throwOnError(true)
};

export const getYoutubeUrl = () =>
    supabase.from<MovieInformation>('movies').select('*');

