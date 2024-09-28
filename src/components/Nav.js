import React from "react";
import './Nav.css';

export default function Nav() {
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
            <input
              type="search"
              className="search-input"
            />
          </div>

          <div id="language" className="language-section">
            <select name="language" id="lang" className="language-select">
              <option value="english">ENG</option>
              <option value="urdu">URDU</option>
              <option value="japanes">JAP</option>
            </select>
          </div>

          <div id="temp_unit" className="temp-unit"></div>
        </div>
      </div>
    </div>
  );
}
