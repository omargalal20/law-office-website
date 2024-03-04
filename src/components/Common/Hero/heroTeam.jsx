import React from "react";

import HeaderBar from "../../Layout/Header/header";

const HeroTeam = ({
  teamImage,
  backgroundImage,
  primaryHeading,
  secondaryHeading,
  subHeading,
}) => {
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
    </div>
  );
};

export default HeroTeam;
