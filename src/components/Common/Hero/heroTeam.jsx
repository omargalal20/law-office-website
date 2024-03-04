import React from "react";
import HeaderBar from "../../Layout/Header/header";
import { Stack } from "@mui/material";

const HeroTeam = ({
  teamImage,
  backgroundImage,
  teamName,
  teamPosition,
  teamInfo,
}) => {
  // Split the teamInfo string on "/"
  const teamInfoParts = teamInfo.split("/");

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "975px", // Adjust the height as needed
      }}
    >
      <img
        src={backgroundImage}
        alt="Background"
        style={{
          width: "100%",
          height: "100%", // Ensure the image covers the entire container
          objectFit: "cover",
        }}
      />
      {/* Black overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
          <HeaderBar />
        </div>
      </div>
      <img
        src={teamImage}
        alt="team"
        style={{
          objectFit: "cover",
          position: "absolute",
          top: 289,
          left: 81,
          width: "410px",
          height: "498px",
        }}
      />
      <div>
        <p
          style={{
            position: "absolute",
            color: "white",
            fontFamily: "Montserrat",
            top: 369,
            left: 532,
            width: "460px",
            fontSize: "50px",
            fontWeight: 400,
            height: "498px",
          }}
        >
          {teamName}
        </p>
        <p
          style={{
            position: "absolute",
            top: 450,
            left: 532,
            color: "white",
            fontFamily: "Montserrat",
            width: "410px",
            height: "498px",
            fontSize: "35px",
            fontWeight: 100,
          }}
        >
          {teamPosition}
        </p>
        {/* Iterate over teamInfoParts and render each part in a separate paragraph */}
        {teamInfoParts.map((infoPart, index) => (
          <p
            key={index}
            style={{
              position: "absolute",
              top: 520 + index * 30, // Adjust the top position as needed
              color: "white",
              fontFamily: "Montserrat",
              left: 532,
              width: "410px",
              height: "498px",
              fontSize: "15px",
              fontWeight: 400,
              marginTop: "21px",
            }}
          >
            {infoPart.trim()} {/* Trim to remove extra whitespaces */}
          </p>
        ))}
      </div>
    </div>
  );
};

export default HeroTeam;
