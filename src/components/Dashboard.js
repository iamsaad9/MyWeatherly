import React, { useContext, useEffect } from "react";
import "./Dashboard.css";
import { useRef } from "react";
import Card from "@mui/material/Card";
import Graph from "./Graph";
import { useState } from "react";
import Worldmap from "./Worldmap";
import { ActiveUnitContext } from "../ActiveUnitContext";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import PrecipitationIcon from '../images/Weather Icons/PrecipitationIcon.png'
import {
  WiNA,
  WiDaySunny,
  WiDayCloudy,
  WiNightAltCloudy,
  WiDayShowers,
  WiNightAltShowers,
  WiCloudy,
  WiRain,
  WiThunderstorm,
  WiNightAltPartlyCloudy,
  WiSnow,
  WiDaySunnyOvercast,
  WiNightFog,
  WiDayFog,
  WiDaySleet,
  WiNightAltSleet,
  WiDayRain,
  WiNightAltRain,
  WiRainMix,
  WiDaySnow,
  WiNightSnow,
  WiDayHail,
  WiNightAltHail,
  WiNightAltRainMix,
  WiDayRainMix,
  WiNightSleetStorm,
  WiDaySleetStorm,
  WiNightClear,
} from "weather-icons-react";
import nightCloud from "../images/Weather Icons/nightcloud.png";

export default function Dashboard() {
  const day3Ref = useRef(null);
  const day10Ref = useRef(null);
  const day10DivRef = useRef(null);
  const forecastDiv = useRef(null);
  const humidityRef = useRef(null);
  const uvindexRef = useRef(null);
  const rainfallRef = useRef(null);
  const pressureRef = useRef(null);
  const [activeOverview, setactiveOverview] = useState("humidity");
  const [location, setLocation] = useState({ city: "", country: "" });
  const { setLoading } = useContext(ActiveUnitContext);
  const [cityTemp, setcityTemp] = useState("");
  const [cityHumid, setcityHumid] = useState("");
  const [cityWind, setcityWind] = useState("");
  const [hourlyTemp, sethourlyTemp] = useState([]);
  const [wmoCode, setWmoCode] = useState([]);
  const [timeStamps, setTimeStamps] = useState([]);
  const [dailyDate, setdailyDate] = useState([]);
  const [forecastWmoCode, setforecastWmoCode] = useState([]);
  const [dailyTempMax,setdailyTempMax] = useState([]);
  const [dailyTempMin,setdailyTempMin] = useState([]);
  const [dailyPrec,setdailyPrec] = useState([]);
  
  const wmoCodeMap = {
    0: {
      day: {
        description: "Sunny",
        image: <WiDaySunny size={30} color="#000" />,
      },
      night: {
        description: "Clear",
        image: <WiNightClear size={30} color="#000" />,
      },
    },
    1: {
      day: {
        description: "Mainly Sunny",
        image: <WiDaySunnyOvercast size={30} color="#000" />,
      },
      night: {
        description: "Mainly Clear",
        image: <WiNightAltPartlyCloudy size={30} color="#000" />,
      },
    },
    2: {
      day: {
        description: "Partly Cloudy",
        image: <WiDayCloudy size={30} color="#000" />,
      },
      night: {
        description: "Partly Cloudy",
        image: <WiNightAltCloudy size={30} color="#000" />,
      },
    },
    3: {
      day: {
        description: "Cloudy",
        image: <WiCloudy size={30} color="#000" />,
      },
      night: {
        description: "Cloudy",
        image: <WiCloudy size={30} color="#000" />,
      },
    },
    45: {
      day: {
        description: "Foggy",
        image: <WiDayFog size={30} color="#000" />,
      },
      night: {
        description: "Foggy",
        image: <WiNightFog size={30} color="#000" />,
      },
    },
    48: {
      day: {
        description: "Rime Fog",
        image: <WiNightFog size={30} color="#000" />,
      },
      night: {
        description: "Rime Fog",
        image: <WiNightFog size={30} color="#000" />,
      },
    },
    51: {
      day: {
        description: "Light Drizzle",
        image: <WiDayShowers size={30} color="#000" />,
      },
      night: {
        description: "Light Drizzle",
        image: <WiNightAltShowers size={30} color="#000" />,
      },
    },
    53: {
      day: {
        description: "Drizzle",
        image: <WiDayShowers size={30} color="#000" />,
      },
      night: {
        description: "Drizzle",
        image: <WiNightAltShowers size={30} color="#000" />,
      },
    },
    55: {
      day: {
        description: "Heavy Drizzle",
        image: <WiDayShowers size={30} color="#000" />,
      },
      night: {
        description: "Heavy Drizzle",
        image: <WiNightAltShowers size={30} color="#000" />,
      },
    },
    56: {
      day: {
        description: "Light Freezing Drizzle",
        image: <WiDaySleet size={30} color="#000" />,
      },
      night: {
        description: "Light Freezing Drizzle",
        image: <WiNightAltSleet size={30} color="#000" />,
      },
    },
    57: {
      day: {
        description: "Freezing Drizzle",
        image: <WiDaySleet size={30} color="#000" />,
      },
      night: {
        description: "Freezing Drizzle",
        image: <WiNightAltSleet size={30} color="#000" />,
      },
    },
    61: {
      day: {
        description: "Light Rain",
        image: <WiDayRain size={30} color="#000" />,
      },
      night: {
        description: "Light Rain",
        image: <WiNightAltRain size={30} color="#000" />,
      },
    },
    63: {
      day: {
        description: "Rain",
        image: <WiRain size={30} color="#000" />,
      },
      night: {
        description: "Rain",
        image: <WiRain size={30} color="#000" />,
      },
    },
    65: {
      day: {
        description: "Heavy Rain",
        image: <WiRain size={30} color="#000" />,
      },
      night: {
        description: "Heavy Rain",
        image: <WiRain size={30} color="#000" />,
      },
    },
    66: {
      day: {
        description: "Light Freezing Rain",
        image: <WiRainMix size={30} color="#000" />,
      },
      night: {
        description: "Light Freezing Rain",
        image: <WiRainMix size={30} color="#000" />,
      },
    },
    67: {
      day: {
        description: "Freezing Rain",
        image: <WiRainMix size={30} color="#000" />,
      },
      night: {
        description: "Freezing Rain",
        image: <WiRainMix size={30} color="#000" />,
      },
    },
    71: {
      day: {
        description: "Light Snow",
        image: <WiDaySnow size={30} color="#000" />,
      },
      night: {
        description: "Light Snow",
        image: <WiNightSnow size={30} color="#000" />,
      },
    },
    73: {
      day: {
        description: "Snow",
        image: <WiSnow size={30} color="#000" />,
      },
      night: {
        description: "Snow",
        image: <WiSnow size={30} color="#000" />,
      },
    },
    75: {
      day: {
        description: "Heavy Snow",
        image: <WiSnow size={30} color="#000" />,
      },
      night: {
        description: "Heavy Snow",
        image: <WiSnow size={30} color="#000" />,
      },
    },
    77: {
      day: {
        description: "Snow Grains",
        image: <WiSnow size={30} color="#000" />,
      },
      night: {
        description: "Snow Grains",
        image: <WiSnow size={30} color="#000" />,
      },
    },
    80: {
      day: {
        description: "Light Showers",
        image: <WiDayShowers size={30} color="#000" />,
      },
      night: {
        description: "Light Showers",
        image: <WiNightAltShowers size={30} color="#000" />,
      },
    },
    81: {
      day: {
        description: "Showers",
        image: <WiDayShowers size={30} color="#000" />,
      },
      night: {
        description: "Showers",
        image: <WiNightAltShowers size={30} color="#000" />,
      },
    },
    82: {
      day: {
        description: "Heavy Showers",
        image: <WiDayShowers size={30} color="#000" />,
      },
      night: {
        description: "Heavy Showers",
        image: <WiNightAltShowers size={30} color="#000" />,
      },
    },
    85: {
      day: {
        description: "Light Snow Showers",
        image: <WiDayHail size={30} color="#000" />,
      },
      night: {
        description: "Light Snow Showers",
        image: <WiNightAltHail size={30} color="#000" />,
      },
    },
    86: {
      day: {
        description: "Snow Showers",
        image: <WiDayRainMix size={30} color="#000" />,
      },
      night: {
        description: "Snow Showers",
        image: <WiNightAltRainMix size={30} color="#000" />,
      },
    },
    95: {
      day: {
        description: "Thunderstorm",
        image: <WiThunderstorm size={30} color="#000" />,
      },
      night: {
        description: "Thunderstorm",
        image: <WiThunderstorm size={30} color="#000" />,
      },
    },
    96: {
      day: {
        description: "Light Thunderstorms With Hail",
        image: <WiDaySleetStorm size={30} color="#000" />,
      },
      night: {
        description: "Light Thunderstorms With Hail",
        image: <WiNightSleetStorm size={30} color="#000" />,
      },
    },
    99: {
      day: {
        description: "Thunderstorm With Hail",
        image: <WiDaySleetStorm size={30} color="#000" />,
      },
      night: {
        description: "Thunderstorm With Hail",
        image: <WiNightSleetStorm size={30} color="#000" />,
      },
    },
    // Add more WMO codes as needed
  };

  useEffect(() => {
    // countries.registerLocale(enLocale);

    const getLocation = () => {
      // setLoading(true);
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, handleError);
      } else {
        // setLoading(false);
      }
    };

    const success = (position) => {
      const { latitude, longitude } = position.coords;
      getCityInfo(latitude, longitude);
    };
    const handleError = () => {
      // setLoading(false);
    };

    const getCityInfo = async (lat, lon) => {             //Fetching current City Weather
      setLoading(true);
      console.log(lat, lon);
      // karachi coods: lat = 24.8607 long = 67.0011
      const city_url = `https://api-bdc.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`;
      const weather_url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code&timezone=auto&forecast_days=1`;

      const cityName = await fetch(city_url);
      const cityWeather = await fetch(weather_url);

      if (!cityName.ok || !cityWeather.ok) {
        throw new Error(`HTTP error!`);
      }
      setLoading(false);
      const citydata = await cityName.json();
      const weatherData = await cityWeather.json();

      if (
        (citydata.city &&
          citydata.countryCode &&
          weatherData.current.temperature_2m &&
          weatherData.current.relative_humidity_2m &&
          weatherData.current.wind_speed_10m &&
          weatherData.hourly.temperature_2m,
        weatherData.hourly.time)
      ) {
        const fullCountryName = countries.getName(citydata.countryCode, "en");
        const roundedTemperatures = weatherData.hourly.temperature_2m.map(
          (temp) => parseFloat(temp).toFixed(0)
        );
        setLocation({ city: citydata.city, country: fullCountryName });
        setcityTemp(weatherData.current.temperature_2m);
        setcityHumid(weatherData.current.relative_humidity_2m);
        setcityWind(weatherData.current.wind_speed_10m);
        sethourlyTemp(roundedTemperatures);
        setWmoCode(weatherData.hourly.weather_code);
        setTimeStamps(weatherData.hourly.time);
      }
    };



    const getForecastInfo = async (lat, lon) => {             //Fetching current City Weather
      setLoading(true);
      const forecast_url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto&forecast_days=14`;
    
      // const forecast = await fetch(city_url);
      if (!forecast_url.ok) {
        throw new Error(`HTTP error!`);
      }
      const forecastData = await forecast_url.json();      
      setLoading(false);
      if (
        (forecastData.daily.time &&
          forecastData.daily.weather_code &&  forecastData.daily.temperature_2m_max && forecastData.daily.temperature_2m_min)
      ) {
        // const fullCountryName = countries.getName(citydata.countryCode, "en");

        // setLocation({ city: citydata.city, country: fullCountryName });
       
      }
    };
  }, []);

  const isDayTime = (localtime) => {
    const hours = localtime.getHours();
    return hours >= 6 && hours < 18;
  };

  const renderWeather = (code, localTime) => {
    const dayOrNight = isDayTime(localTime) ? "day" : "night";
    console.log(dayOrNight);
    const weatherData = wmoCodeMap[code];
    console.log(localTime);

    if (weatherData) {
      return <div>{weatherData[dayOrNight].image}</div>;
    } 
    else {
      return <WiNA size={30} color="#000" />
    }
  };

  const scrollLeft = () => {
    const div = document.getElementById("hourly");
    div.scrollLeft -= 320; // Adjust value to control scroll speed
  };

  const scrollRight = () => {
    const div = document.getElementById("hourly");
    div.scrollLeft += 320; // Adjust value to control scroll speed
  };

  const changetoDay3 = () => {
    if (
      day3Ref.current &&
      day10Ref.current &&
      forecastDiv.current &&
      day10DivRef
    ) {
      day10Ref.current.style.backgroundColor = "transparent";
      day10Ref.current.style.color = "white";
      day10DivRef.current.style.display = "none";

      day3Ref.current.style.backgroundColor = "#be83de";
      day3Ref.current.style.color = "black";
      day3Ref.current.style.fontWeight = "600";

      forecastDiv.current.style.overflow = "hidden";
    }
  };

  const changetoDay10 = () => {
    if (day3Ref.current && day10Ref.current && forecastDiv.current) {
      day3Ref.current.style.backgroundColor = "transparent";
      day3Ref.current.style.color = "white";

      day10Ref.current.style.backgroundColor = "#be83de";
      day10Ref.current.style.color = "black";
      day10Ref.current.style.fontWeight = "600";
      day10DivRef.current.style.display = "flex";

      forecastDiv.current.style.overflow = "scroll";
      forecastDiv.current.style.overflowX = "hidden";
    }
  };

  const changetouvIndex = () => {
    if (
      humidityRef.current &&
      uvindexRef.current &&
      rainfallRef.current &&
      pressureRef.current
    ) {
      setactiveOverview("uvindex");
      uvindexRef.current.style.backgroundColor = "#be83de";
      uvindexRef.current.style.color = "black";
      uvindexRef.current.style.fontWeight = "600";
      humidityRef.current.style.backgroundColor = "transparent";
      humidityRef.current.style.color = "white";
      rainfallRef.current.style.backgroundColor = "transparent";
      rainfallRef.current.style.color = "white";
      pressureRef.current.style.backgroundColor = "transparent";
      pressureRef.current.style.color = "white";
    }
  };

  const changetohumidity = () => {
    if (
      humidityRef.current &&
      uvindexRef.current &&
      rainfallRef.current &&
      pressureRef.current
    ) {
      setactiveOverview("humidity");
      humidityRef.current.style.backgroundColor = "#be83de";
      humidityRef.current.style.color = "black";
      humidityRef.current.style.fontWeight = "600";
      uvindexRef.current.style.backgroundColor = "transparent";
      uvindexRef.current.style.color = "white";
      rainfallRef.current.style.backgroundColor = "transparent";
      rainfallRef.current.style.color = "white";
      pressureRef.current.style.backgroundColor = "transparent";
      pressureRef.current.style.color = "white";
    }
  };

  const changetorainfall = () => {
    if (
      humidityRef.current &&
      uvindexRef.current &&
      rainfallRef.current &&
      pressureRef.current
    ) {
      setactiveOverview("rainfall");
      rainfallRef.current.style.backgroundColor = "#be83de";
      rainfallRef.current.style.color = "black";
      rainfallRef.current.style.fontWeight = "600";
      humidityRef.current.style.backgroundColor = "transparent";
      humidityRef.current.style.color = "white";
      pressureRef.current.style.backgroundColor = "transparent";
      pressureRef.current.style.color = "white";
      uvindexRef.current.style.backgroundColor = "transparent";
      uvindexRef.current.style.color = "white";
    }
  };

  const changetopressure = () => {
    if (
      humidityRef.current &&
      uvindexRef.current &&
      rainfallRef.current &&
      pressureRef.current
    ) {
      setactiveOverview("pressure");
      pressureRef.current.style.backgroundColor = "#be83de";
      pressureRef.current.style.color = "black";
      pressureRef.current.style.fontWeight = "600";
      humidityRef.current.style.backgroundColor = "transparent";
      humidityRef.current.style.color = "white";
      rainfallRef.current.style.backgroundColor = "transparent";
      rainfallRef.current.style.color = "white";
      uvindexRef.current.style.backgroundColor = "transparent";
      uvindexRef.current.style.color = "white";
    }
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />

      <div id="container">
        <div className="mainRow">
          <div className="weatherCard">
            <div className="weatherInfo">
              <div id="weatherlogo"></div>

              <div id="weatherArea">
                <div className="weatherDetails">
                  <span className="location">{location.city}</span>
                  <span className="country">{location.country}</span>
                </div>
              </div>

              <div id="temperature">
                <div className="weatherDetails">
                  <div>
                    <span className="tempValue temp_degree">{cityTemp}° </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "15px",
                        // marginLeft: "-5px",
                        color: "var(--themeColor)",
                      }}
                    >
                      C
                    </span>
                  </div>
                  <span className="tempLabel">Temperature</span>
                </div>
              </div>

              <div id="humidity">
                <div className="weatherDetails">
                  <div>
                    <span className="humidityValue">{cityHumid} </span>
                    <span
                      style={{
                        fontSize: "15px",
                        // marginLeft: "-5px",
                        color: "var(--themeColor)",
                      }}
                    >
                      %
                    </span>
                  </div>
                  <span className="humidityLabel">Humidity</span>
                </div>
              </div>

              <div id="wind">
                <div className="weatherDetails">
                  <div>
                    <span className="windSpeed">{cityWind} </span>
                    <span
                      style={{
                        fontSize: "15px",
                        // marginLeft: "-5px",
                        color: "var(--themeColor)",
                      }}
                    >
                      Km/h
                    </span>
                  </div>
                  <span className="windLabel">Wind Speed</span>
                </div>
              </div>
            </div>

            <div
              style={{
                position: "relative",
                width: "100%",
                overflow: "hidden",
              }}
            >
              <button id="scroll_left_btn" onClick={scrollLeft}>
                <span
                  className="material-symbols-outlined"
                  id="scroll_left_btn_span"
                >
                  arrow_back_ios
                </span>
              </button>

              <button id="scroll_right_btn" onClick={scrollRight}>
                <span
                  className="material-symbols-outlined"
                  id="scroll_right_btn_span"
                >
                  arrow_forward_ios
                </span>
              </button>

              <div id="hourly">
                <Card
                  sx={{
                    backgroundColor: "var(--themeColor)",
                    color: "var(--elementBg)",
                    borderRadius: "20px",
                  }}
                  className="hours"
                >
                  <span className="hour_text" style={{ backgroundColor: "" }}>
                    12 am
                  </span>
                  {wmoCode && timeStamps ? (
                    renderWeather(wmoCode[0], new Date(timeStamps[0]))
                  ) : (
                    <WiNA size={30} color="#000" />
                  )}

                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      {hourlyTemp[0]}
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        fontWeight: "700",
                      }}
                    >
                      C
                    </span>
                  </div>
                </Card>

                <Card
                  sx={{
                    backgroundColor: "var(--themeColor)",
                    color: "var(--elementBg)",
                    borderRadius: "20px",
                  }}
                  className="hours"
                >
                  <span className="hour_text" style={{ backgroundColor: "" }}>
                    1 am
                  </span>
                  {wmoCode && timeStamps ? (
                    renderWeather(wmoCode[1], new Date(timeStamps[1]))
                  ) : (
                    <WiNA size={30} color="#000" />
                  )}

                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      {hourlyTemp[1]}°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        fontWeight: "700",
                      }}
                    >
                      C
                    </span>
                  </div>
                </Card>

                <Card
                  sx={{
                    backgroundColor: "var(--themeColor)",
                    color: "var(--elementBg)",
                    borderRadius: "20px",
                  }}
                  className="hours"
                >
                  <span className="hour_text" style={{ backgroundColor: "" }}>
                    2 am
                  </span>
                  {wmoCode && timeStamps ? (
                    renderWeather(wmoCode[2], new Date(timeStamps[2]))
                  ) : (
                    <WiNA size={30} color="#000" />
                  )}
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      {hourlyTemp[2]}°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        fontWeight: "700",
                      }}
                    >
                      C
                    </span>
                  </div>
                </Card>

                <Card
                  sx={{
                    backgroundColor: "var(--themeColor)",
                    color: "var(--elementBg)",
                    borderRadius: "20px",
                  }}
                  className="hours"
                >
                  <span className="hour_text" style={{ backgroundColor: "" }}>
                    3 am
                  </span>
                  {wmoCode && timeStamps ? (
                    renderWeather(wmoCode[3], new Date(timeStamps[3]))
                  ) : (
                    <WiNA size={30} color="#000" />
                  )}
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      {hourlyTemp[3]}°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        fontWeight: "700",
                      }}
                    >
                      C
                    </span>
                  </div>
                </Card>

                <Card
                  sx={{
                    backgroundColor: "var(--themeColor)",
                    color: "var(--elementBg)",
                    borderRadius: "20px",
                  }}
                  className="hours"
                >
                  <span className="hour_text" style={{ backgroundColor: "" }}>
                    4 am
                  </span>
                  {wmoCode && timeStamps ? (
                    renderWeather(wmoCode[4], new Date(timeStamps[4]))
                  ) : (
                    <WiNA size={30} color="#000" />
                  )}
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      {hourlyTemp[4]}°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        fontWeight: "700",
                      }}
                    >
                      C
                    </span>
                  </div>
                </Card>

                <Card
                  sx={{
                    backgroundColor: "var(--themeColor)",
                    color: "var(--elementBg)",
                    borderRadius: "20px",
                  }}
                  className="hours"
                >
                  <span className="hour_text" style={{ backgroundColor: "" }}>
                    4 am
                  </span>
                  {wmoCode && timeStamps ? (
                    renderWeather(wmoCode[5], new Date(timeStamps[5]))
                  ) : (
                    <WiNA size={30} color="#000" />
                  )}

                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      {hourlyTemp[5]}°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        fontWeight: "700",
                      }}
                    >
                      C
                    </span>
                  </div>
                </Card>

                <Card
                  sx={{
                    backgroundColor: "var(--themeColor)",
                    color: "var(--elementBg)",
                    borderRadius: "20px",
                  }}
                  className="hours"
                >
                  <span className="hour_text" style={{ backgroundColor: "" }}>
                    6 am
                  </span>
                  {wmoCode && timeStamps ? (
                    renderWeather(wmoCode[6], new Date(timeStamps[6]))
                  ) : (
                    <WiNA size={30} color="#000" />
                  )}
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      {hourlyTemp[6]}°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        fontWeight: "700",
                      }}
                    >
                      C
                    </span>
                  </div>
                </Card>

                <Card
                  sx={{
                    backgroundColor: "var(--themeColor)",
                    color: "var(--elementBg)",
                    borderRadius: "20px",
                  }}
                  className="hours"
                >
                  <span className="hour_text" style={{ backgroundColor: "" }}>
                    7 am
                  </span>
                  {wmoCode && timeStamps ? (
                    renderWeather(wmoCode[7], new Date(timeStamps[7]))
                  ) : (
                    <WiNA size={30} color="#000" />
                  )}
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      {hourlyTemp[7]}°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        fontWeight: "700",
                      }}
                    >
                      C
                    </span>
                  </div>
                </Card>

                <Card
                  sx={{
                    backgroundColor: "var(--themeColor)",
                    color: "var(--elementBg)",
                    borderRadius: "20px",
                  }}
                  className="hours"
                >
                  <span className="hour_text" style={{ backgroundColor: "" }}>
                    8 am
                  </span>

                  {wmoCode && timeStamps ? (
                    renderWeather(wmoCode[8], new Date(timeStamps[8]))
                  ) : (
                    <WiNA size={30} color="#000" />
                  )}
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      {hourlyTemp[8]}°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        fontWeight: "700",
                      }}
                    >
                      C
                    </span>
                  </div>
                </Card>

                <Card
                  sx={{
                    backgroundColor: "var(--themeColor)",
                    color: "var(--elementBg)",
                    borderRadius: "20px",
                  }}
                  className="hours"
                >
                  <span className="hour_text" style={{ backgroundColor: "" }}>
                    9 am
                  </span>

                  {wmoCode && timeStamps ? (
                    renderWeather(wmoCode[9], new Date(timeStamps[9]))
                  ) : (
                    <WiNA size={30} color="#000" />
                  )}
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      {hourlyTemp[9]}°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        fontWeight: "700",
                      }}
                    >
                      C
                    </span>
                  </div>
                </Card>

                <Card
                  sx={{
                    backgroundColor: "var(--themeColor)",
                    color: "var(--elementBg)",
                    borderRadius: "20px",
                  }}
                  className="hours"
                >
                  <span className="hour_text" style={{ backgroundColor: "" }}>
                    10 am
                  </span>
                  {wmoCode && timeStamps ? (
                    renderWeather(wmoCode[10], new Date(timeStamps[10]))
                  ) : (
                    <WiNA size={30} color="#000" />
                  )}
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      {hourlyTemp[10]}°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        fontWeight: "700",
                      }}
                    >
                      C
                    </span>
                  </div>
                </Card>

                <Card
                  sx={{
                    backgroundColor: "var(--themeColor)",
                    color: "var(--elementBg)",
                    borderRadius: "20px",
                  }}
                  className="hours"
                >
                  <span className="hour_text" style={{ backgroundColor: "" }}>
                    11 am
                  </span>
                  {wmoCode && timeStamps ? (
                    renderWeather(wmoCode[11], new Date(timeStamps[11]))
                  ) : (
                    <WiNA size={30} color="#000" />
                  )}
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      {hourlyTemp[11]}°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        fontWeight: "700",
                      }}
                    >
                      C
                    </span>
                  </div>
                </Card>

                <Card
                  sx={{
                    backgroundColor: "var(--themeColor)",
                    color: "var(--elementBg)",
                    borderRadius: "20px",
                  }}
                  className="hours"
                >
                  <span className="hour_text" style={{ backgroundColor: "" }}>
                    12 pm
                  </span>
                  {wmoCode && timeStamps ? (
                    renderWeather(wmoCode[12], new Date(timeStamps[12]))
                  ) : (
                    <WiNA size={30} color="#000" />
                  )}
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      {hourlyTemp[12]}°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        fontWeight: "700",
                      }}
                    >
                      C
                    </span>
                  </div>
                </Card>

                <Card
                  sx={{
                    backgroundColor: "var(--themeColor)",
                    color: "var(--elementBg)",
                    borderRadius: "20px",
                  }}
                  className="hours"
                >
                  <span className="hour_text" style={{ backgroundColor: "" }}>
                    1 pm
                  </span>
                  {wmoCode && timeStamps ? (
                    renderWeather(wmoCode[13], new Date(timeStamps[13]))
                  ) : (
                    <WiNA size={30} color="#000" />
                  )}
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      {hourlyTemp[13]}°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        fontWeight: "700",
                      }}
                    >
                      C
                    </span>
                  </div>
                </Card>

                <Card
                  sx={{
                    backgroundColor: "var(--themeColor)",
                    color: "var(--elementBg)",
                    borderRadius: "20px",
                  }}
                  className="hours"
                >
                  <span className="hour_text" style={{ backgroundColor: "" }}>
                    2 pm
                  </span>
                  {wmoCode && timeStamps ? (
                    renderWeather(wmoCode[14], new Date(timeStamps[14]))
                  ) : (
                    <WiNA size={30} color="#000" />
                  )}
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      {hourlyTemp[14]}°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        fontWeight: "700",
                      }}
                    >
                      C
                    </span>
                  </div>
                </Card>

                <Card
                  sx={{
                    backgroundColor: "var(--themeColor)",
                    color: "var(--elementBg)",
                    borderRadius: "20px",
                  }}
                  className="hours"
                >
                  <span className="hour_text" style={{ backgroundColor: "" }}>
                    3 pm
                  </span>
                  {wmoCode && timeStamps ? (
                    renderWeather(wmoCode[15], new Date(timeStamps[15]))
                  ) : (
                    <WiNA size={30} color="#000" />
                  )}
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      {hourlyTemp[15]}°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        fontWeight: "700",
                      }}
                    >
                      C
                    </span>
                  </div>
                </Card>

                <Card
                  sx={{
                    backgroundColor: "var(--themeColor)",
                    color: "var(--elementBg)",
                    borderRadius: "20px",
                  }}
                  className="hours"
                >
                  <span className="hour_text" style={{ backgroundColor: "" }}>
                    4 pm
                  </span>
                  {wmoCode && timeStamps ? (
                    renderWeather(wmoCode[16], new Date(timeStamps[16]))
                  ) : (
                    <WiNA size={30} color="#000" />
                  )}
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      {hourlyTemp[16]}°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        fontWeight: "700",
                      }}
                    >
                      C
                    </span>
                  </div>
                </Card>

                <Card
                  sx={{
                    backgroundColor: "var(--themeColor)",
                    color: "var(--elementBg)",
                    borderRadius: "20px",
                  }}
                  className="hours"
                >
                  <span className="hour_text" style={{ backgroundColor: "" }}>
                    5 pm
                  </span>
                  {wmoCode && timeStamps ? (
                    renderWeather(wmoCode[17], new Date(timeStamps[17]))
                  ) : (
                    <WiNA size={30} color="#000" />
                  )}
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      {hourlyTemp[17]}°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        fontWeight: "700",
                      }}
                    >
                      C
                    </span>
                  </div>
                </Card>

                <Card
                  sx={{
                    backgroundColor: "var(--themeColor)",
                    color: "var(--elementBg)",
                    borderRadius: "20px",
                  }}
                  className="hours"
                >
                  <span className="hour_text" style={{ backgroundColor: "" }}>
                    6 pm
                  </span>
                  {wmoCode && timeStamps ? (
                    renderWeather(wmoCode[18], new Date(timeStamps[18]))
                  ) : (
                    <WiNA size={30} color="#000" />
                  )}
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      {hourlyTemp[18]}°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        fontWeight: "700",
                      }}
                    >
                      C
                    </span>
                  </div>
                </Card>

                <Card
                  sx={{
                    backgroundColor: "var(--themeColor)",
                    color: "var(--elementBg)",
                    borderRadius: "20px",
                  }}
                  className="hours"
                >
                  <span className="hour_text" style={{ backgroundColor: "" }}>
                    7 pm
                  </span>
                  {wmoCode && timeStamps ? (
                    renderWeather(wmoCode[19], new Date(timeStamps[19]))
                  ) : (
                    <WiNA size={30} color="#000" />
                  )}
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      {hourlyTemp[19]}°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        fontWeight: "700",
                      }}
                    >
                      C
                    </span>
                  </div>
                </Card>

                <Card
                  sx={{
                    backgroundColor: "var(--themeColor)",
                    color: "var(--elementBg)",
                    borderRadius: "20px",
                  }}
                  className="hours"
                >
                  <span className="hour_text" style={{ backgroundColor: "" }}>
                    8 pm
                  </span>
                  {wmoCode && timeStamps ? (
                    renderWeather(wmoCode[20], new Date(timeStamps[20]))
                  ) : (
                    <WiNA size={30} color="#000" />
                  )}
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      {hourlyTemp[20]}°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        fontWeight: "700",
                      }}
                    >
                      C
                    </span>
                  </div>
                </Card>

                <Card
                  sx={{
                    backgroundColor: "var(--themeColor)",
                    color: "var(--elementBg)",
                    borderRadius: "20px",
                  }}
                  className="hours"
                >
                  <span className="hour_text" style={{ backgroundColor: "" }}>
                    9 pm
                  </span>
                  {wmoCode && timeStamps ? (
                    renderWeather(wmoCode[21], new Date(timeStamps[21]))
                  ) : (
                    <WiNA size={30} color="#000" />
                  )}
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      {hourlyTemp[21]}°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        fontWeight: "700",
                      }}
                    >
                      C
                    </span>
                  </div>
                </Card>

                <Card
                  sx={{
                    backgroundColor: "var(--themeColor)",
                    color: "var(--elementBg)",
                    borderRadius: "20px",
                  }}
                  className="hours"
                >
                  <span className="hour_text" style={{ backgroundColor: "" }}>
                    10 pm
                  </span>
                  {wmoCode && timeStamps ? (
                    renderWeather(wmoCode[22], new Date(timeStamps[22]))
                  ) : (
                    <WiNA size={30} color="#000" />
                  )}
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      {hourlyTemp[22]}°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        fontWeight: "700",
                      }}
                    >
                      C
                    </span>
                  </div>
                </Card>

                <Card
                  sx={{
                    backgroundColor: "var(--themeColor)",
                    color: "var(--elementBg)",
                    borderRadius: "20px",
                  }}
                  className="hours"
                >
                  <span className="hour_text" style={{ backgroundColor: "" }}>
                    11 pm
                  </span>
                  {wmoCode && timeStamps ? (
                    renderWeather(wmoCode[23], new Date(timeStamps[23]))
                  ) : (
                    <WiNA size={30} color="#000" />
                  )}
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      {hourlyTemp[23]}°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        fontWeight: "700",
                      }}
                    >
                      C
                    </span>
                  </div>
                </Card>
              </div>
            </div>
          </div>
          <div className="worldmapDiv">{/* <Worldmap /> */}</div>
        </div>

        <div className="mainRow">
          <div id="overviewDiv">
            <div className="overview-innerDiv" id="overviewDivtitle">
              <div id="overviewtitle">
                <span id="titlespan">Overview</span>
              </div>

              <div id="overviewtype">
                <div className="overview-toggle-switch">
                  <button
                    id="humiditybtn"
                    ref={humidityRef}
                    className="overview-switch-button"
                    onClick={changetohumidity}
                  >
                    Humidity
                  </button>
                  <button
                    id="uvIndexbtn"
                    ref={uvindexRef}
                    className="overview-switch-button"
                    onClick={changetouvIndex}
                  >
                    UV index
                  </button>
                  <button
                    id="rainfallbtn"
                    ref={rainfallRef}
                    className="overview-switch-button"
                    onClick={changetorainfall}
                  >
                    Rainfall
                  </button>
                  <button
                    id="pressurebtn"
                    ref={pressureRef}
                    className="overview-switch-button"
                    onClick={changetopressure}
                  >
                    Pressure
                  </button>
                </div>
              </div>
            </div>
            <div id="overview_chartDiv">
              <Graph activebtn={activeOverview} />
            </div>
          </div>

          <div id="forecastDiv">
            <div className="forecast-innerDiv" id="forecastDivtitle">
              <div id="forecasttitle">
                <span id="titlespan">Forecast</span>
              </div>

              <div id="forecastday">
                <div className="forecast-toggle-switch">
                  <button
                    id="day3btn"
                    ref={day3Ref}
                    className="forecast-switch-button"
                    onClick={changetoDay3}
                  >
                    3 days
                  </button>
                  <button
                    id="day10btn"
                    ref={day10Ref}
                    className="forecast-switch-button"
                    onClick={changetoDay10}
                  >
                    10 days
                  </button>
                </div>
              </div>
            </div>

            <div className="forecast-innerDiv" id="forecasts" ref={forecastDiv}>
              <div className="forecastdaysitem" id="forcastdayitem1">
                <div className="forecastitemtextDiv">
                  <span className="material-symbols-outlined">cloud</span>
                  <div style={{ display: "flex" }}>
                    <div>
                      <span className="humidityValue temp_degree forecasttextSpan">
                        1°{" "}
                      </span>
                      <span
                        className="unit-display"
                        style={{
                          fontSize: "15px",
                          padding: "2px",
                          marginLeft: "-10px",
                          fontWeight: "500",
                          color: "var(--themeColor)",
                        }}
                      >
                        C
                      </span>
                    </div>
                    <div style={{ alignContent: "end" }}>
                      <span
                        className="humidityValue forecasttextSpan"
                        style={{ fontSize: "15px" }}
                      >
                        /
                      </span>
                      <span className="humidityValue temp_degree forecasttextSpan">
                        14°
                      </span>
                      <span
                        className="unit-display"
                        style={{
                          fontSize: "10px",
                          // marginLeft: "2px",
                          fontWeight: "500",
                          color: "var(--themeColor)",
                        }}
                      >
                        C
                      </span>
                    </div>
                  </div>
                </div>
                <div className="forecastitemdateDiv">
                <div>
                    <img style={{width:'20px',height:'20px'}} src={PrecipitationIcon} alt="PrecipitationIcon" />
                    <span className="forcastdatespan">16%</span>
                  </div>
                  <div>
                    <span className="forcastdatespan">16</span>
                    <span className="forcastdatespan">May,Tue</span>
                  </div>
                </div>
              </div>

              <div className="forecastdaysitem" id="forcastdayitem2">
                <div className="forecastitemtextDiv">
                  <span className="material-symbols-outlined">sunny</span>
                  <div style={{ display: "flex" }}>
                    <div>
                      <span className="humidityValue temp_degree forecasttextSpan">
                        2°{" "}
                      </span>
                      <span
                        className="unit-display"
                        style={{
                          fontSize: "15px",
                          padding: "2px",
                          marginLeft: "-10px",
                          fontWeight: "500",
                          color: "var(--themeColor) ",
                        }}
                      >
                        C
                      </span>
                    </div>
                    <div style={{ alignContent: "end" }}>
                      <span className="humidityValue forecasttextSpan">/</span>
                      <span className="humidityValue temp_degree forecasttextSpan">
                        14°
                      </span>
                      <span
                        className="unit-display"
                        style={{
                          fontSize: "10px",
                          marginLeft: "",
                          fontWeight: "500",
                          color: "var(--themeColor",
                        }}
                      >
                        C
                      </span>
                    </div>
                  </div>
                </div>
                <div className="forecastitemdateDiv">
                  <div>
                    <span className="forcastdatespan">17</span>
                    <span className="forcastdatespan">May,Wed</span>
                  </div>
                </div>
              </div>

              <div className="forecastdaysitem" id="forcastdayitem3">
                <div className="forecastitemtextDiv">
                  <span className="material-symbols-outlined">
                    thunderstorm
                  </span>
                  <div style={{ display: "flex" }}>
                    <div>
                      <span className="humidityValue temp_degree forecasttextSpan">
                        3°{" "}
                      </span>
                      <span
                        className="unit-display"
                        style={{
                          fontSize: "15px",
                          padding: "2px",
                          marginLeft: "-10px",
                          fontWeight: "500",
                          color: "var(--themeColor",
                        }}
                      >
                        C
                      </span>
                    </div>
                    <div style={{ alignContent: "end" }}>
                      <span className="humidityValue forecasttextSpan">/</span>
                      <span className="humidityValue temp_degree forecasttextSpan">
                        14°
                      </span>
                      <span
                        className="unit-display"
                        style={{
                          fontSize: "10px",
                          marginLeft: "",
                          fontWeight: "500",
                          color: "var(--themeColor",
                        }}
                      >
                        C
                      </span>
                    </div>
                  </div>
                </div>
                <div className="forecastitemdateDiv">
                  <div>
                    <span className="forcastdatespan">18</span>
                    <span className="forcastdatespan">May,Thu</span>
                  </div>
                </div>
              </div>

              <div id="display10dayDiv" ref={day10DivRef}>
                <div className="forecastdaysitem" id="forcastdayitem4">
                  {" "}
                  <div className="forecastitemtextDiv">
                    <span className="material-symbols-outlined">
                      partly_cloudy_night
                    </span>
                    <div style={{ display: "flex" }}>
                      <div>
                        <span className="humidityValue temp_degree forecasttextSpan">
                          24°{" "}
                        </span>
                        <span
                          className="unit-display"
                          style={{
                            fontSize: "15px",
                            padding: "2px",
                            marginLeft: "-10px",
                            fontWeight: "500",
                            color: "var(--themeColor",
                          }}
                        >
                          C
                        </span>
                      </div>
                      <div style={{ alignContent: "end" }}>
                        <span className="humidityValue forecasttextSpan">
                          /
                        </span>
                        <span className="humidityValue temp_degree forecasttextSpan">
                          14°
                        </span>
                        <span
                          className="unit-display"
                          style={{
                            fontSize: "10px",
                            marginLeft: "",
                            fontWeight: "500",
                            color: "var(--themeColor",
                          }}
                        >
                          C
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="forecastitemdateDiv">
                    <div>
                      <span className="forcastdatespan">19</span>
                      <span className="forcastdatespan">May,Fri</span>
                    </div>
                  </div>
                </div>

                <div className="forecastdaysitem" id="forcastdayitem5">
                  <div className="forecastitemtextDiv">
                    <span className="material-symbols-outlined">foggy</span>
                    <div style={{ display: "flex" }}>
                      <div>
                        <span className="humidityValue temp_degree forecasttextSpan">
                          24°{" "}
                        </span>
                        <span
                          className="unit-display"
                          style={{
                            fontSize: "15px",
                            padding: "2px",
                            marginLeft: "-10px",
                            fontWeight: "500",
                            color: "var(--themeColor",
                          }}
                        >
                          C
                        </span>
                      </div>
                      <div style={{ alignContent: "end" }}>
                        <span className="humidityValue forecasttextSpan">
                          /
                        </span>
                        <span className="humidityValue temp_degree forecasttextSpan">
                          14°
                        </span>
                        <span
                          className="unit-display"
                          style={{
                            fontSize: "10px",
                            marginLeft: "",
                            fontWeight: "500",
                            color: "var(--themeColor",
                          }}
                        >
                          C
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="forecastitemdateDiv">
                    <div>
                      <span className="forcastdatespan">20</span>
                      <span className="forcastdatespan">May,Sat</span>
                    </div>
                  </div>
                </div>

                <div className="forecastdaysitem" id="forcastdayitem6">
                  <div className="forecastitemtextDiv">
                    <span className="material-symbols-outlined">foggy</span>
                    <div style={{ display: "flex" }}>
                      <div>
                        <span className="humidityValue temp_degree forecasttextSpan">
                          24°{" "}
                        </span>
                        <span
                          className="unit-display"
                          style={{
                            fontSize: "15px",
                            padding: "2px",
                            marginLeft: "-10px",
                            fontWeight: "500",
                            color: "var(--themeColor",
                          }}
                        >
                          C
                        </span>
                      </div>
                      <div style={{ alignContent: "end" }}>
                        <span className="humidityValue forecasttextSpan">
                          /
                        </span>
                        <span className="humidityValue temp_degree forecasttextSpan">
                          14°
                        </span>
                        <span
                          className="unit-display"
                          style={{
                            fontSize: "10px",
                            marginLeft: "",
                            fontWeight: "500",
                            color: "var(--themeColor",
                          }}
                        >
                          C
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="forecastitemdateDiv">
                    <div>
                      <span className="forcastdatespan">21</span>
                      <span className="forcastdatespan">May,Sun</span>
                    </div>
                  </div>
                </div>

                <div className="forecastdaysitem" id="forcastdayitem7">
                  <div className="forecastitemtextDiv">
                    <span className="material-symbols-outlined">sunny</span>
                    <div style={{ display: "flex" }}>
                      <div>
                        <span className="humidityValue temp_degree forecasttextSpan">
                          24°{" "}
                        </span>
                        <span
                          className="unit-display"
                          style={{
                            fontSize: "15px",
                            padding: "2px",
                            marginLeft: "-10px",
                            fontWeight: "500",
                            color: "var(--themeColor",
                          }}
                        >
                          C
                        </span>
                      </div>
                      <div style={{ alignContent: "end" }}>
                        <span className="humidityValue forecasttextSpan">
                          /
                        </span>
                        <span className="humidityValue temp_degree forecasttextSpan">
                          14°
                        </span>
                        <span
                          className="unit-display"
                          style={{
                            fontSize: "10px",
                            marginLeft: "",
                            fontWeight: "500",
                            color: "var(--themeColor",
                          }}
                        >
                          C
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="forecastitemdateDiv">
                    <div>
                      <span className="forcastdatespan">22</span>
                      <span className="forcastdatespan">May,Mon</span>
                    </div>
                  </div>
                </div>

                <div className="forecastdaysitem" id="forcastdayitem8">
                  <div className="forecastitemtextDiv">
                    <span className="material-symbols-outlined">foggy</span>
                    <div style={{ display: "flex" }}>
                      <div>
                        <span className="humidityValue temp_degree forecasttextSpan">
                          24°{" "}
                        </span>
                        <span
                          className="unit-display"
                          style={{
                            fontSize: "15px",
                            padding: "2px",
                            marginLeft: "-10px",
                            fontWeight: "500",
                            color: "var(--themeColor",
                          }}
                        >
                          C
                        </span>
                      </div>
                      <div style={{ alignContent: "end" }}>
                        <span className="humidityValue forecasttextSpan">
                          /
                        </span>
                        <span className="humidityValue temp_degree forecasttextSpan">
                          14°
                        </span>
                        <span
                          className="unit-display"
                          style={{
                            fontSize: "10px",
                            marginLeft: "",
                            fontWeight: "500",
                            color: "var(--themeColor",
                          }}
                        >
                          C
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="forecastitemdateDiv">
                    <div>
                      <span className="forcastdatespan">24</span>
                      <span className="forcastdatespan">May,Tue</span>
                    </div>
                  </div>
                </div>

                <div className="forecastdaysitem" id="forcastdayitem9">
                  <div className="forecastitemtextDiv">
                    <span className="material-symbols-outlined">foggy</span>
                    <div style={{ display: "flex" }}>
                      <div>
                        <span className="humidityValue temp_degree forecasttextSpan">
                          24°{" "}
                        </span>
                        <span
                          className="unit-display"
                          style={{
                            fontSize: "15px",
                            padding: "2px",
                            marginLeft: "-10px",
                            fontWeight: "500",
                            color: "var(--themeColor",
                          }}
                        >
                          C
                        </span>
                      </div>
                      <div style={{ alignContent: "end" }}>
                        <span className="humidityValue forecasttextSpan">
                          /
                        </span>
                        <span className="humidityValue temp_degree forecasttextSpan">
                          14°
                        </span>
                        <span
                          className="unit-display"
                          style={{
                            fontSize: "10px",
                            marginLeft: "",
                            fontWeight: "500",
                            color: "var(--themeColor",
                          }}
                        >
                          C
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="forecastitemdateDiv">
                    <div>
                      <span className="forcastdatespan">24</span>
                      <span className="forcastdatespan">May,Wed</span>
                    </div>
                  </div>
                </div>

                <div className="forecastdaysitem" id="forcastdayitem10">
                  <div className="forecastitemtextDiv">
                    <span className="material-symbols-outlined">
                      thunderstorm
                    </span>
                    <div style={{ display: "flex" }}>
                      <div>
                        <span className="humidityValue temp_degree forecasttextSpan">
                          24°{" "}
                        </span>
                        <span
                          className="unit-display"
                          style={{
                            fontSize: "15px",
                            padding: "2px",
                            marginLeft: "-10px",
                            fontWeight: "500",
                            color: "var(--themeColor",
                          }}
                        >
                          C
                        </span>
                      </div>
                      <div style={{ alignContent: "end" }}>
                        <span className="humidityValue forecasttextSpan">
                          /
                        </span>
                        <span className="humidityValue temp_degree forecasttextSpan">
                          14°
                        </span>
                        <span
                          className="unit-display"
                          style={{
                            fontSize: "10px",
                            marginLeft: "",
                            fontWeight: "500",
                            color: "var(--themeColor",
                          }}
                        >
                          C
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="forecastitemdateDiv">
                    <div>
                      <span className="forcastdatespan">25</span>
                      <span className="forcastdatespan">May,Thu</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
