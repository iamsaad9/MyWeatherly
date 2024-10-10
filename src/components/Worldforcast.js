import React, { useState, useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { ActiveUnitContext } from "../ActiveUnitContext";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Worldforcast.css";
import "animate.css";
import StarIcon from "@mui/icons-material/Star";

export default function WorldForecast() {
  const { activeUnit } = useContext(ActiveUnitContext);
  const [cities, setCities] = useState([]);

  // Load cities from local storage on mount
  useEffect(() => {
    const savedCities = localStorage.getItem("cities");
    if (savedCities) {
      setCities(JSON.parse(savedCities));
    }
  }, []);

  const generateUniqueId = (name, latitude, longitude) => {
    return `${name}-${latitude}-${longitude}`;
  };

  const filterCities = async (query) => {
    const suggestions = document.getElementById("citySuggestions");
    suggestions.innerHTML = ""; // Clear previous suggestions

    if (query.length < 1) {
      suggestions.style.display = "none"; // Hide suggestions if the input is empty
      return;
    }

    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=1&language=en&format=json`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch city data");
      }

      const data = await response.json();

      if (data.results && data.results.length > 0) {
        data.results.forEach((city) => {
          const li = document.createElement("li");
          li.textContent = `${city.name} (${city.country_code})`;
          li.addEventListener("click", () => {
            document.getElementById(
              "citySearch"
            ).value = `${city.name} (${city.country_code})`;
            // Immediately call addCity with the selected city's data
            fetchCity(
              city.latitude,
              city.longitude,
              city.name,
              city.country_code
            );

            suggestions.style.display = "none"; // Hide suggestions after selection
          });
          suggestions.appendChild(li);
        });

        suggestions.style.display = "block"; // Show suggestions
      } else {
        suggestions.style.display = "none"; // Hide if no matches
      }
    } catch (error) {
      console.error("Error fetching city data:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Could not retrieve city data. Please try again later.",
        confirmButtonColor: "var(--themeColor)",
        background: "var(--elementBg)",
      });
    }
  };

  const fetchCity = async (latitude, longitude, name, country) => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=1`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }

      const weatherData = await response.json();

      const currentTemp = parseFloat(
        weatherData.current.temperature_2m
      ).toFixed(0);
      const minTemp = weatherData.daily.temperature_2m_min[0];

      const newCity = {
        id: generateUniqueId(name, latitude, longitude), // Unique ID
        name,
        country,
        temp: `${currentTemp}°`,
        minTemp: `${minTemp}°`,
      };

      const isCityAlreadyPresent = cities.some(
        (city) => city.id === newCity.id
      );

      const submit = document.querySelector(".confirm_btn");
      submit.addEventListener("click", () => {
        if (isCityAlreadyPresent) {
          Swal.fire({
            icon: "warning",
            title: "Duplicate City",
            text: "This city is already in your list.",
            background: "var(--elementBg)",
            color: "white",
            backdrop: `rgba(0, 0, 0, 0.5)`,
          });
          return; // Stop further execution to prevent adding duplicate
        }

        const updatedCities = [newCity, ...cities];
        setCities(updatedCities);
        localStorage.setItem("cities", JSON.stringify(updatedCities)); // Save to local storage
        Swal.fire({
          title: "Success!",
          text: "Forecast has been added.",
          icon: "success",
          background: "var(--elementBg)",
          color: "white",
          backdrop: `rgba(0, 0, 0, 0.5)`,
        });
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Could not retrieve weather data. Please try again later.",
        confirmButtonColor: "var(--themeColor)",
        background: "var(--elementBg)",
      });
    }
  };

  const addcity = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "confirm_btn",
        cancelButton: "cancel_btn",
      },
      buttonsStyling: false,
    });

    if (cities.length >= 5) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Cannot add more than 5 forecasts",
        confirmButtonColor: "var(--themeColor)",
        background: "var(--elementBg)",
      });
      return;
    }

    swalWithBootstrapButtons.fire({
      allowOutsideClick: false,
      title: "Add Forecast",
      html: `
          <input type="text" id="citySearch" class="swal2-input" placeholder="Search Any City...">
          <ul id="citySuggestions" style="list-style-type: none; padding: 0; margin-top: 10px;"></ul>
        `,
      showCancelButton: true,
      confirmButtonText: "Add",
      cancelButtonText: "Cancel",
      reverseButtons: true,
      background: "var(--elementBg)",
      color: "white",
      backdrop: `rgba(0, 0, 0, 0.5)`,
    });

    setTimeout(() => {
      const inputField = document.getElementById("citySearch");
      const suggestions = document.getElementById("citySuggestions");

      inputField.addEventListener("input", function () {
        const query = this.value;
        filterCities(query);
      });

      document.addEventListener("click", function (event) {
        if (!event.target.closest(".swal2-popup")) {
          suggestions.style.display = "none"; // Hide suggestions if clicked outside
        }
      });
    }, 100); // Timeout to ensure elements are rendered
  };

  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "confirm_btn",
        cancelButton: "cancel_btn",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        icon: "warning",
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonText: "Delete",
        cancelButtonText: "Cancel",
        background: "var(--elementBg)",
        color: "white",
        backdrop: `rgba(0, 0, 0, 0.5)`,
      })
      .then((result) => {
        if (result.isConfirmed) {
          const updatedCities = cities.filter((city) => city.id !== id);
          setCities(updatedCities);
          localStorage.setItem("cities", JSON.stringify(updatedCities)); // Update local storage
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
  };

  return (
    <div>
      <div id="WorldforecastDiv" className="forecast-container">
        <div className="forecast-item">
          <div className="add-forecast-logo">
            <button id="add_forcast_icon" onClick={addcity}>
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
            key={city.id}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              padding: "15px 0px",
            }}
          >
            <div
              id="closeBtn"
              onClick={() => {
                handleDelete(city.id);
              }}
            >
              <span
                class="material-symbols-outlined"
                style={{ fontSize: "15px",cursor:'pointer' }}
              >
                close
              </span>
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
                  outline: "none",
                  height: "35px",
                  width: "35px",
                  borderRadius: "50%",
                  position: "absolute",
                  top: 0,
                  border: "none",
                  backgroundColor: "var(--themeColor)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                {/* <span className="material-symbols-outlined"></span> */}
                <StarIcon sx={{ fontSize: 25 }} />
                {/* <FontAwesomeIcon icon="fa-solid fa-star" /> */}
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
                  <span style={{ fontSize: "10px" }}>{city.id}</span>
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
                  <span className="temp_degree" style={{ fontSize: "20px" }}>
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
