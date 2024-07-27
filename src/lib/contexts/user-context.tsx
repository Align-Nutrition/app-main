"use client";

import { Tables } from "@/lib/types/supabase";
import { createContext, PropsWithChildren, useContext } from "react";

interface IUserContextProps {
  profile?: Partial<Tables<"profiles">> | null;
  userPreferences?: Partial<Tables<"user_preferences">> | null;
  businessUsers?: Partial<Tables<"business_users">[]> | null;
}

type UserContextProviderType = PropsWithChildren<IUserContextProps>;

const UserContext = createContext<IUserContextProps>({
  profile: {},
  userPreferences: {},
  businessUsers: [],
});

export function useUserContext(): IUserContextProps {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
}

export function UserContextProvider({
  children,
  businessUsers,
  profile,
  userPreferences,
}: UserContextProviderType) {
  return (
    <UserContext.Provider value={{ businessUsers, profile, userPreferences }}>
      {children}
    </UserContext.Provider>
  );
}
