"use client";

import { createContext, PropsWithChildren, useContext } from "react";
import { Tables } from "../types/supabase";

type BusinessContextType = {
  business: Tables<"businesses"> | null;
};

const initialState = {
  business: null,
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
}: PropsWithChildren<{ business: Tables<"businesses"> }>) {
  return (
    <BusinessContext.Provider value={{ business }}>
      {children}
    </BusinessContext.Provider>
  );
}
