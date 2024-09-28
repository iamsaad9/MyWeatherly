import React from 'react';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      
      <div id='container'>
        <div className='mainRow'>
            <div className='weatherCard'>
              <div className='weatherInfo'>
                <div id='weatherlogo'></div>
                
                <div id='weatherArea'> 
                  <div className='weatherDetails'>
                    <span className='location'>Berlin</span>
                    <span className='country'>Germany</span>
                  </div>
                </div>
                
                <div id='temperature'>
                  <div className='weatherDetails'>
                    <span className='tempValue'>+20</span>
                    <span className='tempLabel'>Temperature</span>
                  </div>
                </div>
                
                <div id='humidity'>
                  <div className='weatherDetails'>
                    <span className='humidityValue'>24%</span>
                    <span className='humidityLabel'>Humidity</span>
                  </div>
                </div>

                <div id='wind'>
                  <div className='weatherDetails'>
                    <span className='windSpeed'>24km/h</span>
                    <span className='windLabel'>Wind Speed</span>
                  </div>
                </div>
              </div>


              <div id='hourly'>

                <div className='hours' >
                    <span style={{backgroundColor:''}}>12 am</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">cloud</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                 <div className='hours' >
                    <span style={{backgroundColor:''}}>1 am</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">cloud</span>

                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' >
                    <span style={{backgroundColor:''}}>2 am</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">partly_cloudy_night</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' >
                    <span style={{backgroundColor:''}}>3 am</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">cloud</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' >
                    <span style={{backgroundColor:''}}>4 am</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">thunderstorm</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' >
                    <span style={{backgroundColor:''}}>5 am</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">foggy</span>

                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' >
                    <span style={{backgroundColor:''}}>6 am</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">rainy</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' >
                    <span style={{backgroundColor:''}}>7 am</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">rainy</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>
                
                <div className='hours' >
                    <span style={{backgroundColor:''}}>8 am</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">foggy</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' >
                    <span style={{backgroundColor:''}}>9 am</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">partly_cloudy_day</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' >
                    <span style={{backgroundColor:''}}>20 am</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">partly_cloudy_day</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' >
                    <span style={{backgroundColor:''}}>11 am</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">sunny</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' >
                    <span style={{backgroundColor:''}}>12 pm</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">sunny</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' >
                    <span style={{backgroundColor:''}}>1 pm</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">sunny</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' >
                    <span style={{backgroundColor:''}}>2 pm</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">partly_cloudy_day</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' >
                    <span style={{backgroundColor:''}}>3 pm</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">partly_cloudy_day</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' >
                    <span style={{backgroundColor:''}}>4 pm</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">partly_cloudy_day</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' >
                    <span style={{backgroundColor:''}}>5 pm</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">cloud</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' >
                    <span style={{backgroundColor:''}}>6 pm</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">cloud</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' >
                    <span style={{backgroundColor:''}}>7 pm</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">rainy</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' >
                    <span style={{backgroundColor:''}}>8 pm</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">rainy</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' >
                    <span style={{backgroundColor:''}}>9 pm</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">cloud</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' >
                    <span style={{backgroundColor:''}}>10 pm</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">cloud</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' >
                    <span style={{backgroundColor:''}}>11 pm</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">partly_cloudy_night</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>
              </div>
            </div>
            <div className='sideCard'></div>
        </div>

        <div className='mainRow'>
            <div id='overviewDiv'></div>
            <div id='forcastDiv'></div>
        </div>
      </div>
    </div>
  );
}
