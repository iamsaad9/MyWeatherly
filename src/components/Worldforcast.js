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
  const [visible, setVisible] = useState(false);
  const [cityId, setcityId] = useState("");
  const { activeUnit } = useContext(ActiveUnitContext);
  const [alertVisible, setalertVisible] = useState(false);
  const [alertMsg, setalertMsg] = useState("");
  const [alertType, setalertType] = useState("");

  const showAlert = (msg, type) => {
    setalertMsg(msg);
    setalertType(type);
    setalertVisible(true);
  };

  const handleAlertClose = () => {
    setalertVisible(false);
  };

  var temp = 23;
  var minTemp = 17;
  const [cities, setCities] = useState([
    { id: 1, name: "Lisbon", country: "Portugal", temp: "23°", minTemp: "15°" },
    { id: 2, name: "Kyoto", country: "Japan", temp: "29°", minTemp: "16°" },
    { id: 3, name: "Antalya", country: "Türkiye", temp: "30°", minTemp: "19°" },
  ]);

  const handleLogoutClick = () => {
    Swal.fire({
      color: "white",
      icon: "error",
      title: "Oops...",
      text: "Cannot add More than 10 Forecast",
      confirmButtonColor: "var(--themeColor",
      background: "var(--elementBg",
    });
  };

  // Add a new city
  const addCity = () => {
    if (cities.length >= 10) {
      handleLogoutClick();
      return;
    }
    var newtemp = temp;
    var newminTemp = minTemp;
    if (activeUnit === "F") {
      newtemp = temp * (9 / 5) + 32;
      newminTemp = minTemp * (9 / 5) + 32;
    }

    const newCity = {
      id: cities.length + 1,
      name: "New City",
      country: "Unknown",
      temp: `${newtemp}°`,
      minTemp: `${newminTemp}°`,
    };

    setCities([newCity, ...cities]);
    showAlert("City Forecast Added", "success");
  };

  // Remove a city
  const removeCity = (id) => {
    setCities(cities.filter((city) => city.id !== id));
    showAlert("City Forecast Removed", "warning");
  };

  return (
    <div>
      <div id="WorldforecastDiv" className="forecast-container">
        <div className="forecast-item">
          <div className="add-forecast-logo">
            <button
              id="add_forcast_btn"
              onClick={addCity}
            >
              <span className="material-symbols-outlined">add</span>
            </button>
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
                  backgroundColor: "var(--themeColor",
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

        <Snackbar
          open={alertVisible}
          autoHideDuration={2000}
          onClose={handleAlertClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert onClose={handleAlertClose} severity={alertType} variant="filled">
            {alertMsg}
          </Alert>
        </Snackbar>

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
