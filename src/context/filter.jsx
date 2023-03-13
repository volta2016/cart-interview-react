import { createContext, useState } from "react";

//1.create the context
export const FiltersContext = createContext();

//2.provide the context to provide the context

export function FiltersProviders({ children }) {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 1000,
  });

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {/* 3. define the value of initial state */}
      {children}
    </FiltersContext.Provider>
  );
}

//Sigleton Modulo de JavaScript
