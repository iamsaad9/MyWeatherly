import React from 'react'

export default function Dashboard() {
  return (
    <div>
      <div id='container' style={{width:'80vw'}}>
        <div style={{backgroundColor:'',display:'flex',gap:'20px'}}>
            <div style={{backgroundColor:'#292929',width:'45vw',height:'270px',margin:'0px 10px',borderRadius:'30px',display:'flex',justifyContent:'center',flexDirection:'column'}}>
              <div style={{backgroundColor:'',height:'100px',width:"97%",marginTop:'15px',padding:'0px 20px',display:'flex',justifyContent:'space-between'}}>
                <div id='weatherlogo' style={{backgroundColor:'white',height:'100%',width:'100px'}}></div>
               
                <div id='weatherArea' style={{backgroundColor:' ',height:'100%',width:'150px',display:'flex',justifyContent:'center'}}> 
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

              <div id='hourly' style={{backgroundColor:'brown',height:'100px',width:'100%',marginTop:''}}></div>
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
