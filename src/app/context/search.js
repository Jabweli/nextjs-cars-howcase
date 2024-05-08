'use client';

import { useState, createContext, useContext } from "react";

// create context
export const SearchContext = createContext();

// provider
export const SearchContextProvider = ({ children }) => {
   const [searchActive, setSearchActive] = useState(false);
   return <SearchContext.Provider value={{searchActive, setSearchActive}}>
      {children}
   </SearchContext.Provider>;
}

export const useSearchContext = () => useContext(SearchContext);