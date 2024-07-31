import React from 'react'
import Sidepanel from './Sidepanel'
import Nav from './Nav'
import Dashboard from './Dashboard'

export default function Home() {
  return (
    <div>
      <div id='container' style={{backgroundColor:'black',height:'100vh',display:'flex',gap:'20px'}}>
        <div id='sidbar_cont' style={{backgroundColor:'',height:'100vh',width:'6vw',display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Sidepanel/>
        </div>
       
        <div id='home_cont' style={{backgroundColor:'red',width:'90vw'}}>
          <div id='nav_cont'>
            <Nav/>
          </div>

          <div id='dash_cont' style={{backgroundColor:'green',padding:'5px'}}>
            <Dashboard/>
          </div>
        </div>
      </div>
    </div>
  )
}
