import React from "react";
import "./SideBarCss.css";

export default function Sidepanel() {

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div>
      {/* Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />

      <div id="container" className="sidebar-container">
        <div className="logo-section">
          <div id="logoDiv" className="sideBarDiv logo" onClick={reloadPage}>
            <span>G</span>
          </div>
        </div>

        <div className="menu-section">
          <div id="accountDiv" className="sideBarDiv menu-item">
            <span className="material-symbols-outlined">person</span>
          </div>

          <div id="notificationDiv" className="sideBarDiv menu-item">
            <span className="material-symbols-outlined">notifications</span>
          </div>

          <div id="dashboardDiv" className="sideBarDiv menu-item">
            <span className="material-symbols-outlined">grid_view</span>
          </div>

          <div id="settingDiv" className="sideBarDiv menu-item">
            <span className="material-symbols-outlined">settings</span>
          </div>
        </div>

        <div className="logout-section">
          <div id="loginDiv" className="sideBarDiv logout-item">
            <span className="material-symbols-outlined">power_settings_new</span>
          </div>
        </div>
      </div>
    </div>
  );
}
