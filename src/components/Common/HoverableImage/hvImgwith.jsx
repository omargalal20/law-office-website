import React, { useState, useEffect } from "react";

import clockIcon from "../../../assets/Images/Insights/main-insights-clock-icon.svg";
import hoverableImageButtonIcon from "../../../assets/Images/Misc/hoverable-image-button-icon.svg";
const HoverableImageWith = ({
  src,
  alt,
  width,
  bigWidth,
  height,
  text,
  buttonEnabled = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(buttonEnabled);

  useEffect(() => {
    setIsButtonEnabled(buttonEnabled);
  }, [buttonEnabled]);

  const isBigImage = height === "692px"; // Assuming 678px is the height of the bigger image
  const imageWidth = isBigImage ? bigWidth : width;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: height + 20,
        overflow: "hidden",
      }}
    >
      <div style={{ position: "relative", display: "inline-block" }}>
        <img
          src={src}
          alt={alt}
          style={{
            width: imageWidth,
            height: height,
            objectFit: "cover",
          }}
        />
        {text && (
          <div
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              color: "white",
              fontSize: "24px",
              fontWeight: "400",
              fontFamily: "Montserrat",
              paddingBottom: "50px",
              paddingLeft: "20px",
            }}
          >
            {text.map((line, index) => {
              let fontSize;
              let fontWeight;
              if (index === 0) {
                fontSize = "25px";
                fontWeight = 200;
              } else if (index === 1) {
                fontSize = "35px";
                fontWeight = 400;
              } else {
                fontSize = "15px";
                fontWeight = 200;
              }

              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: fontSize,
                    fontWeight: fontWeight,
                  }}
                >
                  {index === text.length - 1 && (
                    <img
                      src={clockIcon}
                      alt="Clock Icon"
                      style={{ marginRight: "5px" }}
                    />
                  )}
                  {line}
                </div>
              );
            })}
          </div>
        )}
        <div
          style={{
            display: "flex",
            alignSelf: "flex-end",
            alignItems: "center",
            overflowX: "hidden", // Prevent horizontal scrolling
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button>See what is ahead</button>
          <div
            style={{
              transition: "transform 0.5s ease",
              transform: isHovered ? "translateX(5px)" : "translateX(0)",
            }}
          >
            <img
              src={hoverableImageButtonIcon}
              alt="icon"
              style={{ marginLeft: "10px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverableImageWith;
