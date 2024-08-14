import React from 'react'
import Sidepanel from './Sidepanel'
import Nav from './Nav'
import Dashboard from './Dashboard'
import Wordforcast from './Wordforcast'

export default function Home() {
  return (
    <div>
      <div id='container' style={{backgroundColor:'black',display:'flex',gap:'20px'}}>
        
        <div id='sidbar_cont' style={{backgroundColor:'black',height:'100vh',width:'5vw',display:'flex',justifyContent:'center',alignItems:'center',position:''}}>
            <Sidepanel/>
        </div>
       
        <div id='home_cont' style={{backgroundColor:'',width:'90vw'}}>
          <div id='nav_cont'>
            <Nav/>
          </div>
            <div id='dash_cont' style={{backgroundColor:'green',padding:'5px',display:'flex'}}>
              <Dashboard/>
              <Wordforcast/>
         </div>
        </div>
      </div>
    </div>
  )
}
