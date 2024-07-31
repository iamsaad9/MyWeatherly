import React from 'react'

export default function Dashboard() {
  return (
    <div>
      <div id='container'>
        <div style={{width:'100%',display:'flex'}}>
            <div style={{backgroundColor:'pink',width:'55%',height:'300px',border:'2px solid white',margin:'0px 10px',borderRadius:'40px'}}></div>
            <div style={{backgroundColor:'pink', width:'45%',height:'300px',margin:'0px 10px',borderRadius:'40px'}}></div>
        </div>

        <div style={{display:'flex'}}>
            <div id='overviewDiv' style={{backgroundColor:'pink', width:'55%',height:'400px',margin:'10px',borderRadius:'40px'}}></div>
            <div id='forcastDiv' style={{backgroundColor:'pink', width:'45%',height:'400px',margin:'10px',borderRadius:'40px'}}></div>
        </div>
      </div>
    </div>
  )
}
