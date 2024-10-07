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
import PrecipitationIcon from "../images/Weather Icons/PrecipitationIcon.png";
import sunny from "../images/New folder/sunny.png";
import clear from "../images/New folder/clear.png";
import mostlysunny from "../images/New folder/mostlysunny.png";
import mostlyclear from "../images/New folder/mostlyclear.png";
import daypartlycloudy from "../images/New folder/daypartlycloudy.png";
import nightpartlycloudy from "../images/New folder/nightpartlycloudy.png";
import dayfog from "../images/New folder/dayfog.png";
import nightfog from "../images/New folder/nightfog.png";
import dayrain from "../images/New folder/dayrain.png";
import nightrain from "../images/New folder/nightraining.png";
import daysnow from "../images/New folder/daysnow.png";
import nightsnow from "../images/New folder/nightsnowing.png";
import dayshower from "../images/New folder/dayshower.png";
import nightshower from "../images/New folder/nightshower.png";
import daythunderstorm from "../images/New folder/daythunderstorm.png";
import nightthunderstorm from "../images/New folder/nightthunderstorm.png";
import daydrizzle from "../images/New folder/daydrizzle.png";
import nightdrizzle from "../images/New folder/nightdrizzle.png";
import daycloudy from "../images/New folder/daycloudy.png";
import nightcloud from "../images/New folder/nightcloud.png";
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
  const [dailyTempMax, setdailyTempMax] = useState([]);
  const [dailyTempMin, setdailyTempMin] = useState([]);
  const [dailyPrec, setdailyPrec] = useState([]);
  const [currentCode, setcurrentCode] = useState("");
  const [isDay, setisDay] = useState("");
  const wmoCodeMap = {
    0: {
      forecast: {
        description: "Sunny",
        image: <WiDaySunny size={35} color="white" />,
      },
      day: {
        description: "Sunny",
        image: <WiDaySunny size={30} color="#000" />,

        logo: sunny,
      },
      night: {
        description: "Clear",
        image: <WiNightClear size={30} color="#000" />,

        logo: clear,
      },
    },
    1: {
      forecast: {
        description: "Mainly Sunny",
        image: <WiDaySunnyOvercast size={35} color="white" />,
      },
      day: {
        description: "Mainly Sunny",
        image: <WiDaySunnyOvercast size={30} color="#000" />,
        logo: mostlysunny,
      },
      night: {
        description: "Mainly Clear",
        image: <WiNightAltPartlyCloudy size={30} color="#000" />,
        logo: mostlyclear,
      },
    },
    2: {
      forecast: {
        description: "Partly Cloudy",
        image: <WiDayCloudy size={35} color="white" />,
      },
      day: {
        description: "Partly Cloudy",
        image: <WiDayCloudy size={30} color="#000" />,
        logo: daypartlycloudy,
      },
      night: {
        description: "Partly Cloudy",
        image: <WiNightAltCloudy size={30} color="#000" />,
        logo: nightpartlycloudy,
      },
    },
    3: {
      forecast: {
        description: "Cloudy",
        image: <WiCloudy size={35} color="white" />,
      },
      day: {
        description: "Cloudy",
        image: <WiCloudy size={30} color="#000" />,
        logo: daycloudy,
      },
      night: {
        description: "Cloudy",
        image: <WiCloudy size={30} color="#000" />,
        logo: nightcloud,
      },
    },
    45: {
      forecast: {
        description: "Foggy",
        image: <WiDayFog size={35} color="white" />,
      },
      day: {
        description: "Foggy",
        image: <WiDayFog size={30} color="#000" />,
        logo: dayfog,
      },
      night: {
        description: "Foggy",
        image: <WiNightFog size={30} color="#000" />,
        logo: nightfog,
      },
    },
    48: {
      forecast: {
        description: "Rime Fog",
        image: <WiNightFog size={35} color="white" />,
      },
      day: {
        description: "Rime Fog",
        image: <WiNightFog size={30} color="#000" />,
        logo: dayfog,
      },
      night: {
        description: "Rime Fog",
        image: <WiNightFog size={30} color="#000" />,
        logo: nightfog,
      },
    },
    51: {
      forecast: {
        description: "Light Drizzle",
        image: <WiDayShowers size={35} color="white" />,
      },
      day: {
        description: "Light Drizzle",
        image: <WiDayShowers size={30} color="#000" />,
        logo: daydrizzle,
      },
      night: {
        description: "Light Drizzle",
        image: <WiNightAltShowers size={30} color="#000" />,
        logo: nightdrizzle,
      },
    },
    53: {
      forecast: {
        description: "Drizzle",
        image: <WiDayShowers size={35} color="white" />,
      },
      day: {
        description: "Drizzle",
        image: <WiDayShowers size={30} color="#000" />,
        logo: daydrizzle,
      },
      night: {
        description: "Drizzle",
        image: <WiNightAltShowers size={30} color="#000" />,
        logo: nightdrizzle,
      },
    },
    55: {
      forecast: {
        description: "Heavy Drizzle",
        image: <WiDayShowers size={35} color="white" />,
      },
      day: {
        description: "Heavy Drizzle",
        image: <WiDayShowers size={30} color="#000" />,
        logo: daydrizzle,
      },
      night: {
        description: "Heavy Drizzle",
        image: <WiNightAltShowers size={30} color="#000" />,
        logo: nightdrizzle,
      },
    },
    56: {
      forecast: {
        description: "Light Freezing Drizzle",
        image: <WiDaySleet size={35} color="white" />,
      },
      day: {
        description: "Light Freezing Drizzle",
        image: <WiDaySleet size={30} color="#000" />,
        logo: daydrizzle,
      },
      night: {
        description: "Light Freezing Drizzle",
        image: <WiNightAltSleet size={30} color="#000" />,
        logo: nightdrizzle,
      },
    },
    57: {
      forecast: {
        description: "Freezing Drizzle",
        image: <WiDaySleet size={35} color="white" />,
      },
      day: {
        description: "Freezing Drizzle",
        image: <WiDaySleet size={30} color="#000" />,
        logo: daydrizzle,
      },
      night: {
        description: "Freezing Drizzle",
        image: <WiNightAltSleet size={30} color="#000" />,
        logo: nightdrizzle,
      },
    },
    61: {
      forecast: {
        description: "Light Rain",
        image: <WiDayRain size={35} color="white" />,
      },
      day: {
        description: "Light Rain",
        image: <WiDayRain size={30} color="#000" />,
        logo: dayrain,
      },
      night: {
        description: "Light Rain",
        image: <WiNightAltRain size={30} color="#000" />,
        logo: nightrain,
      },
    },
    63: {
      forecast: {
        description: "Rain",
        image: <WiRain size={35} color="white" />,
      },
      day: {
        description: "Rain",
        image: <WiRain size={30} color="#000" />,
        logo: dayrain,
      },
      night: {
        description: "Rain",
        image: <WiRain size={30} color="#000" />,
        logo: nightrain,
      },
    },
    65: {
      forecast: {
        description: "Heavy Rain",
        image: <WiRain size={35} color="white" />,
      },
      day: {
        description: "Heavy Rain",
        image: <WiRain size={30} color="#000" />,
        logo: dayrain,
      },
      night: {
        description: "Heavy Rain",
        image: <WiRain size={30} color="#000" />,
        logo: nightrain,
      },
    },
    66: {
      forecast: {
        description: "Light Freezing Rain",
        image: <WiRainMix size={35} color="white" />,
      },
      day: {
        description: "Light Freezing Rain",
        image: <WiRainMix size={30} color="#000" />,
        logo: dayrain,
      },
      night: {
        description: "Light Freezing Rain",
        image: <WiRainMix size={30} color="#000" />,
        logo: nightrain,
      },
    },
    67: {
      forecast: {
        description: "Freezing Rain",
        image: <WiRainMix size={35} color="white" />,
      },
      day: {
        description: "Freezing Rain",
        image: <WiRainMix size={30} color="#000" />,
        logo: dayrain,
      },
      night: {
        description: "Freezing Rain",
        image: <WiRainMix size={30} color="#000" />,
        logo: nightrain,
      },
    },
    71: {
      forecast: {
        description: "Light Snow",
        image: <WiDaySnow size={35} color="white" />,
      },
      day: {
        description: "Light Snow",
        image: <WiDaySnow size={30} color="#000" />,
        logo: daysnow,
      },
      night: {
        description: "Light Snow",
        image: <WiNightSnow size={30} color="#000" />,
        logo: nightsnow,
      },
    },
    73: {
      forecast: {
        description: "Snow",
        image: <WiSnow size={35} color="white" />,
      },
      day: {
        description: "Snow",
        image: <WiSnow size={30} color="#000" />,
        logo: daysnow,
      },
      night: {
        description: "Snow",
        image: <WiSnow size={30} color="#000" />,
        logo: nightsnow,
      },
    },
    75: {
      forecast: {
        description: "Heavy Snow",
        image: <WiSnow size={35} color="white" />,
      },
      day: {
        description: "Heavy Snow",
        image: <WiSnow size={30} color="#000" />,
        logo: daysnow,
      },
      night: {
        description: "Heavy Snow",
        image: <WiSnow size={30} color="#000" />,
        logo: nightsnow,
      },
    },
    77: {
      forecast: {
        description: "Snow Grains",
        image: <WiSnow size={35} color="white" />,
      },
      day: {
        description: "Snow Grains",
        image: <WiSnow size={30} color="#000" />,
        logo: daysnow,
      },
      night: {
        description: "Snow Grains",
        image: <WiSnow size={30} color="#000" />,
        logo: nightsnow,
      },
    },
    80: {
      forecast: {
        description: "Light Showers",
        image: <WiDayShowers size={35} color="white" />,
      },
      day: {
        description: "Light Showers",
        image: <WiDayShowers size={30} color="#000" />,
        logo: dayshower,
      },
      night: {
        description: "Light Showers",
        image: <WiNightAltShowers size={30} color="#000" />,
        logo: nightshower,
      },
    },
    81: {
      forecast: {
        description: "Showers",
        image: <WiDayShowers size={35} color="white" />,
      },
      day: {
        description: "Showers",
        image: <WiDayShowers size={30} color="#000" />,
        logo: dayshower,
      },
      night: {
        description: "Showers",
        image: <WiNightAltShowers size={30} color="#000" />,
        logo: nightshower,
      },
    },
    82: {
      forecast: {
        description: "Heavy Showers",
        image: <WiDayShowers size={35} color="white" />,
      },
      day: {
        description: "Heavy Showers",
        image: <WiDayShowers size={30} color="#000" />,
        logo: dayshower,
      },
      night: {
        description: "Heavy Showers",
        image: <WiNightAltShowers size={30} color="#000" />,
        logo: nightshower,
      },
    },
    85: {
      forecast: {
        description: "Light Snow Showers",
        image: <WiDayHail size={35} color="white" />,
      },
      day: {
        description: "Light Snow Showers",
        image: <WiDayHail size={30} color="#000" />,
        logo: dayshower,
      },
      night: {
        description: "Light Snow Showers",
        image: <WiNightAltHail size={30} color="#000" />,
        logo: nightshower,
      },
    },
    86: {
      forecast: {
        description: "Snow Showers",
        image: <WiDayRainMix size={35} color="white" />,
      },
      day: {
        description: "Snow Showers",
        image: <WiDayRainMix size={30} color="#000" />,
        logo: dayshower,
      },
      night: {
        description: "Snow Showers",
        image: <WiNightAltRainMix size={30} color="#000" />,
        logo: nightshower,
      },
    },
    95: {
      forecast: {
        description: "Thunderstorm",
        image: <WiThunderstorm size={35} color="white" />,
      },
      day: {
        description: "Thunderstorm",
        image: <WiThunderstorm size={30} color="#000" />,
        logo: daythunderstorm,
      },
      night: {
        description: "Thunderstorm",
        image: <WiThunderstorm size={30} color="#000" />,
        logo: nightthunderstorm,
      },
    },
    96: {
      forecast: {
        description: "Light Thunderstorms With Hail",
        image: <WiDaySleetStorm size={35} color="white" />,
      },
      day: {
        description: "Light Thunderstorms With Hail",
        image: <WiDaySleetStorm size={30} color="#000" />,
        logo: daythunderstorm,
      },
      night: {
        description: "Light Thunderstorms With Hail",
        image: <WiNightSleetStorm size={30} color="#000" />,
        logo: nightthunderstorm,
      },
    },
    99: {
      forecast: {
        description: "Thunderstorm With Hail",
        image: <WiDaySleetStorm size={35} color="white" />,
      },
      day: {
        description: "Thunderstorm With Hail",
        image: <WiDaySleetStorm size={30} color="#000" />,
        logo: daythunderstorm,
      },
      night: {
        description: "Thunderstorm With Hail",
        image: <WiNightSleetStorm size={30} color="#000" />,
        logo: nightthunderstorm,
      },
    },
    // Add more WMO codes as needed
  };

  useEffect(() => {
    countries.registerLocale(enLocale);

    const getCityInfo = async (lat, lon) => {
      //Fetching current City Weather
      // setLoading(true);
      console.log(lat, lon);
      // karachi coods: lat = 24.8607 long = 67.0011
      const city_url = `https://api-bdc.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`;
      const weather_url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,is_day,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code&timezone=auto&forecast_days=1`;

      const cityName = await fetch(city_url);
      const cityWeather = await fetch(weather_url);

      if (!cityName.ok || !cityWeather.ok) {
        throw new Error(`HTTP error!`);
      }
      const citydata = await cityName.json();
      const weatherData = await cityWeather.json();

      if (
        (citydata.city &&
          citydata.countryCode &&
          weatherData.current.temperature_2m &&
          weatherData.current.relative_humidity_2m &&
          weatherData.current.wind_speed_10m &&
          weatherData.current.is_day &&
          weatherData.current.weather_code &&
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
        setcurrentCode(weatherData.current.weather_code);
        setisDay(weatherData.current.is_day);
      }
    };

    const getForecastInfo = async (lat, lon) => {
      //Fetching forecast Weather
      // setLoading(true);
      // karachi coods: lat = 24.8607 long = 67.0011
      const forecast_url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto&forecast_days=14`;

      const forecast = await fetch(forecast_url);
      if (!forecast.ok) {
        throw new Error(`HTTP error!`);
      }
      const forecastData = await forecast.json();
      if (
        forecastData.daily.time &&
        forecastData.daily.weather_code &&
        forecastData.daily.temperature_2m_max &&
        forecastData.daily.temperature_2m_min &&
        forecastData.daily.precipitation_probability_max
      ) {
        const maxForecastTemp = forecastData.daily.temperature_2m_max.map(
          (temp) => parseFloat(temp).toFixed(0)
        );
        const minForecastTemp = forecastData.daily.temperature_2m_min.map(
          (temp) => parseFloat(temp).toFixed(0)
        );

        setdailyDate(forecastData.daily.time);
        setforecastWmoCode(forecastData.daily.weather_code);
        setdailyTempMax(maxForecastTemp);
        setdailyTempMin(minForecastTemp);
        setdailyPrec(forecastData.daily.precipitation_probability_max);
      }
    };

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
      getForecastInfo(latitude, longitude);
    };
    const handleError = () => {
      // setLoading(false);
    };

    getLocation();
  }, []);

  console.log(isDay);
  console.log(currentCode);

  const formatDates = (datefetched) => {
    if (datefetched) {
      const date = new Date(datefetched);
      const fullDate = date
        .toLocaleDateString("en-GB", {
          day: "numeric",
        })
        .replace(",", ".");

      const monthDay = date
        .toLocaleDateString("en-GB", {
          month: "short",
          weekday: "short",
        })
        .replace(" ", ",");

      return (
        <>
          <span className="forcastdatespan">{fullDate}</span>
          <span className="forcastdatespan">{monthDay}</span>
        </>
      );
    } else {
      console.log("not found");
    }
  };

  const isDayTime = (localtime) => {
    const hours = localtime.getHours();
    return hours >= 6 && hours < 18;
  };

  const renderWeather = (code, localTime) => {
    const dayOrNight = isDayTime(localTime) ? "day" : "night";
    const weatherData = wmoCodeMap[code];

    if (weatherData) {
      return <div>{weatherData[dayOrNight].image}</div>;
    } else {
      return <WiNA size={30} color="#000" />;
    }
  };

  const renderForecastWeather = (code) => {
    const foreweatherData = wmoCodeMap[code];
    if (foreweatherData) {
      return <div>{foreweatherData["forecast"].image}</div>;
    } else {
      return <WiNA size={30} color="#000" />;
    }
  };

  const renderWeatherIcon = (weatherCode, isDay) => {
    console.log("function currentCode", weatherCode);
    console.log("function isDay", isDay);
    const weatherData = wmoCodeMap[weatherCode];

    if (!weatherData) {
      console.error("Invalid weather code:", weatherCode);
      return null; // Handle invalid weather code
    }
    const timeOfDay = isDay === 1 ? "day" : "night";
    const logo = weatherData[timeOfDay].logo;

    return (
      <img
        src={logo}
        alt={weatherData[timeOfDay].description}
        style={{ width: "70px", height: "70px" }}
      />
    );
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

      day3Ref.current.style.backgroundColor = "var(--themeColor";
      day3Ref.current.style.color = "black";
      day3Ref.current.style.fontWeight = "600";

      forecastDiv.current.style.overflow = "hidden";
    }
  };

  const changetoDay10 = () => {
    if (day3Ref.current && day10Ref.current && forecastDiv.current) {
      day3Ref.current.style.backgroundColor = "transparent";
      day3Ref.current.style.color = "white";

      day10Ref.current.style.backgroundColor = "var(--themeColor";
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
      uvindexRef.current.style.backgroundColor = "var(--themeColor";
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
      humidityRef.current.style.backgroundColor = "var(--themeColor";
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
      rainfallRef.current.style.backgroundColor = "var(--themeColor";
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
      pressureRef.current.style.backgroundColor = "var(--themeColor";
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
              <div id="weatherlogo">
                {currentCode !== undefined && isDay !== undefined ? (
                  renderWeatherIcon(currentCode, isDay)
                ) : (
                  <WiNA size={30} color="#000" />
                )}
              </div>

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
                    <WiNA size={35} color="white" />
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
                  {forecastWmoCode ? (
                    renderForecastWeather(forecastWmoCode[1])
                  ) : (
                    <WiNA size={35} color="white" />
                  )}
                  <div style={{ display: "flex" }}>
                    <div>
                      <span className="humidityValue temp_degree forecasttextSpan">
                        {dailyTempMax[1]}°{" "}
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
                        {dailyTempMin[1]}°
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
                    <img
                      style={{ width: "20px", height: "20px" }}
                      src={PrecipitationIcon}
                      alt="PrecipitationIcon"
                    />
                    <span className="forcastdatespan">{dailyPrec[1]}%</span>
                  </div>
                  <div>
                    {dailyDate ? (
                      formatDates(dailyDate[1])
                    ) : (
                      <WiNA size={30} color="#000" />
                    )}
                  </div>
                </div>
              </div>

              <div className="forecastdaysitem" id="forcastdayitem2">
                <div className="forecastitemtextDiv">
                  {forecastWmoCode ? (
                    renderForecastWeather(forecastWmoCode[2])
                  ) : (
                    <WiNA size={35} color="white" />
                  )}
                  <div style={{ display: "flex" }}>
                    <div>
                      <span className="humidityValue temp_degree forecasttextSpan">
                        {dailyTempMax[2]}{" "}
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
                        {dailyTempMin[2]}°
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
                    <img
                      style={{ width: "20px", height: "20px" }}
                      src={PrecipitationIcon}
                      alt="PrecipitationIcon"
                    />
                    <span className="forcastdatespan">{dailyPrec[2]}%</span>
                  </div>
                  <div>
                    {dailyDate ? (
                      formatDates(dailyDate[2])
                    ) : (
                      <WiNA size={30} color="#000" />
                    )}
                  </div>
                </div>
              </div>

              <div className="forecastdaysitem" id="forcastdayitem3">
                <div className="forecastitemtextDiv">
                  {forecastWmoCode ? (
                    renderForecastWeather(forecastWmoCode[3])
                  ) : (
                    <WiNA size={35} color="white" />
                  )}
                  <div style={{ display: "flex" }}>
                    <div>
                      <span className="humidityValue temp_degree forecasttextSpan">
                        {dailyTempMax[3]}°{" "}
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
                        {dailyTempMin[2]}°
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
                    <img
                      style={{ width: "20px", height: "20px" }}
                      src={PrecipitationIcon}
                      alt="PrecipitationIcon"
                    />
                    <span className="forcastdatespan">{dailyPrec[3]}%</span>
                  </div>
                  <div>
                    {dailyDate ? (
                      formatDates(dailyDate[3])
                    ) : (
                      <WiNA size={30} color="#000" />
                    )}
                  </div>
                </div>
              </div>

              <div id="display10dayDiv" ref={day10DivRef}>
                <div className="forecastdaysitem" id="forcastdayitem4">
                  {" "}
                  <div className="forecastitemtextDiv">
                    {forecastWmoCode ? (
                      renderForecastWeather(forecastWmoCode[4])
                    ) : (
                      <WiNA size={35} color="white" />
                    )}
                    <div style={{ display: "flex" }}>
                      <div>
                        <span className="humidityValue temp_degree forecasttextSpan">
                          {dailyTempMax[4]}°{" "}
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
                          {dailyTempMax[4]}°
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
                      <img
                        style={{ width: "20px", height: "20px" }}
                        src={PrecipitationIcon}
                        alt="PrecipitationIcon"
                      />
                      <span className="forcastdatespan">{dailyPrec[4]}%</span>
                    </div>
                    <div>
                      {dailyDate ? (
                        formatDates(dailyDate[4])
                      ) : (
                        <WiNA size={30} color="#000" />
                      )}
                    </div>
                  </div>
                </div>

                <div className="forecastdaysitem" id="forcastdayitem5">
                  <div className="forecastitemtextDiv">
                    {forecastWmoCode ? (
                      renderForecastWeather(forecastWmoCode[5])
                    ) : (
                      <WiNA size={35} color="white" />
                    )}
                    <div style={{ display: "flex" }}>
                      <div>
                        <span className="humidityValue temp_degree forecasttextSpan">
                          {dailyTempMax[5]}°{" "}
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
                          {dailyTempMax[5]}°
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
                      <img
                        style={{ width: "20px", height: "20px" }}
                        src={PrecipitationIcon}
                        alt="PrecipitationIcon"
                      />
                      <span className="forcastdatespan">{dailyPrec[5]}%</span>
                    </div>
                    <div>
                      {dailyDate ? (
                        formatDates(dailyDate[5])
                      ) : (
                        <WiNA size={30} color="#000" />
                      )}
                    </div>
                  </div>
                </div>

                <div className="forecastdaysitem" id="forcastdayitem6">
                  <div className="forecastitemtextDiv">
                    {forecastWmoCode ? (
                      renderForecastWeather(forecastWmoCode[6])
                    ) : (
                      <WiNA size={35} color="white" />
                    )}
                    <div style={{ display: "flex" }}>
                      <div>
                        <span className="humidityValue temp_degree forecasttextSpan">
                          {dailyTempMax[6]}°{" "}
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
                          {dailyTempMax[6]}°
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
                      <img
                        style={{ width: "20px", height: "20px" }}
                        src={PrecipitationIcon}
                        alt="PrecipitationIcon"
                      />
                      <span className="forcastdatespan">{dailyPrec[6]}%</span>
                    </div>
                    <div>
                      {dailyDate ? (
                        formatDates(dailyDate[6])
                      ) : (
                        <WiNA size={30} color="#000" />
                      )}
                    </div>
                  </div>
                </div>

                <div className="forecastdaysitem" id="forcastdayitem7">
                  <div className="forecastitemtextDiv">
                    {forecastWmoCode ? (
                      renderForecastWeather(forecastWmoCode[7])
                    ) : (
                      <WiNA size={35} color="white" />
                    )}
                    <div style={{ display: "flex" }}>
                      <div>
                        <span className="humidityValue temp_degree forecasttextSpan">
                          {dailyTempMax[7]}°{" "}
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
                          {dailyTempMax[7]}°
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
                      <img
                        style={{ width: "20px", height: "20px" }}
                        src={PrecipitationIcon}
                        alt="PrecipitationIcon"
                      />
                      <span className="forcastdatespan">{dailyPrec[7]}%</span>
                    </div>
                    <div>
                      {dailyDate ? (
                        formatDates(dailyDate[7])
                      ) : (
                        <WiNA size={30} color="#000" />
                      )}
                    </div>
                  </div>
                </div>

                <div className="forecastdaysitem" id="forcastdayitem8">
                  <div className="forecastitemtextDiv">
                    {forecastWmoCode ? (
                      renderForecastWeather(forecastWmoCode[8])
                    ) : (
                      <WiNA size={35} color="white" />
                    )}
                    <div style={{ display: "flex" }}>
                      <div>
                        <span className="humidityValue temp_degree forecasttextSpan">
                          {dailyTempMax[8]}°{" "}
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
                          {dailyTempMax[8]}°
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
                      <img
                        style={{ width: "20px", height: "20px" }}
                        src={PrecipitationIcon}
                        alt="PrecipitationIcon"
                      />
                      <span className="forcastdatespan">{dailyPrec[8]}%</span>
                    </div>
                    <div>
                      {dailyDate ? (
                        formatDates(dailyDate[8])
                      ) : (
                        <WiNA size={30} color="#000" />
                      )}
                    </div>
                  </div>
                </div>

                <div className="forecastdaysitem" id="forcastdayitem9">
                  <div className="forecastitemtextDiv">
                    {forecastWmoCode ? (
                      renderForecastWeather(forecastWmoCode[9])
                    ) : (
                      <WiNA size={35} color="white" />
                    )}
                    <div style={{ display: "flex" }}>
                      <div>
                        <span className="humidityValue temp_degree forecasttextSpan">
                          {dailyTempMax[9]}°{" "}
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
                          {dailyTempMax[9]}°
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
                      <img
                        style={{ width: "20px", height: "20px" }}
                        src={PrecipitationIcon}
                        alt="PrecipitationIcon"
                      />
                      <span className="forcastdatespan">{dailyPrec[9]}%</span>
                    </div>
                    <div>
                      {dailyDate ? (
                        formatDates(dailyDate[9])
                      ) : (
                        <WiNA size={30} color="#000" />
                      )}
                    </div>
                  </div>
                </div>

                <div className="forecastdaysitem" id="forcastdayitem10">
                  <div className="forecastitemtextDiv">
                    {forecastWmoCode ? (
                      renderForecastWeather(forecastWmoCode[10])
                    ) : (
                      <WiNA size={35} color="white" />
                    )}
                    <div style={{ display: "flex" }}>
                      <div>
                        <span className="humidityValue temp_degree forecasttextSpan">
                          {dailyTempMax[10]}°{" "}
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
                          {dailyTempMax[10]}°
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
                      <img
                        style={{ width: "20px", height: "20px" }}
                        src={PrecipitationIcon}
                        alt="PrecipitationIcon"
                      />
                      <span className="forcastdatespan">{dailyPrec[10]}%</span>
                    </div>
                    <div>
                      {dailyDate ? (
                        formatDates(dailyDate[10])
                      ) : (
                        <WiNA size={30} color="#000" />
                      )}
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
