import React, { useState, useContext } from "react";
import "./Worldforcast.css";
import Swal from "sweetalert2";
import { ActiveUnitContext } from "../ActiveUnitContext";
import DeleteIcon from "@mui/icons-material/Delete";
import "animate.css";

export default function Worldforcast() {
  const [cityId, setcityId] = useState("");
  const { activeUnit } = useContext(ActiveUnitContext);

  const filterCities = async (query) => {
    const suggestions = document.getElementById("citySuggestions");
    suggestions.innerHTML = ""; // Clear previous suggestions

    if (query.length < 1) {
      suggestions.style.display = "none"; // Hide suggestions if the input is empty
      return;
    }

    try {
      // Fetching cities from the Open Meteo API
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=1&language=en&format=json`
      );
      const data = await response.json();

      // Check if cities were found
      if (data.results && data.results.length > 0) {
        // Filter the results to only include cities that start with the query
        const filteredCities = data.results.filter((city) =>
          city.name.toLowerCase().startsWith(query.toLowerCase())
        );

        // Populate suggestions
        filteredCities.forEach((city) => {
          const li = document.createElement("li");
          li.textContent = city.name + " (" + city.country_code + ")"; // Use city name from API response
          li.addEventListener("click", () => {
            document.getElementById("citySearch").value =
              city.name + " (" + city.country_code + ")"; // Set input to selected city
            suggestions.style.display = "none"; // Hide suggestions after selection
          });
          suggestions.appendChild(li);
        });

        // Show or hide suggestions based on the filtered results
        suggestions.style.display =
          filteredCities.length > 0 ? "block" : "none";
      } else {
        suggestions.style.display = "none"; // Hide if no matches
      }
    } catch (error) {
      console.error("Error fetching city data:", error);
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

    if (cities.length >= 10) {
      maxCityAlert();
      return;
    }

    swalWithBootstrapButtons
      .fire({
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
      })
      .then((result) => {
        if (result.isConfirmed) {
          
        }
      });

    // Attach event listeners after SweetAlert is displayed
    setTimeout(() => {
      const inputField = document.getElementById("citySearch");
      const suggestions = document.getElementById("citySuggestions");

      inputField.addEventListener("input", function () {
        const query = this.value;
        filterCities(query); // Call your filtering function here

        // Show or hide suggestions based on input
        if (query === "") {
          suggestions.style.display = "none"; // Hide suggestions if input is empty
        } else {
          suggestions.style.display = "block"; // Show suggestions if input is not empty
        }
      });

      // Hide suggestions when clicking outside
      document.addEventListener("click", function (event) {
        if (!event.target.closest(".swal2-popup")) {
          suggestions.style.display = "none"; // Hide suggestions
        }
      });
    }, 100); // Timeout to ensure elements are rendered
  };

  // Example function to filter cities and populate suggestions

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
        showClass: {
          popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
        `,
        },
        hideClass: {
          popup: `
        animate__animated
        animate__zoomOut
        animate__faster
        `,
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
      })
      .then((result) => {
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
  };

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

}