"use client";

import { createContext, PropsWithChildren, useContext } from "react";

const initialState = {};

const BusinessOnboardingContext = createContext(initialState);

export function useBusinessOnboardingContext() {
  const context = useContext(BusinessOnboardingContext);
  if (context === undefined) {
    throw new Error(
      "useBusinessOnboardingContext must be used within a BusinessOnboardingContextProvider"
    );
  }
  return context;
}

export function BusinessOnboardingContextProvider({
  children,
}: PropsWithChildren) {
  return (
    <BusinessOnboardingContext.Provider value={{}}>
      {children}
    </BusinessOnboardingContext.Provider>
  );
}
