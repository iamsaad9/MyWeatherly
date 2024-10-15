// ActiveUnitContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const ActiveUnitContext = createContext();

// Create a provider component
export const ActiveUnitProvider = ({ children }) => {
  const [activeUnit, setActiveUnit] = useState("D");
  const [currentCity,setcurrentCity] = useState('Berlin')
  const [loading, setLoading] = useState(true);
  const [bgColor, setBgColor] = useState('#be83de');

  return (
    <ActiveUnitContext.Provider value={{ activeUnit, setActiveUnit,currentCity,setcurrentCity,loading,setLoading,bgColor,setBgColor }}>
      {children}
    </ActiveUnitContext.Provider>
  );
};
