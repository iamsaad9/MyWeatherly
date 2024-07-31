import React from "react";
import "./SideBarCss.css";
export default function Sidepanel() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <div
        id="container"
        style={{
          backgroundColor: "grey",
          width: "90px",
          height: "95vh",
          borderRadius: "35px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          padding: "5px 0px 20px 0px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexDirection: "column",
            backgroundColor: "",
            margin: "20px",
          }}
        >
          <div
            id="logoDiv"
            className="sideBarDiv"
            style={{
              marginBottom: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "50px",
              color: "white",
            }}
          >
            <span>G</span>
          </div>

          <div
            id="accountDiv"
            className="sideBarDiv"
            style={{
              marginBottom: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <span
              class="material-symbols-outlined"
              style={{ fontSize: "40px" }}
            >
              person
            </span>
          </div>

          <div
            id="notificationDiv"
            className="sideBarDiv"
            style={{
              marginBottom: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <span
              class="material-symbols-outlined"
              style={{ fontSize: "40px" }}
            >
              notifications
            </span>
          </div>

          <div
            id="dashboardDiv"
            className="sideBarDiv"
            style={{
              marginBottom: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <span
              class="material-symbols-outlined"
              style={{ fontSize: "40px" }}
            >
              grid_view
            </span>
          </div>

          <div
            id="settingDiv"
            className="sideBarDiv"
            style={{
              marginBottom: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <span
              class="material-symbols-outlined"
              style={{ fontSize: "40px" }}
            >
              settings
            </span>
          </div>
        </div>

        <div>
          <div
            id="loginDiv"
            className="sideBarDiv"
            style={{
              marginBottom: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <span
              class="material-symbols-outlined"
              style={{ fontSize: "40px" }}
            >
              power_settings_new
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
