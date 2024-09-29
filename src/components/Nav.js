import React, { useRef, useEffect, useState } from "react";
import "./Nav.css";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Nav() {
  const [lang, setLang] = React.useState("");
  const handleChange = (event) => {
    setLang(event.target.value);
  };

  const celbtn = useRef(null);
  const farbtn = useRef(null);
  const [activeUnit, setActiveUnit] = useState("D");
  const [changeUnit, setchangeUnit] = useState("false");

  const changetoCel = () => {
    setchangeUnit("C");
    if (activeUnit === "F") {
      setActiveUnit("C");
      setchangeUnit("true");
    } else {
      setchangeUnit("false");
    }
  };

  const changetoFar = () => {
    // setchangeUnit('F')
    if (activeUnit === "C" || activeUnit === "D") {
      setActiveUnit("F");
      setchangeUnit("true");
    } else {
      setchangeUnit("false");
    }
  };

  useEffect(() => {
    if (celbtn.current && farbtn.current) {
      console.log(celbtn, farbtn);
      if (activeUnit === "D") {
        celbtn.current.style.backgroundColor = "#be83de";
        farbtn.current.style.backgroundColor = "transparent";
      } else if (activeUnit === "C" && changeUnit === "true") {
        celbtn.current.style.backgroundColor = "#be83de";
        farbtn.current.style.backgroundColor = "transparent";
        const tempDegrees = document.getElementsByClassName("temp_degree");
        for (let i = 0; i < tempDegrees.length; i++) {
          const farValue = parseFloat(tempDegrees[i].textContent);
          console.log(toString(farValue));
          const celValue = (farValue - 32) * (5 / 9);
          console.log(toString(celValue));
          tempDegrees[i].textContent = celValue.toFixed(0) + "*";
        }
      } else if (activeUnit === "F" && changeUnit === "true") {
        celbtn.current.style.backgroundColor = "transparent";
        farbtn.current.style.backgroundColor = "#be83de";
        const tempDegrees = document.getElementsByClassName("temp_degree");
        for (let i = 0; i < tempDegrees.length; i++) {
          const celValue = parseFloat(tempDegrees[i].textContent);
          // console.log(celValue)
          const farValue = celValue * (9 / 5) + 32;
          // console.log(farValue)
          tempDegrees[i].textContent = farValue.toFixed(1) + " F";
        }
      }
    }
  }, [activeUnit, changeUnit]);

  return (
    <div>
      <div id="container" className="nav-container">
        <div id="about" className="about-section">
          <div id="dis_pic" className="display-pic">
            <div className="circle"></div>
          </div>

          <div className="info-section">
            <div id="name" className="name-section">
              <span id="name_span" className="name-text">
                Hi, Saad
              </span>
              <span id="date_span" className="date-text">
                Mon, 29 July, 2024
              </span>
            </div>
          </div>
        </div>

        <div id="nav_opt" className="nav-options">
          <div id="search" className="search-section">
            <span class="material-symbols-outlined">search</span>
            <input
              type="search"
              className="search-input"
              placeholder="Search city"
            />
          </div>

          <div id="language" className="language-section">
            <FormControl
              sx={{
                m: 1,
                minWidth: 80,
                height: "35px",
                backgroundColor: "#1b1b1b",
                borderRadius: "20px",
                color: "white",
                border: "1.5px solid #474646",
              }}
            >
              <Select
                value={lang}
                sx={{
                  p: "1px",
                  backgroundColor: "",
                  color: "white",
                  height: "100%",
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                }}
                onChange={handleChange}
                displayEmpty
                // inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="" style={{ backgroundColor: "#1b1b1b" }}>
                  <>ENG</>
                </MenuItem>
                <MenuItem value={"URDU"} style={{ backgroundColor: "#1b1b1b" }}>
                  URDU
                </MenuItem>
                <MenuItem value={"ABC"} style={{ backgroundColor: "#1b1b1b" }}>
                  ABC
                </MenuItem>
                <MenuItem value={"XYZ"} style={{ backgroundColor: "#1b1b1b" }}>
                  XYZ
                </MenuItem>
              </Select>
            </FormControl>
          </div>

          <div id="temp_unit" className="temp-unit">
            <div class="temp_toggle-switch">
              <button
                id="celbtn"
                ref={celbtn}
                class="temp-switch-button"
                onClick={changetoCel}
              >
                C*
              </button>
              <button
                id="farbtn"
                ref={farbtn}
                class="temp-switch-button"
                onClick={changetoFar}
              >
                F*
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
