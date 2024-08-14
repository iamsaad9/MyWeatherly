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
          backgroundColor: "rgb(41, 41, 41)",
          width: "4.5vw",
          height: "90vh",
          borderRadius: "35px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "",
          padding: "5px 0px 20px 0px",
          // position:'absolute'
          contain: "content",
        }}
      >
        <div style={{ display: "flex", backgroundColor: "", marginTop: "4vh" }}>
          <div
            id="logoDiv"
            className="sideBarDiv"
            style={{
              marginBottom: "2vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "2.5em",
              color: "white",
            }}
          >
            <span>G</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "",
            flexDirection: "column",
            backgroundColor: "",
            margin: "",
          }}
        >
          <div
            id="accountDiv"
            className="sideBarDiv"
            style={{
              backgroundColor: "",
              marginBottom: "",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <span
              class="material-symbols-outlined"
              style={{ fontSize: "1.5em" }}
            >
              person
            </span>
          </div>

          <div
            id="notificationDiv"
            className="sideBarDiv"
            style={{
              backgroundColor: "",
              marginBottom: "",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <span
              class="material-symbols-outlined"
              style={{ fontSize: "1.5em" }}
            >
              notifications
            </span>
          </div>

          <div
            id="dashboardDiv"
            className="sideBarDiv"
            style={{
              // marginBottom: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <span
              class="material-symbols-outlined"
              style={{ fontSize: "1.5em" }}
            >
              grid_view
            </span>
          </div>

          <div
            id="settingDiv"
            className="sideBarDiv"
            style={{
              // marginBottom: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <span
              class="material-symbols-outlined"
              style={{ fontSize: "1.5em" }}
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
              style={{ fontSize: "1.8em" }}
            >
              power_settings_new
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
