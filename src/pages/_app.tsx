import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { supabase } from "../utils/supabaseClient";
import { MyUserContextProvider } from "../hooks/useUser";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MyUserContextProvider supabaseClient={supabase}>
      <Component {...pageProps} />
    </MyUserContextProvider>
  );
}

export default MyApp;
