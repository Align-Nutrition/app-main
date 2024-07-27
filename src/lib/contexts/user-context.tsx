"use client";

import { Tables } from "@/lib/types/supabase";
import { createContext, PropsWithChildren, useContext } from "react";

interface BusinessUsersWithBusiness extends Partial<Tables<"business_users">> {
  business: Partial<Tables<"businesses">> | null;
}

interface IUserContextProps {
  email?: string | null;
  profile: Partial<Tables<"profiles">> | null;
  userPreferences: Partial<Tables<"user_preferences">> | null;
  businessUsers?: BusinessUsersWithBusiness[] | null;
}

type UserContextProviderType = PropsWithChildren<IUserContextProps>;

const UserContext = createContext<IUserContextProps>({
  email: null,
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
  email,
  businessUsers,
  profile,
  userPreferences,
}: UserContextProviderType) {
  return (
    <UserContext.Provider
      value={{ email, businessUsers, profile, userPreferences }}
    >
      {children}
    </UserContext.Provider>
  );
}
