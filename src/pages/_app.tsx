import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { MyUserContextProvider } from "@/hooks/useUser";
import { supabase } from "@/utils/supabaseClient";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MyUserContextProvider supabaseClient={supabase}>
      <Component {...pageProps} />
    </MyUserContextProvider>
  );
}

export default MyApp;
