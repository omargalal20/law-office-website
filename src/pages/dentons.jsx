import React from "react";
import dentonsbg from "../assets/dentons.svg";
import dentonsbg2 from "../assets/dentons2.svg";
import dentonsbg3 from "../assets/dentons3.svg";
import Stack from "@mui/material/Stack";
import HeaderBar from "../reusable-components/header";
import { useState } from "react";
import bx6 from "../assets/img.svg";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";

const Dentons = () => {
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  return (
    <Stack direction={"column"} spacing={0}>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "902px", // Adjust the height as needed
        }}
      >
        <img
          src={dentonsbg}
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
            backgroundColor: "rgba(0, 0, 0, 0.15)", // Adjust the opacity as needed
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
            <HeaderBar />
          </div>
        </div>
        <p
          style={{
            position: "absolute",
            top: 540,
            left: 80,
            right: 0,
            color: "white",
            fontSize: "50px",
            width: "500px",
            fontWeight: "300",
            height: "122px",
          }}
        >
          Leading Our Impact{" "}
          <span
            style={{
              fontWeight: "100",
              fontStyle: "italic",
            }}
          >
            Globally
          </span>
        </p>
        <p
          style={{
            position: "absolute",
            top: 712,
            left: 80,
            right: 0,
            color: "white",
            fontSize: "18px",
            width: "454px",
            fontWeight: "100",
            fontFamily: "Montserrat",
            fontStyle: "italic",
          }}
        >
          In Partnership with Dentons
        </p>
      </div>
      <div style={{ position: "relative" }}>
        <img
          src={dentonsbg2}
          alt="bg"
          style={{
            width: "100%",
            height: "100%", // Ensure the image covers the entire container
            objectFit: "cover",
          }}
        />
        <p
          style={{
            fontSize: 45,
            width: 222,
            fontWeight: 300,
            height: 146,
            position: "absolute",
            textAlign: "left",
            top: 84,
            left: 94,
            color: "white",
          }}
        >
          Meet{" "}
          <span style={{ fontWeight: 100, fontStyle: "italic" }}>Dentons</span>
        </p>
        <p
          style={{
            position: "absolute",
            fontSize: 18,
            fontWeight: 400,
            textAlign: "left",
            top: 253,
            left: 94,
            width: 690,
            color: "white",
            fontFamily: "Montserrat",
          }}
        >
          Founded in 2013 through the merger of three large law firms, SNR
          Denton, Fraser Milner Casgrain and Salans, Dentons has grown rapidly
          through a series of mergers and acquisitions, including its 2015
          merger with Chinese law firm Dacheng, which at the time made it the
          largest law firm in the world by both lawyer count and revenue.
        </p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p
            style={{
              fontSize: 30,
              width: 148,
              fontWeight: 300,
              height: 146,
              position: "absolute",
              textAlign: "left",
              top: 430,
              left: 94,
              color: "white",
              fontFamily: "Montserrat",
            }}
          >
            80{" "}
            <span style={{ fontWeight: 100, fontStyle: "italic" }}>
              Countries
            </span>
          </p>
          <p
            style={{
              fontSize: 30,
              width: 148,
              fontWeight: 300,
              height: 146,
              position: "absolute",
              textAlign: "left",
              top: 430,
              left: 274,
              color: "white",
              fontFamily: "Montserrat",
            }}
          >
            160+{" "}
            <span style={{ fontWeight: 100, fontStyle: "italic" }}>
              Offices
            </span>
          </p>
          <p
            style={{
              fontSize: 30,
              width: 148,
              fontWeight: 300,
              height: 146,
              position: "absolute",
              textAlign: "left",
              top: 430,
              left: 408,
              color: "white",
              fontFamily: "Montserrat",
            }}
          >
            12,500+{" "}
            <span style={{ fontWeight: 100, fontStyle: "italic" }}>
              Lawyers
            </span>
          </p>
        </div>
      </div>
      <div style={{ background: "white", height: "1390px" }}>
        <Stack direction={"row"} spacing={5}>
          <Stack direction={"column"}>
            <p>Global Scale, Local Touch</p>
            <p>
              From bustling metropolises to remote corners of the world, Dentons
              has deep local roots in every jurisdiction they operate in. This
              ensures clients receive not just global reach, but the nuanced
              understanding and cultural sensitivity crucial for success in
              diverse legal environments.
            </p>
            <img
              src={dentonsbg3}
              alt="bg"
              style={{ width: "651px", height: "888px" }}
            />
          </Stack>
          <Stack direction={"column"}></Stack>
        </Stack>
      </div>
      <div
        style={{
          height: 565,
          width: "100%",
          background: "#09283F",
        }}
      >
        <Stack
          direction={"row"}
          spacing={12}
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <div
            style={{
              position: "relative",
              height: "306px",
              width: "376px",
              background: "#114164",
              marginTop: "54px",
            }}
          >
            <p
              style={{
                position: "absolute",
                color: "white",
                fontSize: "30px",
                width: "149px",
                textAlign: "left",
                lineHeight: "31.69px",
                fontFamily: "Montserrat",
                top: 30,
                left: 28,
              }}
            >
              <strong>Careers</strong>
            </p>
            <p
              style={{
                position: "absolute",
                color: "white",
                fontSize: "20px",
                width: "216px",
                textAlign: "left",
                lineHeight: "31.69px",
                fontFamily: "Montserrat",
                top: 96,
                left: 28,
              }}
            >
              Join Afifi Law Office
            </p>
            <p
              style={{
                position: "absolute",
                color: "white",
                fontSize: "15px",
                width: "316px",
                textAlign: "left",
                fontFamily: "Montserrat",
                fontStyle: "italic",
                height: "72px",
                top: 161,
                left: 28,
              }}
            >
              We consistently welcome accomplished and ambitious professionals
              to join our team and contribute to our ongoing success story.
            </p>
            <p
              style={{
                color: "white",
                textAlign: "right",
                bottom: 10,
                position: "absolute",
                right: 35,
                fontSize: 15,
                display: "flex",
                alignItems: "center",
                transition: "transform 0.3s", // Apply transition to transform property
                cursor: "pointer",
              }}
              onMouseEnter={() => setIsHovered5(true)}
              onMouseLeave={() => setIsHovered5(false)}
            >
              <span
                style={{
                  marginRight: isHovered5 ? "20px" : "10px",
                  transition: "margin-right 0.3s",
                }}
              >
                Join Us
              </span>
              <ChangeHistoryIcon
                style={{
                  color: "orange",
                  transform: isHovered5
                    ? "translateX(-5px) rotateZ(90deg)"
                    : "rotateZ(90deg)", // Adjust transform on hover
                  width: "15px",
                  transition: "transform 0.3s", // Apply transition to transform property
                }}
              />
            </p>
          </div>
          <div
            style={{
              height: "457px",
              width: "850px",
              marginTop: "54px",
              position: "relative",
              overflow: "hidden", // Prevent image overflow
              padding: "20px 0", // Add padding to maintain space for the image
            }}
            onMouseEnter={() => setIsHovered4(true)}
            onMouseLeave={() => setIsHovered4(false)}
          >
            <img
              src={bx6}
              alt="side"
              style={{
                objectFit: "cover",
                position: "absolute",
                top: isHovered4 ? "-20px" : "0", // Adjust top position based on hover
                left: "0",
                width: "100%",
                transition: "top 0.3s ease", // Smooth transition for "translation"
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: isHovered4
                  ? "rgba(0, 0, 0, 0.5)"
                  : "transparent",
                transition: "background-color 0.3s ease",
              }}
            ></div>
            <p
              style={{
                position: "absolute",
                color: "white",
                fontSize: "40px",
                width: "600px",
                textAlign: "left",
                lineHeight: "31.69px",
                fontFamily: "Montserrat",
                top: 145,
                left: 49,
                zIndex: 1, // Ensure text is above the overlay
              }}
            >
              Accountability is Significant
            </p>
            <p
              style={{
                position: "absolute",
                color: "white",
                fontSize: "25px",
                width: "600px",
                height: "120px",
                textAlign: "left",
                lineHeight: "31.69px",
                fontFamily: "Montserrat",
                fontStyle: "italic",
                top: 226,
                left: 49,
                zIndex: 1, // Ensure text is above the overlay
              }}
            >
              Afifi Law Office is an expanding global law firm characterized by
              its dynamism and unwavering commitment to conducting business
              responsibly.
            </p>
          </div>
        </Stack>
      </div>
    </Stack>
  );
};

export default Dentons;
