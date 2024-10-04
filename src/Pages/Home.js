import React,{useContext} from 'react';
import Sidepanel from '../components/SideBar';
import Nav from '../components/Nav';
import Dashboard from '../components/Dashboard';
import Wordforcast from '../components/Worldforcast';
import { ActiveUnitContext } from '../ActiveUnitContext';
import LoadingScreen from '../components/LoadingScreen';

import './Home.css';

export default function Home() {

  const { loading } = useContext(ActiveUnitContext); // Accessing context here
  console.log(loading)

  return (
    <>
   
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
    {/* {loading && <LoadingScreen />} */}
    </>
  )
}
