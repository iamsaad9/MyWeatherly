import React, { useContext, useState,useEffect } from "react";
import { ActiveUnitContext } from "../ActiveUnitContext";
import "./Settings.css";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid2";
import DarkModeToggle from "react-dark-mode-toggle";

export default function Settings() {
  const { setLoading } = useContext(ActiveUnitContext);
  const [isDarkMode, setIsDarkMode] = useState(true);
  setLoading(false); 

  const changeMode = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      console.log(isDarkMode);
    } else if (!isDarkMode) {
      setIsDarkMode(true);
      console.log(isDarkMode);
    }
  };

  
  const changeRootColor = (newColor,newHoverColor) => {
    document.documentElement.style.setProperty('--themeColor', newColor);
    document.documentElement.style.setProperty('--themeHover', newHoverColor);
    localStorage.setItem('mainColor', newColor); 
    localStorage.setItem('hoverColor', newHoverColor); 
  };

  const addFile = () => {
    const fileInput = document.getElementById("file");
    const fileName = document.getElementById("file-name");

    fileInput.addEventListener("change", function () {
      fileName.textContent = this.files[0].name;
    });
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div id="settingContainer">
        <div id="titlespan" style={{ paddingTop: "5px", paddingLeft: "20px" }}>
          Settings
        </div>

        <div id="settingOptionContainer">
          <div id="settingOptionDiv">
            <Divider
              className="settingDividers"
              style={{ color: "var(--borderColor" }}
            >
              Display
            </Divider>
            <Grid
              sx={{ margin: "15px 0px", color: "white" }}
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 2 }}
            >
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  paddingLeft: "50px",
                }}
                size={6}
              >
                Mode
                <span
                  style={{
                    color: "var(--borderColor",
                    padding: "0px 5px",
                    fontSize: "14px",
                  }}
                >
                  (Dark / Light)
                </span>
              </Grid>

              <Grid sx={{ display: "flex", justifyContent: "center" }} size={6}>
                <DarkModeToggle
                  onChange={changeMode}
                  checked={isDarkMode}
                  size={40}
                />
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  paddingLeft: "50px",
                }}
                size={6}
              >
                Theme Color
              </Grid>

              <Grid
                sx={{ display: "flex", justifyContent: "center", gap: "10px" }}
                size={6}
              >
                <div
                  onClick={() => changeRootColor('#be83de','#b270d6')}
                  style={{
                    width: "25px",
                    height: "25px",
                    backgroundColor: "#be83de",
                    borderRadius: "50%",
                    cursor: "pointer",
                  }}
                />
                <div
                 onClick={() => changeRootColor('#ff7777','#f35d5d')}
                  style={{
                    width: "25px",
                    height: "25px",
                    backgroundColor: "#ff7777",
                    borderRadius: "50%",
                    cursor: "pointer",
                  }}
                />
                <div
                onClick={() => changeRootColor('#7181fe','#5466f1')}
                  style={{
                    width: "25px",
                    height: "25px",
                    backgroundColor: "#7181fe",
                    borderRadius: "50%",
                    cursor: "pointer",
                  }}
                />
                <div
                onClick={() => changeRootColor('#b8e2e9','#7ab9c3')}
                  style={{
                    width: "25px",
                    height: "25px",
                    backgroundColor: "#b8e2e9",
                    borderRadius: "50%",
                    cursor: "pointer",
                  }}
                />
                <div
                onClick={() => changeRootColor('#5db148','#3a782b')}
                  style={{
                    width: "25px",
                    height: "25px",
                    backgroundColor: "#5db148",
                    borderRadius: "50%",
                    cursor: "pointer",
                  }}
                />
              </Grid>

              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  paddingLeft: "50px",
                }}
                size={6}
              >
                Image Background
              </Grid>

              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                size={6}
              >
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                ></input>
                <label id="inputLabel" htmlFor="file" onClick={addFile}>
                  Upload File
                </label>
                <span
                  id="file-name"
                  style={{ fontSize: "12px", padding: "2px 0px" }}
                >
                  
                </span>
              </Grid>

              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  paddingLeft: "50px",
                }}
                size={6}
              >
                Wind Speed Unit{" "}
                <span
                  style={{
                    color: "var(--borderColor",
                    padding: "0px 5px",
                    fontSize: "14px",
                  }}
                >
                  (kmph / mph)
                </span>
              </Grid>

              <Grid sx={{ display: "flex", justifyContent: "center" }} size={6}>
                4
              </Grid>

              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  paddingLeft: "50px",
                }}
                size={6}
              >
                Time Format{" "}
                <span
                  style={{
                    color: "var(--borderColor",
                    padding: "0px 5px",
                    fontSize: "14px",
                  }}
                >
                  (12hr / 24hr)
                </span>
              </Grid>

              <Grid sx={{ display: "flex", justifyContent: "center" }} size={6}>
                4
              </Grid>
            </Grid>
            <Divider
              className="settingDividers"
              style={{ color: "var(--borderColor" }}
            >
              Configuration
            </Divider>
            <Grid
              sx={{ marginTop: "15px", color: "white" }}
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 2 }}
            >
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  paddingLeft: "50px",
                  flexDirection: "column",
                }}
                size={6}
              >
                Auto Detect Location
                <span
                  style={{
                    color: "var(--borderColor",
                    padding: "0px 5px",
                    fontSize: "14px",
                  }}
                >
                  (Auto detect your location and display weather of your
                  location)
                </span>
              </Grid>

              <Grid sx={{ display: "flex", justifyContent: "center" }} size={6}>
                2
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  paddingLeft: "50px",
                  flexDirection: "column",
                }}
                size={6}
              >
                Weather Update Frequency
                <span
                  style={{
                    color: "var(--borderColor",
                    padding: "0px 5px",
                    fontSize: "14px",
                  }}
                >
                  How often the weather data refresh
                </span>
              </Grid>

              <Grid sx={{ display: "flex", justifyContent: "center" }} size={6}>
                4
              </Grid>

              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  paddingLeft: "50px",
                  flexDirection: "column",
                }}
                size={6}
              >
                Default City
                <span
                  style={{
                    color: "var(--borderColor",
                    padding: "0px 5px",
                    fontSize: "14px",
                  }}
                >
                  Manually select a default city
                </span>
              </Grid>

              <Grid sx={{ display: "flex", justifyContent: "center" }} size={6}>
                4
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
