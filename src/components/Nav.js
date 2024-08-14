import React from "react";

export default function Nav() {
  return (
    <div>
      <div
        id="container"
        style={{
          backgroundColor: "",
          height: "13vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          id="about"
          style={{
            backgroundColor: "",
            padding: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // margin: "10px",
            gap: "15px",
          }}
        >
          <div
            id="dis_pic"
            style={{ backgroundColor: "", width: "35px", height: "35px" }}
          >
            <div
              style={{
                width: "35px",
                height: "35px",
                backgroundColor: "white",
                borderRadius: "50%",
              }}
            ></div>
          </div>

          <div
            style={{
              backgroundColor: "",
              display: "flex",
              width: "300px",
              // height: "5em",
              padding: "5px",
              paddingBottom: "10px",
              flexDirection: "column",
            }}
          >
            <div
              id="name"
              style={{
                backgroundColor: "",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <span
                id="name_span"
                style={{ color: "white", fontSize: "12px", marginTop: "5px" }}
              >
                Hi, Saad
              </span>
              <span
                id="date_span"
                style={{ color: "white", fontSize: "25px", marginTop: "-5px" }}
              >
                Mon, 29 July, 2024
              </span>
            </div>
          </div>
        </div>

        <div
          id="nav_opt"
          style={{
            backgroundColor: "",
            padding: "0px 10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "10px",
            width: "38vw",
          }}
        >
          <div
            id="search"
            style={{
              backgroundColor: "",
              height: "3em",
              width: "15em",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              type="search"
              style={{
                // height: "70%",
                width: "100%",
                borderRadius: "25px",
                padding: "5px 10px",
                fontSize: "18px",
                color: "white",
                backgroundColor: "grey",
                textDecoration:'none',
                
              }}
            ></input>
          </div>
          <div
            id="language"
            style={{
              backgroundColor: "",
              height: "3.6em",
              width: "8vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <select
              name="language"
              id="lang"
              style={{
                // height: "70%", 
                width: "90%",
                backgroundColor: "gray",
                borderRadius: "25px",
                padding: "5px 15px",
                fontSize: "1.2em",
                color: "white",
              }}
            >
              <option value="english">ENG</option>
              <option value="urdu">URDU</option>
              <option value="japanes">JAP</option>
            </select>
          </div>

          <div
            id="temp_unit"
            style={{ backgroundColor: "white", height: "3em", width: "7vw" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
