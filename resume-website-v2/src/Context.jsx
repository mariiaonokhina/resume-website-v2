import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export function ContextProvider({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <MyContext.Provider value={{ isNavOpen, setIsNavOpen }}>
      {children}
    </MyContext.Provider>
  );
}

export function useIsNavOpen() {
  return useContext(MyContext);
}