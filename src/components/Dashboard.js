import React from 'react'

export default function Dashboard() {
  return (
    <div>
      <div id='container' style={{width:'70vw'}}>
        <div style={{backgroundColor:'black',display:'flex'}}>
            <div style={{backgroundColor:'pink',width:'45vw',height:'270px',margin:'0px 10px',borderRadius:'40px'}}></div>
            <div style={{backgroundColor:'pink', width:'30vw',height:'270px',margin:'0px 10px',borderRadius:'40px'}}></div>
        </div>
        <div style={{display:'flex'}}>
            <div id='overviewDiv' style={{backgroundColor:'pink', width:'45vw',height:'370px',margin:'10px',borderRadius:'40px'}}></div>
            <div id='forcastDiv' style={{backgroundColor:'pink', width:'30vw',height:'370px',margin:'10px',borderRadius:'40px'}}></div>
        </div>
      </div>
    </div>
  )
}
