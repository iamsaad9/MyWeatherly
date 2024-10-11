import "./SideBarCss.css";
import React, {useContext} from "react";
import Swal from "sweetalert2";
import Badge from "@mui/material/Badge";
import Login from '../Pages/Login'
import { useNavigate  } from 'react-router-dom';
import { ActiveUnitContext } from "../ActiveUnitContext";

export default function Sidepanel() {
  const navigate = useNavigate(); 
  const { setLoading } = useContext(ActiveUnitContext);

  const handleLogoutClick = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "confirm_btn",
        cancelButton: "cancel_btn",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "Do you want to Log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Log Out",
      cancelButtonText: "Cancel",
      reverseButtons: true,
      background: "var(--elementBg)",
      color: "white",
      backdrop: `rgba(0, 0, 0, 0.5)`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        <Login/>
      } 
    });
  };

  const reloadPage = () => {
    window.location.reload();
  };

  const goToDashboard = () => {
    setLoading(true)
    navigate('/dashboard'); // Navigate to Dashboard
  };

  const goToSettings = () => {
    navigate('/settings'); // Navigate to Settings
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
          <div id="dashboardDiv" className="sideBarDiv menu-item" onClick={goToDashboard}>
            <span className="material-symbols-outlined">grid_view</span>
          </div>

          <div id="settingDiv" className="sideBarDiv menu-item" onClick={goToSettings}>
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
