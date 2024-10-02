import React, { useState, useRef } from "react";
import "./Worldforcast.css";
import './CityForecast'
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import CityForecast from "./CityForecast";


export default function Worldforcast() {

  const [forecasts, setForecasts] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [msg, setmsg] = React.useState('false');
  const [alertType, setalertType] = React.useState('success');

  const forcastItem1Ref = useRef(null);
  const forcastItem2Ref = useRef(null);
  const forcastItem3Ref = useRef(null);
  const forcastItem4Ref = useRef(null)
  const forcastItem5Ref = useRef(null)
  const forcastItem6Ref = useRef(null)
  const forcastItem7Ref = useRef(null)
  const forcastItem8Ref = useRef(null)
  const forcastItem9Ref = useRef(null)
  const forcastItem10Ref = useRef(null)

  const addForecastItem = () =>{
    if(forcastItem1Ref.current.style.display==='flex'){
      showAlert('Cannot add more than 10 Forecasts','error')
    }
  }

  const removeForecast = (ref) => {
    if (ref.current) {
      showAlert(`Forecast removed`, 'error'); // Assuming id was just ref
      console.log(ref);
  
      // Hide the forecast item
      ref.current.style.display = 'none';
    }
  };


  const showAlert = (msg,type) => {
    setOpen(true);
    setmsg(msg);
    setalertType(type);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const addForecast = () => {
    // Here, you can customize the city, country, temperature, and minTemperature
    const newForecast = {
      city: "Tokyo",
      country: "Japan",
      temperature: 23,
      minTemperature: 14,
    };
    setForecasts((prevForecasts) => [...prevForecasts, newForecast]);
  };

  return (
    <div>
      <div id="WorldforecastDiv" className="forecast-container">
        <CityForecast/>
      </div> 
    </div>
  );
}
