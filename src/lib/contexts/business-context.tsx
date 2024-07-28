"use client";

import { createContext, PropsWithChildren, useContext } from "react";
import { Tables } from "../types/supabase";

interface IBusinessUser extends Tables<"business_users"> {
  profile: Tables<"profiles"> | null;
}
interface IBusiness extends Tables<"businesses"> {
  users: IBusinessUser[];
}

type BusinessContextType = {
  business: IBusiness | null;
  trainers: IBusinessUser[];
};

const initialState = {
  business: null,
  trainers: [],
};

const BusinessContext = createContext<BusinessContextType>(initialState);

export function useBusinessContext() {
  const context = useContext(BusinessContext);
  if (context === undefined) {
    throw new Error(
      "useBusinessContext must be used within a BusinessContextProvider"
    );
  }
  return context;
}

export function BusinessContextProvider({
  business,
  children,
}: PropsWithChildren<{ business: IBusiness }>) {
  const trainers = business.users.filter((user) =>
    ["owner", "trainer"].includes(user.role)
  );

  return (
    <BusinessContext.Provider value={{ business, trainers }}>
      {children}
    </BusinessContext.Provider>
  );
}
