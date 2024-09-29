import React from 'react';
import Sidepanel from '../components/SideBar';
import Nav from '../components/Nav';
import Dashboard from '../components/Dashboard';
import Wordforcast from '../components/Worldforcast';
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
