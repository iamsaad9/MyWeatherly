import React from 'react'
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      
      <div id='container' style={{width:'80vw'}}>
        <div style={{backgroundColor:'',display:'flex',gap:'20px'}}>
            <div style={{backgroundColor:'#292929',width:'45vw',height:'270px',margin:'0px 10px',borderRadius:'30px',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',gap:'10px'}}>
              <div style={{backgroundColor:'',height:'100px',width:"97%",padding:'0px 20px',display:'flex',justifyContent:'space-between'}}>
                <div id='weatherlogo' style={{backgroundColor:'white',height:'100%',width:'100px'}}></div>
               
                <div id='weatherArea' style={{backgroundColor:'',height:'100%',width:'150px',display:'flex',justifyContent:'center'}}> 
                  <div style={{backgroundColor:'',width:'100%',display:"flex",flexDirection:'column',alignItems:'center'}}>
                    <span style={{fontSize:'40px',color:'white'}}>Berlin</span>
                    <span style={{color:'white',textAlign:'left'}}>Germany</span>
                  </div>
                </div>
               
                <div id='temperature' style={{backgroundColor:'',height:'100%',width:'100px',display:'flex',justifyContent:'center',margin:'0px 10px'}}>
                  <div style={{backgroundColor:'',width:'100%',display:"flex",flexDirection:'column',alignItems:'center'}}>
                    <span style={{fontSize:'40px',color:'white'}}>+20</span>
                    <span style={{color:'white',textAlign:'left'}}>Temperature</span>
                  </div>
                </div>
                
                <div id='humidity' style={{backgroundColor:'',height:'100%',width:'100px',display:'flex',justifyContent:'center',margin:'0px 10px'}}>
                <div style={{backgroundColor:'',width:'100%',display:"flex",flexDirection:'column',alignItems:'center'}}>
                    <span style={{fontSize:'40px',color:'white'}}>24%</span>
                    <span style={{color:'white',textAlign:'left'}}>Humidity</span>
                  </div>
                </div>

                <div id='wind' style={{backgroundColor:'',height:'100%',width:'150px',display:'flex',justifyContent:'center',margin:'0px 10px'}}>
                <div style={{backgroundColor:'',width:'100%',display:"flex",flexDirection:'column',alignItems:'center'}}>
                    <span style={{fontSize:'40px',color:'white'}}>24km/h</span>
                    <span style={{color:'white',textAlign:'left'}}>Wind Speed</span>
                  </div>
                </div>
              </div>

              <div id='hourly' style={{backgroundColor:'',height:'110px',width:'100%',marginTop:'',display:'flex',alignItems:'',padding:'2px 5px',gap:'6px',flexShrink:'0',overflowX:'auto'}}>

                <div className='hours' style={{width:'8.5%',height:'95%',backgroundColor:'#be83de',borderRadius:'20px',flexShrink:'0',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'5px'}}>
                    <span style={{backgroundColor:''}}>12 am</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">cloud</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                 <div className='hours' style={{width:'8.5%',height:'95%',backgroundColor:'#be83de',borderRadius:'20px',flexShrink:'0',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'5px'}}>
                    <span style={{backgroundColor:''}}>1 am</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">cloud</span>

                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' style={{width:'8.5%',height:'95%',backgroundColor:'#be83de',borderRadius:'20px',flexShrink:'0',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'5px'}}>
                    <span style={{backgroundColor:''}}>2 am</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">partly_cloudy_night</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' style={{width:'8.5%',height:'95%',backgroundColor:'#be83de',borderRadius:'20px',flexShrink:'0',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'5px'}}>
                    <span style={{backgroundColor:''}}>3 am</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">cloud</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' style={{width:'8.5%',height:'95%',backgroundColor:'#be83de',borderRadius:'20px',flexShrink:'0',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'5px'}}>
                    <span style={{backgroundColor:''}}>4 am</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">thunderstorm</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' style={{width:'8.5%',height:'95%',backgroundColor:'#be83de',borderRadius:'20px',flexShrink:'0',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'5px'}}>
                    <span style={{backgroundColor:''}}>5 am</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">foggy</span>

                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' style={{width:'8.5%',height:'95%',backgroundColor:'#be83de',borderRadius:'20px',flexShrink:'0',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'5px'}}>
                    <span style={{backgroundColor:''}}>6 am</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">rainy</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' style={{width:'8.5%',height:'95%',backgroundColor:'#be83de',borderRadius:'20px',flexShrink:'0',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'5px'}}>
                    <span style={{backgroundColor:''}}>7 am</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">rainy</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>
                
                <div className='hours' style={{width:'8.5%',height:'95%',backgroundColor:'#be83de',borderRadius:'20px',flexShrink:'0',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'5px'}}>
                    <span style={{backgroundColor:''}}>8 am</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">foggy</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' style={{width:'8.5%',height:'95%',backgroundColor:'#be83de',borderRadius:'20px',flexShrink:'0',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'5px'}}>
                    <span style={{backgroundColor:''}}>9 am</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">partly_cloudy_day</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' style={{width:'8.5%',height:'95%',backgroundColor:'#be83de',borderRadius:'20px',flexShrink:'0',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'5px'}}>
                    <span style={{backgroundColor:''}}>20 am</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">partly_cloudy_day</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' style={{width:'8.5%',height:'95%',backgroundColor:'#be83de',borderRadius:'20px',flexShrink:'0',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'5px'}}>
                    <span style={{backgroundColor:''}}>11 am</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">sunny</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' style={{width:'8.5%',height:'95%',backgroundColor:'#be83de',borderRadius:'20px',flexShrink:'0',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'5px'}}>
                    <span style={{backgroundColor:''}}>12 pm</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">sunny</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' style={{width:'8.5%',height:'95%',backgroundColor:'#be83de',borderRadius:'20px',flexShrink:'0',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'5px'}}>
                    <span style={{backgroundColor:''}}>1 pm</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">sunny</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' style={{width:'8.5%',height:'95%',backgroundColor:'#be83de',borderRadius:'20px',flexShrink:'0',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'5px'}}>
                    <span style={{backgroundColor:''}}>2 pm</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">partly_cloudy_day</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' style={{width:'8.5%',height:'95%',backgroundColor:'#be83de',borderRadius:'20px',flexShrink:'0',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'5px'}}>
                    <span style={{backgroundColor:''}}>3 pm</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">partly_cloudy_day</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' style={{width:'8.5%',height:'95%',backgroundColor:'#be83de',borderRadius:'20px',flexShrink:'0',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'5px'}}>
                    <span style={{backgroundColor:''}}>4 pm</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">partly_cloudy_day</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' style={{width:'8.5%',height:'95%',backgroundColor:'#be83de',borderRadius:'20px',flexShrink:'0',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'5px'}}>
                    <span style={{backgroundColor:''}}>5 pm</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">cloud</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' style={{width:'8.5%',height:'95%',backgroundColor:'#be83de',borderRadius:'20px',flexShrink:'0',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'5px'}}>
                    <span style={{backgroundColor:''}}>6 pm</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">cloud</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' style={{width:'8.5%',height:'95%',backgroundColor:'#be83de',borderRadius:'20px',flexShrink:'0',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'5px'}}>
                    <span style={{backgroundColor:''}}>7 pm</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">rainy</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' style={{width:'8.5%',height:'95%',backgroundColor:'#be83de',borderRadius:'20px',flexShrink:'0',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'5px'}}>
                    <span style={{backgroundColor:''}}>8 pm</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">rainy</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' style={{width:'8.5%',height:'95%',backgroundColor:'#be83de',borderRadius:'20px',flexShrink:'0',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'5px'}}>
                    <span style={{backgroundColor:''}}>9 pm</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">cloud</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' style={{width:'8.5%',height:'95%',backgroundColor:'#be83de',borderRadius:'20px',flexShrink:'0',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'5px'}}>
                    <span style={{backgroundColor:''}}>10 pm</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">cloud</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>

                <div className='hours' style={{width:'8.5%',height:'95%',backgroundColor:'#be83de',borderRadius:'20px',flexShrink:'0',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'5px'}}>
                    <span style={{backgroundColor:''}}>11 pm</span>
                    {/* <div style={{backgroundColor:'',height:'33px',width:'45px'}}>icon</div> */}
                    <span class="material-symbols-outlined">partly_cloudy_night</span>
                    <span style={{backgroundColor:''}}>17*</span>
                </div>
              </div>
            </div>
            <div style={{backgroundColor:'grey', width:'30vw',height:'270px',margin:'0px 10px',borderRadius:'40px'}}></div>
        </div>
        <div style={{display:'flex',gap:'20px'}}>
            <div id='overviewDiv' style={{backgroundColor:'grey', width:'45vw',height:'370px',margin:'10px',borderRadius:'40px'}}></div>
            <div id='forcastDiv' style={{backgroundColor:'grey', width:'30vw',height:'370px',margin:'10px',borderRadius:'40px'}}></div>
        </div>
      </div>
    </div>
  )
}
