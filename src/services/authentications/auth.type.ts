export type AuthValues = {
  email: string;
  password: string;
};


export interface UserDetails {
 access_token: string
 user: {
  email: string
  id: string
 }
}


export interface YoutubeUrl {
  url: string
}


export interface MovieInformation {
  videoId: string
  title: string
  sharedName: string
  voteUpCount: string
  voteDownCount: string
  description: string
}
