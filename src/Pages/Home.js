import React, { useContext } from "react";
import Sidepanel from "../components/SideBar";
import Nav from "../components/Nav";
import Dashboard from "../components/Dashboard";
import Worldforcast from "../components/Worldforcast";
import { ActiveUnitContext } from "../ActiveUnitContext";
import LoadingScreen from "../components/LoadingScreen";
import { Routes, Route } from "react-router-dom";
import "./Home.css";
import Settings from "../components/Settings";
import Card from "@mui/material/Card";

export default function Home() {
  const { loading } = useContext(ActiveUnitContext); // Accessing context here
  console.log(loading);

  return (
    <>
      <div>
        <div id="container" className="main-container">
          <div id="sidebarContainer" className="sidebar">
            <Sidepanel />
          </div>

          <div id="homeContainer" className="home-content">
            <div id="navContainer">
              <Nav />
            </div>
            <div style={{display:'flex',justifyContent:'space-between'}}>
              <div id="dashboardContainer" className="dashboard">
                <Routes>
                  <Route path="/*" element={<Dashboard />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </div>
              <div id="worldForecastContainer">
                <Worldforcast />
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading && <LoadingScreen />}
    </>
  );
}
