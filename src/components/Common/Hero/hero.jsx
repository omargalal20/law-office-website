import React from 'react'

import HeaderBar from "../../Layout/Header/header";

const Hero = ({ backgroundImage, primaryHeading, secondaryHeading, subHeading }) => {
    return(
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

        <p
          style={{
            position: "absolute",
            top: 200,
            left: 85,
            right: 0,
            color: "white",
            fontSize: "1rem",
            fontWeight: "100",
          }}
        >
          {secondaryHeading}
        </p>

        <p
          style={{
            position: "absolute",
            top: 450,
            left: 85,
            right: 0,
            color: "white",
            fontSize: "50px",
            width: "800px",
            fontWeight: "400",
          }}
        >
          {primaryHeading}
        </p>

        <p
          style={{
            position: "absolute",
            top: 571,
            left: 85,
            right: 0,
            color: "white",
            fontSize: "18px",
            width: "50%",
            fontStyle: "italic",
            fontWeight: "400",
            fontFamily: "Montserrat",
          }}
        >
          {subHeading}
        </p>
      </div>
    )
}

export default Hero;