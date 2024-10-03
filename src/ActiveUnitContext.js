// ActiveUnitContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const ActiveUnitContext = createContext();

// Create a provider component
export const ActiveUnitProvider = ({ children }) => {
  const [activeUnit, setActiveUnit] = useState("D");

  return (
    <ActiveUnitContext.Provider value={{ activeUnit, setActiveUnit }}>
      {children}
    </ActiveUnitContext.Provider>
  );
};
