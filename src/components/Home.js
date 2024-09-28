import React from 'react';
import Sidepanel from './SideBar';
import Nav from './Nav';
import Dashboard from './Dashboard';
import Wordforcast from './Worldforcast';
import './Home.css';

export default function Home() {
  return (
    <div>
      <div id='container' className='main-container'>
        
        <div id='sidebarContainer' className='sidebar'>
          <Sidepanel />
        </div>
        
        <div id='homeContainer' className='home-content'>
          <div id='navContainer'>
            <Nav />
          </div>
          <div id='dashboardContainer' className='dashboard'>
            <Dashboard />
            <Wordforcast />
          </div>
        </div>
      </div>
    </div>
  )
}
