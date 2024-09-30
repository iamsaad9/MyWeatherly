import "./SideBarCss.css";
import React from "react";
import Swal from "sweetalert2";
import Badge from "@mui/material/Badge";

export default function Sidepanel() {
  const handleLogoutClick = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: true,
    });

    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "Do you want to Log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Cancel",
      cancelButtonText: "Log out",
      reverseButtons: true,
      background: "var(--elementBg)",
      color: "white",
      backdrop: `rgba(0, 0, 0, 0.5)`,
    });
  };

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div>
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
            <Badge color="error" badgeContent=" " variant="dot">
              <span className="material-symbols-outlined">notifications</span>
            </Badge>
          </div>
          <div id="dashboardDiv" className="sideBarDiv menu-item">
            <span className="material-symbols-outlined">grid_view</span>
          </div>

          <div id="settingDiv" className="sideBarDiv menu-item">
            <span className="material-symbols-outlined">settings</span>
          </div>
        </div>

        <div className="logout-section">
          <div
            id="loginDiv"
            className="sideBarDiv logout-item"
            onClick={handleLogoutClick}
          >
            <span className="material-symbols-outlined">
              power_settings_new
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
