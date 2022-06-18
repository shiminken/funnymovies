import React, { useEffect, useState, createContext, useContext } from "react";
import { User, Session } from "@supabase/supabase-auth-helpers/react";
import { supabase } from "@/utils/supabaseClient";
import { SupabaseClient } from "@supabase/supabase-auth-helpers/nextjs";

type UserContextType = {
  accessToken: string | null;
  userDetails: User | null;
  isLoading: boolean;
};

export const UserContext =
  createContext<UserContextType | undefined>(undefined);

export interface Props {
  supabaseClient: SupabaseClient;
  [propName: string]: any;
}

export const MyUserContextProvider = (props: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userDetails, setUserDetails] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string>("");

  useEffect(() => {
    const session = supabase.auth.session();
    setUserDetails(session?.user ?? null);
    setAccessToken(session?.access_token as string);
    setIsLoading(false);

    // Listen for changes on auth state (logged in, signed out, etc.)
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUserDetails(session?.user ?? null);
        setAccessToken(session?.access_token as string);
        setIsLoading(false);
      }
    );

    return () => {
      listener?.unsubscribe();
    };
  }, [userDetails, isLoading]);

  const value = {
    userDetails: userDetails,
    isLoading: isLoading,
    accessToken: accessToken,
  };

  return <UserContext.Provider value={value} {...props} />;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a MyUserContextProvider.`);
  }
  return context;
};
