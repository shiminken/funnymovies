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
