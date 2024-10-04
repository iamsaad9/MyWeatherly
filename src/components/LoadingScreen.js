import React from 'react';
import './LoadingScreen.css'; // Ensure this imports your CSS

const LoadingScreen = () => {
  return (
    <div className='overlay'>
      <div className='loaderContainer'>
        <span className="loader"></span>
      </div>
    </div>
  );
};


export default LoadingScreen;
