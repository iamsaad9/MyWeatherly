import React from "react";

export default function Nav() {
  return (
    <div>
      <div
        id="container"
        style={{
          backgroundColor: "black",
          height: "7em",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          id="about"
          style={{
            backgroundColor: "",
            padding: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "10px",
            gap: "15px",
          }}
        >
          <div
            id="dis_pic"
            style={{ backgroundColor: "", width: "50px", height: "50px" }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
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
              height: "80px",
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
                style={{ color: "white", fontSize: "15px", marginTop: "5px" }}
              >
                Hi, Saad
              </span>
              <span
                id="date_span"
                style={{ color: "white", fontSize: "30px", marginTop: "-5px" }}
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
            padding: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "15px",
            margin: "10px",
            width: "620px",
          }}
        >
          <div
            id="search"
            style={{
              backgroundColor: "",
              height: "70px",
              width: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              type="search"
              style={{
                height: "70%",
                width: "100%",
                borderRadius: "25px",
                padding: "5px 10px",
                fontSize: "18px",
                color: "white",
                backgroundColor: "grey",
              }}
            ></input>
          </div>
          <div
            id="language"
            style={{
              backgroundColor: "",
              height: "70px",
              width: "120px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <select
              name="language"
              id="lang"
              style={{
                height: "70%",
                width: "90%",
                backgroundColor: "gray",
                borderRadius: "25px",
                padding: "5px 15px",
                fontSize: "20px",
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
            style={{ backgroundColor: "white", height: "70px", width: "120px" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
