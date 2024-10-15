// App.js
import "./App.css";
import Home from "./Pages/Home";
import Login from './Pages/Login';
import { ActiveUnitProvider } from "./ActiveUnitContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, {useEffect} from "react";

function App() {
  useEffect(() => {
    const savedBgColor = localStorage.getItem('mainColor'); 
    const savedHoverColor = localStorage.getItem('hoverColor'); 
    document.documentElement.style.setProperty('--themeColor', savedBgColor);
    document.documentElement.style.setProperty('--themeHover', savedHoverColor);
  }, []);

  return (
    <ActiveUnitProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/*" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </ActiveUnitProvider>
  );
}

export default App;
