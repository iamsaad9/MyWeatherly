import React, { useState, useContext } from "react";
import "./Worldforcast.css";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Swal from "sweetalert2";
import { ActiveUnitContext } from "../ActiveUnitContext";
import {
  CModal,
  CButton,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from "@coreui/react";


export default function Worldforcast() {

  // const [forecasts, setForecasts] = useState([]);
  // const [open, setOpen] = React.useState(false);
  // const [msg, setmsg] = React.useState('false');
  // const [alertType, setalertType] = React.useState('success');

  // const forcastItem1Ref = useRef(null);
  // const forcastItem2Ref = useRef(null);
  // const forcastItem3Ref = useRef(null);
  // const forcastItem4Ref = useRef(null)
  // const forcastItem5Ref = useRef(null)
  // const forcastItem6Ref = useRef(null)
  // const forcastItem7Ref = useRef(null)
  // const forcastItem8Ref = useRef(null)
  // const forcastItem9Ref = useRef(null)
  // const forcastItem10Ref = useRef(null)

  // const addForecastItem = () =>{
  //   if(forcastItem1Ref.current.style.display==='flex'){
  //     showAlert('Cannot add more than 10 Forecasts','error')
  //   }
  // }

  // const removeForecast = (ref) => {
  //   if (ref.current) {
  //     showAlert(`Forecast removed`, 'error'); // Assuming id was just ref
  //     console.log(ref);
  
  //     // Hide the forecast item
  //     ref.current.style.display = 'none';
  //   }
  // };


  // const showAlert = (msg,type) => {
  //   setOpen(true);
  //   setmsg(msg);
  //   setalertType(type);
  // };

  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  //   setOpen(false);
  // };

  // const addForecast = () => {
  //   // Here, you can customize the city, country, temperature, and minTemperature
  //   const newForecast = {
  //     city: "Tokyo",
  //     country: "Japan",
  //     temperature: 23,
  //     minTemperature: 14,
  //   };
  //   setForecasts((prevForecasts) => [...prevForecasts, newForecast]);
  // };

  const [visible, setVisible] = useState(false);
  const [cityId, setcityId] = useState("");
  const { activeUnit } = useContext(ActiveUnitContext);
  var temp = 23;
  var minTemp = 17;
  const [cities, setCities] = useState([
    { id: 1, name: "Lisbon", country: "Portugal", temp: "23°", minTemp: "15°" },
    { id: 2, name: "Kyoto", country: "Japan", temp: "29°", minTemp: "16°" },
    { id: 3, name: "Antalya", country: "Türkiye", temp: "30°", minTemp: "19°" },
  ]);

  const handleLogoutClick = () => {
    
    Swal.fire({
      color:'white',
      icon: "error",
      title: "Oops...",
      text: "Cannot add More than 10 Forecast",
      confirmButtonColor:'var(--themeColor',
      background:'var(--elementBg'
    });
  };


  // Add a new city
  const addCity = () => {
    if (cities.length >= 10) {
      // alert("Cannot add more than 10 cities");
      handleLogoutClick();
      return;
    }
    var newtemp = temp;
    var newminTemp = minTemp;
    if (activeUnit === "F") {
      console.log("In if condition");
      newtemp = temp * (9 / 5) + 32;
      newminTemp = minTemp * (9 / 5) + 32;
      console.log(newtemp);
    }

    // Use newtemp directly to create the new city
    const newCity = {
      id: cities.length + 1,
      name: "New City", // You can ask the user for city details
      country: "Unknown",
      temp: `${newtemp}°`, // Using newtemp, not Temp
      minTemp: `${newminTemp}°`,
    };

    setCities([newCity, ...cities]);
  };

  // Remove a city
  const removeCity = (id) => {
    setCities(cities.filter((city) => city.id !== id));
  };




  return (
    <div>
      <div id="WorldforecastDiv" className="forecast-container">
        <div className="forecast-item">
        <div className="add-forecast-logo">
          <button
            id="add_forcast_btn"
            onClick={() => {
              addCity();
            }}
          >
            <span className="material-symbols-outlined">add</span>
          </button>
          <Snackbar
            autoHideDuration={2000}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          >
            <Alert severity="success" variant="filled">
              abc
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
      
      {cities.map((city) => (
        <div
          className="forecast-item"
          id="first-country_forcast_box"
          key={city.id}
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
              onClick={() => {
                setcityId(city.id);
                setVisible(!visible);
              }}
            >
              <span className="material-symbols-outlined">{city.id}</span>
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
                  {city.name}
                </span>
                <span style={{ fontSize: "10px" }}>{city.country}</span>
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
                  {city.temp}
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
                  {activeUnit === "F" ? "F" : "C"}
                </span>
                <span style={{ fontSize: "20px" }}>/</span>
                <span className="temp_degree" style={{ fontSize: "15px" }}>
                  {city.minTemp}
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
                  {activeUnit === "F" ? "F" : "C"}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}

      <CModal
        transition={true}
        // portal={true}
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="LiveDemoExampleLabel"
      >
        <CModalHeader
          style={{
            backgroundColor: "var(--elementBg",
            color: "white",
            borderRadius: "5px 5px 0px 0px",
          }}
        >
          <CModalTitle id="LiveDemoExampleLabel">Warning</CModalTitle>
        </CModalHeader>
        <CModalBody
          style={{ backgroundColor: "var(--elementBg", color: "white" }}
        >
          <p>Are you sure you want to delete this Forcase item?</p>
        </CModalBody>
        <CModalFooter
          style={{
            backgroundColor: "var(--elementBg",
            color: "white",
            borderRadius: "0px 0px 5px 5px",
          }}
        >
          <CButton
            style={{
              backgroundColor: "var(--themeColor",
              border: "none",
              color: "black",
              fontWeight: "500",
            }}
            onClick={() => setVisible(false)}
          >
            Cancel
          </CButton>
          <CButton
            style={{
              backgroundColor: "#800000",
              color: "white",
              fontWeight: "500",
            }}
            onClick={() => {
              removeCity(cityId);
              setVisible(false);
            }}
          >
            Delete
          </CButton>
        </CModalFooter>
      </CModal>

      </div> 
    </div>
  );
}
