import React from "react";
import aboutbg from "../../assets/Images/About/about.svg";
import aboutbg2 from "../../assets/Images/About/about2.svg";
import aboutbg3 from "../../assets/Images/About/about3.svg";
import bx6 from "../../assets/Images/Misc/img.svg";
import Stack from "@mui/material/Stack";
import HeaderBar from "../../components/Layout/Header/header";
import { useState } from "react";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";

const About = () => {
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
          src={aboutbg}
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
            backgroundColor: "rgba(0, 0, 0, 0.25)", // Adjust the opacity as needed
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
            width: "800px",
            fontWeight: "400",
          }}
        >
          We Stand as Destination Of{" "}
          <span
            style={{
              fontWeight: "100",
              fontStyle: "italic",
            }}
          >
            Excellence
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
          Founded in 1981, Leading through Excellence{" "}
        </p>
      </div>
      <Stack
        direction={"row"}
        spacing={0}
        style={{
          height: "651px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ textAlign: "left", paddingTop: 262, marginLeft: 85 }}>
          <p
            style={{
              fontSize: "45px",
              fontWeight: 200,
              width: "232px",
            }}
          >
            Our Story
          </p>
          <p
            style={{
              fontSize: "18px",
              fontWeight: 400,
              width: "592px",
              marginBottom: 18,
              marginTop: 22,
            }}
          >
            Afifi Law Office was founded by Mr. Amal Afifi Dawood in 1981, since
            then, the firm has developed a reputation of integrity,
            professionalism, and commitment in delivering the highest quality of
            broad legal services in the MENA region and Globally.
          </p>
          <p style={{ fontSize: "18px", fontWeight: 400, width: "592px" }}>
            The firm’s renowned reputation in the Egyptian legal market has led
            us to enter an association with El Oteifi Law Office then in 1996 we
            entered into an association with one of the biggest law firms
            worldwide: Dentons.
          </p>
        </div>
        <img
          src={aboutbg2}
          alt="bg"
          style={{ width: "729px", height: "651px" }}
        />
      </Stack>
      <div style={{ position: "relative" }}>
        <img
          src={aboutbg3}
          alt="bg"
          style={{
            width: "100%",
            height: "100%", // Ensure the image covers the entire container
            objectFit: "cover",
          }}
        />
        <p
          style={{
            fontSize: 60,
            width: 350,
            fontWeight: 200,
            height: 146,
            position: "absolute",
            textAlign: "left",
            top: 88,
            left: 80,
            color: "white",
          }}
        >
          Over{" "}
          <span style={{ fontWeight: 100, fontStyle: "italic" }}>
            The Years
          </span>
        </p>
        <p
          style={{
            position: "absolute",
            fontSize: 18,
            fontWeight: 400,
            textAlign: "left",
            top: 278,
            left: 80,
            width: 690,
            color: "white",
          }}
        >
          Over the years our firm has achieved a remarkable success through
          providing a broad range of legal services for various reputable
          international, multinational, and domestic companies, banks, financial
          institutions, airlines, foreign governmental entities regarding
          activities, business, and other legal matters in Egypt.
        </p>
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

export default About;
