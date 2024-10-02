import React from "react";
import "./Dashboard.css";
import { useRef } from "react";
import Card from "@mui/material/Card";
import Graph from './Graph'
import { useState } from "react";


export default function Dashboard() {

  const day3Ref = useRef(null);
  const day10Ref = useRef(null);
  const day10DivRef = useRef(null);
  const forecastDiv = useRef(null);
  const humidityRef = useRef(null);
  const uvindexRef = useRef(null);
  const rainfallRef = useRef(null);
  const pressureRef = useRef(null);
  const [activeOverview,setactiveOverview] = useState('humidity');


  const scrollLeft = () => {
    const div = document.getElementById("hourly");
    div.scrollLeft -= 320; // Adjust value to control scroll speed
   
  };

  const scrollRight = () => {
    const div = document.getElementById("hourly");
    div.scrollLeft += 320; // Adjust value to control scroll speed
  };


  const changetoDay3 = () => {
    if (day3Ref.current && day10Ref.current && forecastDiv.current && day10DivRef) {
      // console.log(active_idText)
      // Remove active class and inline styles from day10
      day10Ref.current.style.backgroundColor = "transparent";
      day10Ref.current.style.color = "white";
      day10DivRef.current.style.display = 'none'
      // day10Ref.current.classList.remove('active_day');
  
      // Apply styles and class to day3
      day3Ref.current.style.backgroundColor = "#be83de";
      day3Ref.current.style.color = "black";
      day3Ref.current.style.fontWeight = "600";
      // day3Ref.current.classList.add('active_day'); 
  
      // Additional styling for forecastDiv
      forecastDiv.current.style.overflow = "hidden";
    }
  };

  const changetoDay10 = () => {
    if (day3Ref.current && day10Ref.current && forecastDiv.current) {
      // Remove active class and inline styles from day3
      day3Ref.current.style.backgroundColor = "transparent";
      day3Ref.current.style.color = "white";
      // day3Ref.current.classList.remove('active_day'); 
  
      // Apply styles and class to day10
      day10Ref.current.style.backgroundColor = "#be83de";
      day10Ref.current.style.color = "black";
      day10Ref.current.style.fontWeight = "600";
      day10DivRef.current.style.display = 'flex'
      // day10Ref.current.classList.add('active_day'); 
  
      // Additional styling for forecastDiv
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
      setactiveOverview('uvindex');
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
      setactiveOverview('humidity');
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
      setactiveOverview('rainfall');
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
      setactiveOverview('pressure');
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
                  <span className="location">Berlin</span>
                  <span className="country">Germany</span>
                </div>
              </div>

              <div id="temperature">
                <div className="weatherDetails">
                  <div>
                    <span className="tempValue temp_degree">22°</span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "15px",
                        marginLeft: "-5px",
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
                  <span className="humidityValue">24%</span>
                  <span className="humidityLabel">Humidity</span>
                </div>
              </div>

              <div id="wind">
                <div className="weatherDetails">
                  <span className="windSpeed">24km/h</span>
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
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">cloud</span>
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      17°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        marginLeft: "-5px",
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
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">cloud</span>

                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      17°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        marginLeft: "-5px",
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
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">
                    partly_cloudy_night
                  </span>
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      17°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        marginLeft: "-5px",
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
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">cloud</span>
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      17°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        marginLeft: "-5px",
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
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">
                    thunderstorm
                  </span>
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      17°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        marginLeft: "-5px",
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
                    5 am
                  </span>
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">foggy</span>

                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      17°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        marginLeft: "-5px",
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
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">rainy</span>
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      17°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        marginLeft: "-5px",
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
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">rainy</span>
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      17°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        marginLeft: "-5px",
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
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">foggy</span>
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      17°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        marginLeft: "-5px",
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
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">
                    partly_cloudy_day
                  </span>
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      17°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        marginLeft: "-5px",
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
                    20 am
                  </span>
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">
                    partly_cloudy_day
                  </span>
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      17°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        marginLeft: "-5px",
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
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">sunny</span>
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      17°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        marginLeft: "-5px",
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
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">sunny</span>
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      17°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        marginLeft: "-5px",
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
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">sunny</span>
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      17°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        marginLeft: "-5px",
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
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">
                    partly_cloudy_day
                  </span>
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      17°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        marginLeft: "-5px",
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
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">
                    partly_cloudy_day
                  </span>
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      17°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        marginLeft: "-5px",
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
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">
                    partly_cloudy_day
                  </span>
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      17°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        marginLeft: "-5px",
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
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">cloud</span>
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      17°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        marginLeft: "-5px",
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
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">cloud</span>
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      17°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        marginLeft: "-5px",
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
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">rainy</span>
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      17°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        marginLeft: "-5px",
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
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">rainy</span>
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      17°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        marginLeft: "-5px",
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
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">cloud</span>
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      17°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        marginLeft: "-5px",
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
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">cloud</span>
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      17°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        marginLeft: "-5px",
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
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">
                    partly_cloudy_night
                  </span>
                  <div>
                    <span
                      className="temp_degree"
                      style={{ backgroundColor: "", fontWeight: "500" }}
                    >
                      17°
                    </span>
                    <span
                      className="unit-display"
                      style={{
                        fontSize: "10px",
                        marginLeft: "-5px",
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
          <div className="worldmapDiv"></div>
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
                    className= 'overview-switch-button'
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
            <Graph activebtn={activeOverview}/>
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
                  <div style={{display:'flex'}}>
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
                      >C
                      </span>
                    </div>
                    <div style={{alignContent:'end'}}>
                      <span className="humidityValue forecasttextSpan" style={{fontSize:'15px'}}>/</span>
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
                    <span className="forcastdatespan">16</span>
                    <span className="forcastdatespan">May,Tue</span>
                  </div>
                </div>
              </div>

              <div className="forecastdaysitem" id="forcastdayitem2">
                <div className="forecastitemtextDiv">
                  <span className="material-symbols-outlined">sunny</span>
                  <div style={{display:'flex'}}>
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
                      <div style={{alignContent:'end'}}>
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
                  <div style={{display:'flex'}}>
                  <div>
                    <span className="humidityValue temp_degree forecasttextSpan">
                      3°{" "}{" "}
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
                      <div style={{alignContent:'end'}}>
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
                  <div style={{display:'flex'}}>
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
                      <div style={{alignContent:'end'}}>
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
                    <span className="forcastdatespan">19</span>
                    <span className="forcastdatespan">May,Fri</span>
                  </div>
                </div>
              </div>

              <div className="forecastdaysitem" id="forcastdayitem5">
                <div className="forecastitemtextDiv">
                  <span className="material-symbols-outlined">foggy</span>
                  <div style={{display:'flex'}}>
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
                      <div style={{alignContent:'end'}}>   
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
                    <span className="forcastdatespan">20</span>
                    <span className="forcastdatespan">May,Sat</span>
                  </div>
                </div>
              </div>

              <div className="forecastdaysitem" id="forcastdayitem6">
              <div className="forecastitemtextDiv">
                  <span className="material-symbols-outlined">foggy</span>
                  <div style={{display:'flex'}}>
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
                      <div style={{alignContent:'end'}}>   
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
                    <span className="forcastdatespan">21</span>
                    <span className="forcastdatespan">May,Sun</span>
                  </div>
                </div>
              </div>

              <div className="forecastdaysitem" id="forcastdayitem7">
              <div className="forecastitemtextDiv">
                  <span className="material-symbols-outlined">sunny</span>
                  <div style={{display:'flex'}}>
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
                      <div style={{alignContent:'end'}}>   
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
                    <span className="forcastdatespan">22</span>
                    <span className="forcastdatespan">May,Mon</span>
                  </div>
                </div>
              </div>

              <div className="forecastdaysitem" id="forcastdayitem8">
              <div className="forecastitemtextDiv">
                  <span className="material-symbols-outlined">foggy</span>
                  <div style={{display:'flex'}}>
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
                      <div style={{alignContent:'end'}}>   
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
                    <span className="forcastdatespan">24</span>
                    <span className="forcastdatespan">May,Tue</span>
                  </div>
                </div>
              </div>

              <div className="forecastdaysitem" id="forcastdayitem9">
              <div className="forecastitemtextDiv">
                  <span className="material-symbols-outlined">foggy</span>
                  <div style={{display:'flex'}}>
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
                      <div style={{alignContent:'end'}}>   
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
                    <span className="forcastdatespan">24</span>
                    <span className="forcastdatespan">May,Wed</span>
                  </div>
                </div>
              </div>

              <div className="forecastdaysitem" id="forcastdayitem10">
              <div className="forecastitemtextDiv">
                  <span className="material-symbols-outlined">thunderstorm</span>
                  <div style={{display:'flex'}}>
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
                      <div style={{alignContent:'end'}}>   
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

