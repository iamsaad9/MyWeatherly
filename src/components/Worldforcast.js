import React from "react";
import { useState } from "react";
import "./Worldforcast.css";

export default function Worldforcast() {
  const [forecasts, setForecasts] = useState([
    { id: 1, label: "B", logo: "logo" }, // Existing forecast item
  ]);

  // Function to add a new forecast item
  const addForecast = () => {
    const newForecast = {
      id: forecasts.length - 1,
      label: "New",
      logo: "logo",
    };
    setForecasts([newForecast, ...forecasts]); // Add the new forecast at the top
  };

  return (
    <div>
      <div id="WorldforecastDiv" className="forecast-container">
        
        <div className="forecast-item">
          <div className="forecast-logo">
            <button id="add_forcast_btn" onClick={addForecast}>
              <span class="material-symbols-outlined">add</span>
            </button>
          </div>
          <div className="add-forecast-box">A</div>
        </div>

        {forecasts.map((forecast) => (
          <div key={forecast.id} className="forecast-item">
            <div className="forecast-logo">{forecast.logo}</div>
            <div className="forecast-box">{forecast.label}</div>
          </div>
        ))}

        {/* <div className='forecast-item'>
          <div className='forecast-logo'>
            logo
          </div>
          <div className='forecast-box'>
            B
          </div>
        </div>

        <div className='forecast-item'>
          <div className='forecast-logo'>
            logo
          </div>
          <div className='forecast-box'>
            C
          </div>
        </div>

        <div className='forecast-item'>
          <div className='forecast-logo'>
            logo
          </div>
          <div className='forecast-box'>
            D
          </div>
        </div>

        <div className='forecast-item'>
          <div className='forecast-logo'>
            logo
          </div>
          <div className='forecast-box'>
            D
          </div>
        </div>

        <div className='forecast-item'>
          <div className='forecast-logo'>
            logo
          </div>
          <div className='forecast-box'>
            D
          </div>
        </div> */}
      </div>
    </div>
  );
}
