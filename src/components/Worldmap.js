import React, { useEffect, useState, useRef, useContext } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Tooltip,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Worldmap.css"; // Import your CSS file
import { ActiveUnitContext } from '../ActiveUnitContext';

const API_KEY = "24ac5750d6ad16e1431572932f4e42fa";

export default function Worldmap() {
  const {currentCity, setcurrentCity} = useContext(ActiveUnitContext)
  const mapRef = useRef(); // Create a ref for the map instance
  const [weatherData, setWeatherData] = useState([]);
  const [userLocation, setUserLocation] = useState(null); // To store user location
  const [userWeather, setUserWeather] = useState(null); // To store user weather data
  const [zoomLevel, setZoomLevel] = useState(2); // Default zoom
  const { setLoading } = useContext(ActiveUnitContext);
  
  const majorCities = [
    { name: "Karachi", coords: [24.8607, 67.0011] },
    { name: "New York City", coords: [40.7128, -74.006] },
    { name: "Islamabad", coords: [33.6844, 73.0479] },
    { name: "Los Angeles", coords: [34.0522, -118.2437] },
    { name: "London", coords: [51.5074, -0.1278] },
    { name: "Paris", coords: [48.8566, 2.3522] },
    { name: "Tokyo", coords: [35.6762, 139.6503] },
    { name: "Shanghai", coords: [31.2304, 121.4737] },
    { name: "Beijing", coords: [39.9042, 116.4074] },
    { name: "Moscow", coords: [55.7558, 37.6173] },
    { name: "Sydney", coords: [-33.8688, 151.2093] },
    { name: "São Paulo", coords: [-23.5505, -46.6333] },
    { name: "Buenos Aires", coords: [-34.6037, -58.3816] },
    { name: "Mexico City", coords: [19.4326, -99.1332] },
    { name: "Cairo", coords: [30.0444, 31.2357] },
    { name: "Mumbai", coords: [19.076, 72.8777] },
    { name: "Istanbul", coords: [41.0082, 28.9784] },
    { name: "Seoul", coords: [37.5665, 126.978] },
    { name: "Dubai", coords: [25.276987, 55.296249] },
    { name: "Lagos", coords: [6.5244, 3.3792] },
    { name: "Lima", coords: [-12.0464, -77.0428] },
    { name: "Rio de Janeiro", coords: [-22.9068, -43.1729] },
    { name: "Berlin", coords: [52.52, 13.405] },
    { name: "Bangkok", coords: [13.7563, 100.5018] },
    { name: "Jakarta", coords: [-6.2088, 106.8456] },
    { name: "Tehran", coords: [35.6892, 51.389] },
    { name: "Baghdad", coords: [33.3152, 44.3661] },
    { name: "Madrid", coords: [40.4168, -3.7038] },
    { name: "Rome", coords: [41.9028, 12.4964] },
    { name: "Toronto", coords: [43.651, -79.347] },
    { name: "Johannesburg", coords: [-26.2041, 28.0473] },
    { name: "Kuala Lumpur", coords: [3.139, 101.6869] },
    { name: "Singapore", coords: [1.3521, 103.8198] },
    { name: "Athens", coords: [37.9838, 23.7275] },
    { name: "Nairobi", coords: [-1.2864, 36.8172] },
    { name: "Hanoi", coords: [21.0285, 105.8542] },
    { name: "Buenos Aires", coords: [-34.6037, -58.3816] },
    { name: "Tel Aviv", coords: [32.0853, 34.7818] },
    { name: "Mexico City", coords: [19.4326, -99.1332] },
    { name: "Melbourne", coords: [-37.8136, 144.9631] },
    { name: "Moscow", coords: [55.7558, 37.6173] },
    { name: "Vienna", coords: [48.2082, 16.3738] },
    { name: "Warsaw", coords: [52.2297, 21.0122] },
    { name: "Amsterdam", coords: [52.3676, 4.9041] },
    { name: "Lisbon", coords: [38.7223, -9.1393] },
    { name: "Bogotá", coords: [4.711, -74.0721] },
    { name: "Cape Town", coords: [-33.9249, 18.4241] },
    { name: "Kinshasa", coords: [-4.4419, 15.2663] },
    { name: "Manila", coords: [14.5995, 120.9842] },
  ];

  const minorCities = [
    { name: "Lahore", coords: [31.5497, 74.3436] },
    { name: "Kolkata", coords: [22.5726, 88.3639] },
    { name: "Hyderabad", coords: [17.385, 78.4867] },
    { name: "Chennai", coords: [13.0827, 80.2707] },
    { name: "Faisalabad", coords: [31.4504, 73.1349] },
    { name: "Durban", coords: [-29.8587, 31.0218] },
    { name: "Guangzhou", coords: [23.1291, 113.2644] },
    { name: "Shenzhen", coords: [22.5431, 114.0579] },
    { name: "Bangalore", coords: [12.9716, 77.5946] },
    { name: "St. Petersburg", coords: [59.9311, 30.3609] },
    { name: "Barcelona", coords: [41.3851, 2.1734] },
    { name: "Istanbul", coords: [41.0082, 28.9784] },
    { name: "Sydney", coords: [-33.8688, 151.2093] },
    { name: "Lusaka", coords: [-15.3875, 28.3228] },
    { name: "Luanda", coords: [-8.839, 13.2894] },
    { name: "Minsk", coords: [53.9006, 27.559] },
    { name: "Riyadh", coords: [24.7136, 46.6753] },
    { name: "Algiers", coords: [36.7372, 3.0865] },
    { name: "Addis Ababa", coords: [9.145, 40.4897] },
    { name: "Khartoum", coords: [15.5007, 32.5599] },
    { name: "Casablanca", coords: [33.5731, -7.5898] },
    { name: "Tunis", coords: [36.8065, 10.1815] },
    { name: "Monrovia", coords: [6.3, -10.797] },
    { name: "Tripoli", coords: [32.8872, 13.1913] },
    { name: "Mogadishu", coords: [2.0469, 45.3182] },
    { name: "Port Moresby", coords: [-9.4438, 147.1803] },
    { name: "Santiago", coords: [-33.4489, -70.6693] },
    { name: "Pune", coords: [18.5204, 73.8567] },
    { name: "Jaipur", coords: [26.9124, 75.7873] },
    { name: "Peshawar", coords: [34.0151, 71.5249] },
    { name: "Quebec City", coords: [46.8139, -71.2082] },
    { name: "Edmonton", coords: [53.5461, -113.4938] },
    { name: "Kharkiv", coords: [49.9935, 36.2304] },
    { name: "Tashkent", coords: [41.2995, 69.2401] },
    { name: "Lviv", coords: [49.8397, 24.0297] },
    { name: "Brisbane", coords: [-27.4698, 153.0251] },
    { name: "Adelaide", coords: [-34.9285, 138.6007] },
    { name: "Canberra", coords: [-35.2809, 149.13] },
  ];

  const additionalCities = [
    { name: "Winnipeg", coords: [49.8951, -97.1384] },
    { name: "Hobart", coords: [-42.8821, 147.3272] },
    { name: "Malé", coords: [4.1755, 73.5093] },
    { name: "Vientiane", coords: [17.9757, 102.6331] },
    { name: "Thimphu", coords: [27.4728, 89.6393] },
    { name: "Apia", coords: [-13.8333, -171.7667] },
    { name: "San José", coords: [9.9281, -84.0907] },
    { name: "San Salvador", coords: [13.6929, -89.2182] },
    { name: "Port-au-Prince", coords: [18.5944, -72.3074] },
    { name: "Panama City", coords: [8.9824, -79.5199] },
    { name: "Libreville", coords: [0.4162, 9.4673] },
    { name: "Bujumbura", coords: [-3.3614, 29.3599] },
    { name: "Kigali", coords: [-1.9706, 30.1044] },
    { name: "Bamako", coords: [12.6392, -8.0029] },
    { name: "Yaoundé", coords: [3.848, 11.5021] },
    { name: "Havana", coords: [23.1136, -82.3666] },
    { name: "Dhaka", coords: [23.8103, 90.4125] },
    { name: "Phnom Penh", coords: [11.5564, 104.9282] },
    { name: "Muscat", coords: [23.588, 58.3829] },
    { name: "Auckland", coords: [-36.8485, 174.7633] },
    { name: "Reykjavik", coords: [64.1466, -21.9426] },
    { name: "Nassau", coords: [25.0343, -77.3963] },
    { name: "Bridgetown", coords: [13.0975, -59.616] },
    { name: "Suva", coords: [-18.1416, 178.4419] },
    { name: "Vilnius", coords: [54.6872, 25.2797] },
    { name: "Tallinn", coords: [59.437, 24.7536] },
    { name: "Valletta", coords: [35.8997, 14.5146] },
    { name: "Podgorica", coords: [42.4304, 19.2594] },
    { name: "Sarajevo", coords: [43.8563, 18.4131] },
    { name: "Skopje", coords: [41.9981, 21.4254] },
    { name: "Port Louis", coords: [-20.1669, 57.5012] },
    { name: "Monaco", coords: [43.7384, 7.4246] },
    { name: "Vaduz", coords: [47.1416, 9.5215] },
    { name: "Andorra la Vella", coords: [42.5078, 1.5211] },
  ];

  // Fetch weather data
  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await Promise.all(
        [...majorCities, ...minorCities, ...additionalCities].map(
          async (city) => {
            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${city.coords[0]}&lon=${city.coords[1]}&appid=${API_KEY}`
            );
            const weather = await response.json();
            return { ...city, weather };
          }
        )
      );
      setWeatherData(data); // Update weather data
  
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation([latitude, longitude]); // Set user location
  
            // Fetch weather data for the user's city
            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
            );
            const weather = await response.json();
            setUserWeather({ coords: [latitude, longitude], weather });
            
            // Set the current city based on the fetched user's weather data
            setcurrentCity(weather.name); // Use the weather from the user's location
  
            // Zoom to user's location and set the map view
            if (mapRef.current) {
              mapRef.current.setView([latitude, longitude], 8); // Zoom and center to the user's location
            }
          },
        );
      }
    };
  
    fetchWeatherData();
  }, [majorCities, minorCities, additionalCities, API_KEY]); // Add dependencies as needed
  

  function ZoomHandler() {
    const map = useMap();
    useEffect(() => {
      const handleZoom = () => setZoomLevel(map.getZoom());
      map.on("zoomend", handleZoom);
      return () => {
        map.off("zoomend", handleZoom);
      };
    }, [map]);

    return null;
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        borderRadius: "20px",
      }}
    >
      <MapContainer
        center={userLocation || [20, 0]}
        zoom={userLocation ? 8 : 2}
        minZoom={2}
        noWrap={false}
        maxZoom={8}
        scrollWheelZoom={true}
        zoomControl={false}
        style={{ height: '100%', width: "100%", borderRadius: "28px" }}
        ref={mapRef}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
          attribution=""
        />

        <ZoomHandler />

        {userLocation && userWeather && (
          <CircleMarker
            center={userLocation}
            radius={7}
            fillColor="var(--themeColor)"
            color="yellow"
            weight={1}
            fillOpacity={1}
          >

            <Tooltip
              direction="bottom"
              offset={[0, 20]}
              opacity={1}
              fixed
              className="custom-tooltip"
              permanent
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                  height: "60px",
                  gap: "5px",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    alignSelf: "flex-start",
                    paddingTop: "2px",
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "20px" }}
                  >
                    location_on
                  </span>
                </div>
                <div>
                  <strong style={{ color: "var(--themeColor" }}>
                    Your Location
                  </strong>
                  <br />
                  <strong>Temp: </strong>
                  {(userWeather.weather.main.temp - 273.15).toFixed(2)}°C
                  <br />
                  <strong>Weather: </strong>
                  {userWeather.weather.weather[0].description}
                </div>
              </div>
            </Tooltip>
          </CircleMarker>
        )}

        {weatherData
          .filter((city) => majorCities.some((mc) => mc.name === city.name))
          .map((city, index) => {
            // Check if the city's name is the same as the user's location city
            const isUserCity =
              userWeather && userWeather.weather.name === city.name;

            // If it's the user's city, do not render the marker
            if (isUserCity) return null;

            return (
              <CircleMarker
                key={index}
                center={city.coords}
                radius={5}
                fillColor="var(--themeColor)"
                color="black"
                weight={1}
                fillOpacity={1}
              >
                <Tooltip
                  direction="bottom"
                  offset={[0, 20]}
                  opacity={1}
                  fixed
                  className="custom-tooltip"
                 
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "center",
                      height: "60px",
                      gap: "5px",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        alignSelf: "flex-start",
                        paddingTop: "2px",
                      }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "20px" }}
                      >
                        location_on
                      </span>
                    </div>
                    <div>
                      <strong style={{ color: "var(--themeColor" }}>
                        {city.name}
                      </strong>
                      <br />
                      <strong>Temp: </strong>
                      {(city.weather.main.temp - 273.15).toFixed(2)}°C
                      <br />
                      <strong>Weather: </strong>
                      {city.weather.weather[0].description}
                    </div>
                  </div>
                </Tooltip>
              </CircleMarker>
            );
          })}

        {/* Show Minor Cities only at higher zoom levels */}
        {zoomLevel >= 5 &&
          weatherData
            .filter((city) => minorCities.some((mc) => mc.name === city.name))
            .map((city, index) => (
              <CircleMarker
                key={index}
                center={city.coords}
                radius={5}
                fillColor="var(--themeColor)"
                color="black"
                weight={1}
                fillOpacity={1}
              >
                <Tooltip
                  direction="bottom"
                  offset={[0, 20]}
                  opacity={1}
                  fixed
                  className="custom-tooltip"
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "center",
                      height: "60px",
                      gap: "5px",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        alignSelf: "flex-start",
                        paddingTop: "2px",
                      }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "20px" }}
                      >
                        location_on
                      </span>
                    </div>
                    <div>
                      <strong style={{ color: "var(--themeColor" }}>
                        {city.name}
                      </strong>
                      <br />
                      <strong>Temp: </strong>
                      {(city.weather.main.temp - 273.15).toFixed(2)}°C
                      <br />
                      <strong>Weather: </strong>
                      {city.weather.weather[0].description}
                    </div>
                  </div>
                </Tooltip>
              </CircleMarker>
            ))}

        {zoomLevel >= 7 &&
          weatherData
            .filter((city) =>
              additionalCities.some((mc) => mc.name === city.name)
            )
            .map((city, index) => (
              <CircleMarker
                key={index}
                center={city.coords}
                radius={5}
                fillColor="var(--themeColor)"
                color="black"
                weight={1}
                fillOpacity={1}
              >
                <Tooltip
                  direction="bottom"
                  offset={[0, 20]}
                  opacity={1}
                  fixed
                  className="custom-tooltip"
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "center",
                      height: "60px",
                      gap: "5px",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        alignSelf: "flex-start",
                        paddingTop: "2px",
                      }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "20px" }}
                      >
                        location_on
                      </span>
                    </div>
                    <div>
                      <strong style={{ color: "var(--themeColor" }}>
                        {city.name}
                      </strong>
                      <br />
                      <strong>Temp: </strong>
                      {(city.weather.main.temp - 273.15).toFixed(2)}°C
                      <br />
                      <strong>Weather: </strong>
                      {city.weather.weather[0].description}
                    </div>
                  </div>
                </Tooltip>
              </CircleMarker>
            ))}
      </MapContainer>
    </div>
  );
}
