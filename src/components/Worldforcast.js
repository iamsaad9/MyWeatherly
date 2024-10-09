import React, { useState, useContext } from "react";
import "./Worldforcast.css";
import Swal from "sweetalert2";
import { ActiveUnitContext } from "../ActiveUnitContext";
import DeleteIcon from '@mui/icons-material/Delete';
import 'animate.css';
import ReactDOM from "react-dom";

export default function Worldforcast() {
  const [cityId, setcityId] = useState("");
  const { activeUnit } = useContext(ActiveUnitContext);
  const [isOpen, setIsOpen] = useState(false);
  const cityDataset = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
  ]
  // A list of cities for search (can be expanded to include more)
  const addcity = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "confirm_btn",
        cancelButton: "cancel_btn",
      },
      buttonsStyling: false,
    });
  
    if (cities.length >= 10) {
      maxCityAlert();
      return;
    }
  
    let inputHtml = `
      <input type="text" id="citySearch" class="swal2-input" placeholder="Type to search..." oninput="filterCities(this.value)">
      <ul id="citySuggestions" style="list-style-type: none; padding: 0; margin-top: 10px; max-height: 150px; overflow-y: auto;"></ul>
    `;
  
    swalWithBootstrapButtons.fire({
      title: "Add Forecast",
      html: inputHtml,
      showCancelButton: true,
      confirmButtonText: "Add",
      cancelButtonText: "Cancel!",
      reverseButtons: true,
      background: "var(--elementBg)",
      color: "white",
      backdrop: `rgba(0, 0, 0, 0.5)`,
      preConfirm: () => {
        const selectedCity = document.getElementById('citySearch').value;
        return selectedCity;
      }
    });
  
    // Filter city suggestions based on user input
    window.filterCities = function(query) {
      const suggestions = cityDataset.filter(city => city.toLowerCase().includes(query.toLowerCase()));
      const suggestionsList = suggestions.map(city => `<li style="cursor: pointer;">${city}</li>`).join('');
      document.getElementById('citySuggestions').innerHTML = suggestionsList;
  
      // Add click event for each suggestion
      document.querySelectorAll('#citySuggestions li').forEach(item => {
        item.onclick = () => {
          document.getElementById('citySearch').value = item.textContent; // Set the input value
          document.getElementById('citySuggestions').innerHTML = ''; // Clear suggestions
        };
      });
    };
  };

  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "confirm_btn",
        cancelButton: "cancel_btn"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      showClass: {
        popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
        `
      },
      hideClass: {
        popup: `
        animate__animated
        animate__zoomOut
        animate__faster
        `
      },
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel!",
      reverseButtons: true,
      background: "var(--elementBg)",
      color: "white",
      backdrop: `rgba(0, 0, 0, 0.5)`,

    }).then((result) => {
      if (result.isConfirmed) {
        setCities(cities.filter((city) => city.id !== id));
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Forecast has been deleted.",
          icon: "success",
          background: "var(--elementBg)",
          color: "white",
          backdrop: `rgba(0, 0, 0, 0.5)`,
        });
      }
    });
  }

  var temp = 23;
  var minTemp = 17;
  const [cities, setCities] = useState([
    { id: 1, name: "Lisbon", country: "Portugal", temp: "23°", minTemp: "15°" },
    { id: 2, name: "Kyoto", country: "Japan", temp: "29°", minTemp: "16°" },
    { id: 3, name: "Antalya", country: "Türkiye", temp: "30°", minTemp: "19°" },
  ]);

  const maxCityAlert = () => {
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
  // const addCity = () => {
  //   if (cities.length >= 10) {
  //     maxCityAlert();
  //     return;
  //   }

  //   var newtemp = temp;
  //   var newminTemp = minTemp;
  //   if (activeUnit === "F") {
  //     newtemp = temp * (9 / 5) + 32;
  //     newminTemp = minTemp * (9 / 5) + 32;
  //   }

  //   const newCity = {
  //     id: cities.length + 1,
  //     name: "New City",
  //     country: "Unknown",
  //     temp: `${newtemp}°`,
  //     minTemp: `${newminTemp}°`,
  //   };

  //   setCities([newCity, ...cities]);
  // };

  // Remove a city
  // const removeCity = (id) => {
  //   setCities(cities.filter((city) => city.id !== id));
  // };

  return (
    <div>
      <div id="WorldforecastDiv" className="forecast-container">
        <div className="forecast-item">
          <div className="add-forecast-logo">
            <button
              id="add_forcast_icon"
              onClick={addcity}
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
              
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              padding: "15px 0px",
            }}
          >
            <div id="closeBtn" 
             onClick={() => {  
              setcityId(city.id);
              handleDelete(city.id)
            }}>
            <DeleteIcon sx={{width:'15px',height:'15px',cursor:'pointer'}}/>
            </div>
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
              <div
                id="forcast_icon"
                style={{
                  outline: 'none',
                  height: "35px",
                  width: "35px",
                  borderRadius: "50%",
                  position: "absolute",
                  top: 0,
                  border: "none",
                  backgroundColor: "var(--themeColor",
                  display: "flex",
                  cursor:'pointer'
                }}
              >
                <span className="material-symbols-outlined">{city.id}</span>
              </div>
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
      </div>
    </div>
  );
}
