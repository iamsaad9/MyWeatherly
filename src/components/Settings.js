import React, { useContext, useState } from "react";
import { ActiveUnitContext } from "../ActiveUnitContext";
import "./Settings.css";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid2";
import DarkModeToggle from "react-dark-mode-toggle";

export default function Settings() {
  const { setLoading } = useContext(ActiveUnitContext);
  const [isDarkMode, setIsDarkMode] = useState(true);
  setLoading(false);
  
  const changeMode = () =>{
    if(isDarkMode){
      setIsDarkMode(false)
      console.log(isDarkMode)
    }else if(!isDarkMode){
      setIsDarkMode(true)
      console.log(isDarkMode)
    }
  }


  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div id="settingContainer">
        <div id="titlespan" style={{ paddingTop: "5px", paddingLeft: "20px" }}>
          Settings
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
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

              <Grid sx={{ display: "flex", justifyContent: "center",gap:'10px' }} size={6}>
                <div style={{width:'25px',height:'25px',backgroundColor:'#be83de',borderRadius:'50%',cursor:'pointer'}}/>
                <div style={{width:'25px',height:'25px',backgroundColor:'#ff7777',borderRadius:'50%',cursor:'pointer'}}/>
                <div style={{width:'25px',height:'25px',backgroundColor:'#7181fe',borderRadius:'50%',cursor:'pointer'}}/>
                <div style={{width:'25px',height:'25px',backgroundColor:'#b8e2e9',borderRadius:'50%',cursor:'pointer'}}/>
                <div style={{width:'25px',height:'25px',backgroundColor:'#5db148',borderRadius:'50%',cursor:'pointer'}}/>
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

              <Grid sx={{ display: "flex", justifyContent: "center" }} size={6}>
                <input type='file' style={{width:'90px',border:'1px solid var(--themeColor)',backgroundColor:'var(--elementDarkBg) !important'}}></input>
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
                  display: "flex",
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
                  display: "flex",
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
                  display: "flex",
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
