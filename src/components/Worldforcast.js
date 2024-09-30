import React, { useState } from "react";
import "./Worldforcast.css";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const ForecastItem = ({ city, country, temperature, minTemperature }) => {
  return (
    <div
      className="forecast-item"
      style={{
        width: "10vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        padding: "15px 0px",
      }}
    >
      <div
        className="forecast-logo"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "pink",
          height: "35px",
          width: "35px",
          borderRadius: "50%",
          position: "absolute",
          top: 0,
        }}
      >
        <button
          id="forcast_btn"
          style={{
            height: "35px",
            width: "35px",
            borderRadius: "50%",
            position: "absolute",
            top: 0,
            border: "none",
            backgroundColor: "#be83de",
            display: "flex",
          }}
        >
          <span className="material-symbols-outlined"></span>
        </button>
      </div>
      <div
        className="forecast-box"
        style={{
          height: "150px",
          width: "100%",
          borderRadius: "15px",
          backgroundColor: "#1b1b1b",
          border: "1.5px solid #474646",
          padding: "10px 0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            id="foracasttextDiv"
            style={{
              marginTop: "10px",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "50%",
            }}
          >
            <span style={{ marginBottom: "-5px", fontSize: "20px" }}>
              {city}
            </span>
            <span style={{ fontSize: "10px" }}>{country}</span>
          </div>

          <div
            id="forcastsubtitleDiv"
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              flexDirection: "row",
              width: "100%",
              height: "40%",
            }}
          >
            <span className="temp_degree" style={{ fontSize: "25px" }}>
              {temperature}*
            </span>
            <span
              className="unit-display"
              style={{
                fontSize: "15px",
                marginLeft: "-5px",
                padding: "1px",
                fontWeight: "500",
                color: "var(--themeColor)",
              }}
            >
              C
            </span>
            <span style={{ fontSize: "20px" }}>/</span>
            <span className="temp_degree" style={{ fontSize: "15px" }}>
              {minTemperature}
            </span>
            <span
              className="unit-display"
              style={{
                fontSize: "10px",
                // marginLeft:'-5px',
                padding: "1px",
                fontWeight: "500",
                color: "var(--themeColor)",
              }}
            >
              C
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Worldforcast() {
  const [forecasts, setForecasts] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
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
        <div className="forecast-item">
          <div className="add-forecast-logo">
            <button
              id="add_forcast_btn"
              onClick={() => {
                addForecast();
                handleClick();
              }}
            >
              <span className="material-symbols-outlined">add</span>
            </button>
            <Snackbar
              open={open}
              autoHideDuration={2000}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
              <Alert
                onClose={handleClose}
                severity="success"
                variant="filled"
              >
                This is a success Alert inside a Snackbar!
              </Alert>
            </Snackbar>
          </div>
          <div className="add-forecast-box">
            <div>
              <div id="add-foracasttextDiv">
                <span style={{ marginBottom: "-5px" }}>World</span>
                <span>Forecast</span>
              </div>
              <div id="add-forcastsubtitleDiv">
                <span style={{ marginBottom: "-5px", fontSize: "10px" }}>
                  Add the cities you
                </span>
                <span style={{ fontSize: "10px" }}>are interested in</span>
              </div>
            </div>
          </div>
        </div>

        {forecasts.map((forecast, index) => (
          <ForecastItem
            key={index}
            city={forecast.city}
            country={forecast.country}
            temperature={forecast.temperature}
            minTemperature={forecast.minTemperature}
          />
        ))}
      </div>
    </div>
  );
}
