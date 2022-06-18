export const getURL = () => {
  const url =
    process?.env?.URL && process.env.URL !== ''
      ? process.env.URL
      : process?.env?.VERCEL_URL && process.env.VERCEL_URL !== ''
      ? process.env.VERCEL_URL
      : 'http://localhost:3000';
  return url.includes('http') ? url : `https://${url}`;
};


export const getYoutubeId = (url: string) => {
   const newUrl = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
   return (newUrl[2] !== undefined) ? newUrl[2].split(/[^0-9a-z_\-]/i)[0] : newUrl[0];
}
