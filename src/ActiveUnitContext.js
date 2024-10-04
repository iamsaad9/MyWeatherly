// ActiveUnitContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const ActiveUnitContext = createContext();

// Create a provider component
export const ActiveUnitProvider = ({ children }) => {
  const [activeUnit, setActiveUnit] = useState("D");
  const [currentCity,setcurrentCity] = useState('Berlin')
  const [loadingCount, setLoadingCount] = useState(0);

  const setLoading = (isLoading) => {
    setLoadingCount((prev) => (isLoading ? prev + 1 : prev > 0 ? prev - 1 : 0));
  };
  const loading = loadingCount > 0;

  return (
    <ActiveUnitContext.Provider value={{ activeUnit, setActiveUnit,currentCity,setcurrentCity,loading,setLoading }}>
      {children}
    </ActiveUnitContext.Provider>
  );
};
