import React from "react";
import "./Dashboard.css";
import {useRef } from "react";

export default function Dashboard() {
  const scrollLeft = () => {
    const div = document.getElementById("hourly");
    div.scrollLeft -= 300; // Adjust value to control scroll speed
  };

  const scrollRight = () => {
    const div = document.getElementById("hourly");
    div.scrollLeft += 300; // Adjust value to control scroll speed
  };

  // const hourlyDiv = document.getElementById("hourly");
  // const scrollRightBtn = document.getElementById("scroll_right_btn");

  // hourlyDiv.addEventListener("mouseover", () => {
  //   scrollRightBtn.style.display = "block";
  // });

  // hourlyDiv.addEventListener("mouseout", () => {
  //   scrollRightBtn.style.display = "block";
  // });


  // const day3 = document.getElementById('day3btn')
  // const day10 = document.getElementById('day10btn')
  // function changetoDay3(){
  //   console.log(day3)
  //   if(day3 && day10){
  //     day10.style.backgroundColor='transparent'
  //     day3.style.backgroundColor='#be83de'
  //   }
  // }

  // function changetoDay10(){
  //   console.log(day10)
  //   if(day3 && day10){
  //     day3.style.backgroundColor='transparent'
  //     day10.style.backgroundColor='#be83de'
  //   } 
  // }


  const day3Ref = useRef(null);
  const day10Ref = useRef(null);
  const forecastDiv = useRef(null);
  
  const changetoDay3 = () => {
    if (day3Ref.current && day10Ref.current && forecastDiv.current) {
      day10Ref.current.style.backgroundColor = 'transparent';
      day3Ref.current.style.backgroundColor = '#be83de';
      forecastDiv.current.style.overflow='hidden'

    }
  };
  
  const changetoDay10 = () => {
    if (day3Ref.current && day10Ref.current && forecastDiv.current) {
      day3Ref.current.style.backgroundColor = 'transparent';
      day10Ref.current.style.backgroundColor = '#be83de';
      forecastDiv.current.style.overflowY='scroll'
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
                  <span className="tempValue">+20</span>
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
                {"<"}
              </button>

              <button id="scroll_right_btn" onClick={scrollRight}>
                {">"}
              </button>

              <div id="hourly">
                <div className="hours">
                  <span style={{ backgroundColor: "" }}>12 am</span>
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">cloud</span>
                  <span style={{ backgroundColor: "" }}>17*</span>
                </div>

                <div className="hours">
                  <span style={{ backgroundColor: "" }}>1 am</span>
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">cloud</span>

                  <span style={{ backgroundColor: "" }}>17*</span>
                </div>

                <div className="hours">
                  <span style={{ backgroundColor: "" }}>2 am</span>
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">
                    partly_cloudy_night
                  </span>
                  <span style={{ backgroundColor: "" }}>17*</span>
                </div>

                <div className="hours">
                  <span style={{ backgroundColor: "" }}>3 am</span>
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">cloud</span>
                  <span style={{ backgroundColor: "" }}>17*</span>
                </div>

                <div className="hours">
                  <span style={{ backgroundColor: "" }}>4 am</span>
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">
                    thunderstorm
                  </span>
                  <span style={{ backgroundColor: "" }}>17*</span>
                </div>

                <div className="hours">
                  <span style={{ backgroundColor: "" }}>5 am</span>
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">foggy</span>

                  <span style={{ backgroundColor: "" }}>17*</span>
                </div>

                <div className="hours">
                  <span style={{ backgroundColor: "" }}>6 am</span>
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">rainy</span>
                  <span style={{ backgroundColor: "" }}>17*</span>
                </div>

                <div className="hours">
                  <span style={{ backgroundColor: "" }}>7 am</span>
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">rainy</span>
                  <span style={{ backgroundColor: "" }}>17*</span>
                </div>

                <div className="hours">
                  <span style={{ backgroundColor: "" }}>8 am</span>
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">foggy</span>
                  <span style={{ backgroundColor: "" }}>17*</span>
                </div>

                <div className="hours">
                  <span style={{ backgroundColor: "" }}>9 am</span>
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">
                    partly_cloudy_day
                  </span>
                  <span style={{ backgroundColor: "" }}>17*</span>
                </div>

                <div className="hours">
                  <span style={{ backgroundColor: "" }}>20 am</span>
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">
                    partly_cloudy_day
                  </span>
                  <span style={{ backgroundColor: "" }}>17*</span>
                </div>

                <div className="hours">
                  <span style={{ backgroundColor: "" }}>11 am</span>
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">sunny</span>
                  <span style={{ backgroundColor: "" }}>17*</span>
                </div>

                <div className="hours">
                  <span style={{ backgroundColor: "" }}>12 pm</span>
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">sunny</span>
                  <span style={{ backgroundColor: "" }}>17*</span>
                </div>

                <div className="hours">
                  <span style={{ backgroundColor: "" }}>1 pm</span>
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">sunny</span>
                  <span style={{ backgroundColor: "" }}>17*</span>
                </div>

                <div className="hours">
                  <span style={{ backgroundColor: "" }}>2 pm</span>
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">
                    partly_cloudy_day
                  </span>
                  <span style={{ backgroundColor: "" }}>17*</span>
                </div>

                <div className="hours">
                  <span style={{ backgroundColor: "" }}>3 pm</span>
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">
                    partly_cloudy_day
                  </span>
                  <span style={{ backgroundColor: "" }}>17*</span>
                </div>

                <div className="hours">
                  <span style={{ backgroundColor: "" }}>4 pm</span>
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">
                    partly_cloudy_day
                  </span>
                  <span style={{ backgroundColor: "" }}>17*</span>
                </div>

                <div className="hours">
                  <span style={{ backgroundColor: "" }}>5 pm</span>
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">cloud</span>
                  <span style={{ backgroundColor: "" }}>17*</span>
                </div>

                <div className="hours">
                  <span style={{ backgroundColor: "" }}>6 pm</span>
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">cloud</span>
                  <span style={{ backgroundColor: "" }}>17*</span>
                </div>

                <div className="hours">
                  <span style={{ backgroundColor: "" }}>7 pm</span>
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">rainy</span>
                  <span style={{ backgroundColor: "" }}>17*</span>
                </div>

                <div className="hours">
                  <span style={{ backgroundColor: "" }}>8 pm</span>
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">rainy</span>
                  <span style={{ backgroundColor: "" }}>17*</span>
                </div>

                <div className="hours">
                  <span style={{ backgroundColor: "" }}>9 pm</span>
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">cloud</span>
                  <span style={{ backgroundColor: "" }}>17*</span>
                </div>

                <div className="hours">
                  <span style={{ backgroundColor: "" }}>10 pm</span>
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">cloud</span>
                  <span style={{ backgroundColor: "" }}>17*</span>
                </div>

                <div className="hours">
                  <span style={{ backgroundColor: "" }}>11 pm</span>
                  {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                  <span className="material-symbols-outlined">
                    partly_cloudy_night
                  </span>
                  <span style={{ backgroundColor: "" }}>17*</span>
                </div>
              </div>
            </div>
          </div>
          <div className="worldmapDiv"></div>
        </div>

        <div className="mainRow">
          <div id="overviewDiv"></div>
          <div id="forecastDiv">
            <div className="forecast-innerDiv" id="forecastDivtitle">
              <div id="forecasttitle">
                <span id="titlespan">Forecast</span>
              </div>

              <div id="forecastday">
                <div class="toggle-switch">
                  <button id="day3btn" ref={day3Ref} class="switch-button" onClick={changetoDay3}>3 days</button>
                  <button id="day10btn" ref={day10Ref} class="switch-button" onClick={changetoDay10}>10 days</button>
                </div>
              </div>
            </div>

            <div className="forecast-innerDiv" id="forecasts" ref={forecastDiv}>
              <div className="forcastdaysitem" id="forcastdayitem1"></div>
              <div className="forcastdaysitem" id="forcastdayitem2"></div>
              <div className="forcastdaysitem" id="forcastdayitem3"></div>
              <div className="forcastdaysitem" id="forcastdayitem4"></div>
              <div className="forcastdaysitem" id="forcastdayitem5"></div>
              <div className="forcastdaysitem" id="forcastdayitem6"></div>
              <div className="forcastdaysitem" id="forcastdayitem7"></div>  
              <div className="forcastdaysitem" id="forcastdayitem8"></div>
              <div className="forcastdaysitem" id="forcastdayitem9"></div>
              <div className="forcastdaysitem" id="forcastdayitem10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
