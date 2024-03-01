import React, { useState } from "react";
import { Grid, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Stack from "@mui/material/Stack";
import EastIcon from "@mui/icons-material/East";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import HeaderBar from "../../components/Layout/Header/header";
import landOne from "../../assets/Images/Landing/image1.jpg";
import landTwo from "../../assets/Images/Landing/main2.jpg";
import landThree from "../../assets/Images/Landing/main3.jpg";
import landing5 from "../../assets/Images/Landing/image5.jpg";
import landing6 from "../../assets/Images/Landing/landing6.jpg";
import landing7 from "../../assets/Images/Landing/landing7.jpg";
import mobileOne from "../../assets/Images/Misc/mobile1.jpg";
import mobileTwo from "../../assets/Images/Misc/mob2.svg";
import bx1 from "../../assets/Images/Landing/box1.jpg";
import bx2 from "../../assets/Images/Landing/box2.jpg";
import bx3 from "../../assets/Images/Landing/box3.svg";
import bx4 from "../../assets/Images/Landing/box4.svg";
import bx5 from "../../assets/Images/Landing/box5.svg";
import bx6 from "../../assets/Images/Misc/img.svg";
import bx7 from "../../assets/Images/Misc/Rectangle 18.svg";
import "./landing.css";

const Landing = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);

  return isSmallScreen ? (
    <Stack direction={"column"} spacing={0} mb={2}>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img
          src={mobileOne}
          alt="Background"
          style={{ width: "100%", height: "682px" }}
        />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
          <HeaderBar />
        </div>
        <p
          style={{
            position: "absolute",
            top: "25%",
            left: "5%",
            right: "5%",
            color: "white",
            fontSize: "clamp(20px, 5vw, 50px)", // Responsive font size
            width: "90%",
            fontWeight: "300",
            textAlign: "center",
          }}
        >
          Committed Legal Advocacy with Tailored{" "}
          <span
            style={{
              fontStyle: "italic",
              fontWeight: "100",
            }}
          >
            Excellence
          </span>
        </p>

        <p
          style={{
            position: "absolute",
            top: "45%",
            left: "5%",
            right: "5%",
            color: "white",
            fontSize: "clamp(14px, 3vw, 18px)", // Responsive font size
            width: "90%",
            fontStyle: "italic",
            fontWeight: "400",
            fontFamily: "Montserrat",
            textAlign: "center",
          }}
        >
          With a seasoned team of professionals, we navigate the complexities of
          the legal landscape, ensuring steadfast advocacy for your unique
          needs.
        </p>
      </div>
      {/* New div with half and half color */}
      <div
        style={{
          height: "176px", // Auto height for responsiveness
          background: "white",
          textAlign: "right", // Align text to right for smaller screens
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
          width: "100%",
        }}
      >
        <p
          style={{
            color: "black",
            fontFamily: "Montserrat",
            fontSize: "30px", // Responsive font size
            width: "100%",
            lineHeight: "36.57px",
            fontWeight: "300",
            textAlign: "center", // Adjust spacing for smaller screens
          }}
        >
          Dedicated to Conducting Ethical and Sustainable Business Practices.
        </p>
      </div>
      <div
        style={{
          height: "400px", // Auto height for responsiveness
          background: "#09283F",
          textAlign: "right", // Align text to right for smaller screens
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
          width: "100%",
        }}
      >
        <div
          style={{
            paddingLeft: "40px",
            color: "white",
            fontSize: "40px", // Responsive font size
            width: "100%",
            textAlign: "left",
            maxHeight: "522px", // Adjust to match height of blue area minus padding
            overflowY: "auto", // Add scrollbar if content exceeds height
          }}
        >
          <p style={{ fontWeight: "700" }}>
            <strong>3,000+</strong>
          </p>
          <p style={{ fontSize: "20px", fontWeight: 300 }}>Law Suite</p>
          <p style={{ fontWeight: "700" }}>
            <strong>22+</strong>
          </p>
          <p style={{ fontSize: "20px", fontWeight: 300 }}>Practice Areas</p>
          <p style={{ fontWeight: "700" }}>
            <strong>50+</strong>
          </p>
          <p style={{ fontSize: "20px", fontWeight: 300 }}>Lawyer</p>
          <p style={{ fontWeight: "700" }}>
            <strong>40+</strong>
          </p>
          <p style={{ fontSize: "20px", fontWeight: 300 }}>Years</p>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <img
          src={landTwo}
          alt="Background"
          style={{ width: "100%", height: "247px", objectFit: "cover" }}
        />
        <p
          style={{
            position: "absolute",
            top: "30%",
            color: "white",
            fontSize: "30px", // Responsive font size
            fontFamily: "Montserrat",
            width: "100%",
            fontWeight: "200",
            lineHeight: "36.57px", // Responsive line height
            textAlign: "center",
          }}
        >
          Understanding The Legal Scene
        </p>
      </div>
      <div style={{ position: "relative" }}>
        <img
          src={mobileTwo}
          alt="Background"
          style={{ width: "100%", height: "330px", objectFit: "cover" }}
        />
        <p
          style={{
            position: "absolute",
            top: "30%",
            left: "5%",
            right: "5%",
            color: "white",
            fontSize: "13px", // Responsive font size
            width: "90%",
            textAlign: "center",
            lineHeight: "15.85px", // Responsive line height
            fontFamily: "Montserrat",
          }}
        >
          Navigating Egypt's Evolving Data Protection Landscape: A Focus on
          Privacy Compliance
        </p>
        <p
          style={{
            position: "absolute",
            top: "50%",
            left: "5%",
            right: "5%",
            color: "white",
            fontSize: "9px", // Responsive font size
            width: "90%",
            textAlign: "center",
            lineHeight: "10.97px", // Responsive line height
            fontFamily: "Montserrat",
          }}
        >
          In the dynamic realm of data protection, Egypt is set to unveil new
          regulations that will reshape the landscape and intensify the
          spotlight on privacy compliance.
        </p>
        <Stack direction={"row"} spacing={3}>
          <p
            style={{
              position: "absolute",
              top: "65%",
              color: "white",
              fontSize: "20px", // Responsive font size
              width: "100%",
              textAlign: "center",
              lineHeight: "24.38px", // Responsive line height
              fontFamily: "Montserrat",
              fontStyle: "italic",
            }}
          >
            See what is ahead
            <IconButton>
              <EastIcon
                style={{
                  color: "white",
                  fontSize: "clamp(14px, 3vw, 20px)", // Responsive font size
                }}
              />
            </IconButton>
          </p>
        </Stack>
      </div>
    </Stack>
  ) : (
    <Stack direction={"column"} spacing={0}>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "975px", // Adjust the height as needed
        }}
      >
        <img
          src={landOne}
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
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity as needed
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
            <HeaderBar />
          </div>
        </div>
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
          Committed Legal Advocacy with Tailored{" "}
          <span
            style={{
              fontStyle: "italic",
              fontWeight: "100",
              lineHeight: "60.95px",
            }}
          >
            Excellence
          </span>
        </p>

        <p
          style={{
            position: "absolute",
            top: 650,
            left: 85,
            right: 0,
            color: "white",
            fontSize: "18px",
            width: "450px",
            fontStyle: "italic",
            fontWeight: "400",
            fontFamily: "Montserrat",
          }}
        >
          With a seasoned team of professionals, we navigate the complexities of
          the legal landscape, ensuring steadfast advocacy for your unique
          needs.
        </p>
      </div>
      {/* New div with half and half color */}
      <Stack direction={"row"} spacing={0}>
        <div
          style={{
            position: "relative",
            background: "white",
            height: 572,
            width: "50%",
          }}
        >
          <p
            style={{
              position: "absolute",
              color: "black",
              fontSize: "50px",
              maxWidth: "645px",
              fontWeight: "300",
              textAlign: "right",
              bottom: 50,
            }}
          >
            Dedicated to Conducting Ethical and Sustainable Business Practices.
          </p>
        </div>
        <div
          style={{
            position: "relative",
            background: "#09283F",
            height: 572,
            width: "50%",
            color: "white",
            fontSize: "40px",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "75px",
            paddingTop: "75px",
          }}
        >
          <p style={{ fontWeight: "700" }}>
            <strong>40,000+</strong>
          </p>
          <p style={{ fontSize: "20px", fontWeight: 300 }}>Law Suite</p>
          <p style={{ fontWeight: "700" }}>
            <strong>22+</strong>
          </p>
          <p style={{ fontSize: "20px", fontWeight: 300 }}>Practice Areas</p>
          <p style={{ fontWeight: "700" }}>
            <strong>50+</strong>
          </p>
          <p style={{ fontSize: "20px", fontWeight: 300 }}>Lawyer</p>
          <p style={{ fontWeight: "700" }}>
            <strong>40+</strong>
          </p>
          <p style={{ fontSize: "20px", fontWeight: 300 }}>Years</p>
        </div>
      </Stack>
      <div style={{ position: "relative" }} class="image-container">
        <img
          src={landTwo}
          alt="Background-one"
          style={{ width: "100%", height: "509px", objectFit: "cover" }}
        />
        <div class="overlay"></div>
        <p
          style={{
            position: "absolute",
            top: 98,
            left: 85,
            right: 0,
            color: "white",
            fontSize: "50px",
            fontFamily: "Montserrat",
            width: "450px",
            fontWeight: "200",
            lineHeight: "73.14px",
          }}
        >
          Understanding The Legal Scene
        </p>
        <p
          class="text"
          style={{
            position: "absolute",
            top: 244,
            left: 80,
            textAlign: "left",
            height: "37px",
            right: 0,
            color: "white",
            fontSize: "30px",
            fontFamily: "Montserrat",
            width: "260px",
            fontWeight: "200",
          }}
        >
          Recent Insights
        </p>
      </div>
      <div
        style={{ position: "relative" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={landThree}
          alt="Background"
          style={{ width: "100%", height: "509px", objectFit: "cover" }}
        />
        <p
          style={{
            position: "absolute",
            top: 126,
            left: 987,
            right: 0,
            color: "white",
            fontSize: "26px",
            width: "400px",
            textAlign: "left",
            lineHeight: "31.69px",
            fontFamily: "Montserrat",
          }}
        >
          Navigating Egypt's Evolving Data Protection Landscape: A Focus on
          Privacy Compliance
        </p>
        <p
          style={{
            position: "absolute",
            top: 230,
            left: 987,
            right: 0,
            color: "white",
            fontSize: "17px",
            width: "400px",
            textAlign: "left",
            lineHeight: "20.72px",
            fontFamily: "Montserrat",
          }}
        >
          In the dynamic realm of data protection, Egypt is set to unveil new
          regulations that will reshape the landscape and intensify the
          spotlight on privacy compliance.
        </p>
        <div
          style={{
            position: "absolute",
            top: 320,
            left: 987,
            right: 0,
            color: "white",
            fontSize: "20px",
            lineHeight: "24.38px",
            fontFamily: "Montserrat",
            fontStyle: "italic",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ marginRight: "25px" }}>See what is ahead</span>
          <div
            style={{
              transition: "transform 0.3s ease",
              transform: isHovered ? "translateX(20px)" : "translateX(0)",
            }}
          >
            <EastIcon />
          </div>
        </div>
      </div>
      <div
        style={{ position: "relative" }}
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
      >
        <img
          src={landing5}
          alt="Background"
          style={{ width: "100%", height: "490px", objectFit: "cover" }}
        />
        <p
          style={{
            position: "absolute",
            top: 126,
            left: 161,
            right: 0,
            color: "white",
            fontSize: "26px",
            width: "400px",
            textAlign: "right",
            lineHeight: "31.69px",
            fontFamily: "Montserrat",
          }}
        >
          COP27 and COP28: A Roadmap for Egypt and UAE's Energy Transition
          Commitment
        </p>
        <p
          style={{
            position: "absolute",
            top: 270,
            left: 161,
            right: 0,
            color: "white",
            fontSize: "17px",
            width: "400px",
            textAlign: "right",
            lineHeight: "20.72px",
            fontFamily: "Montserrat",
          }}
        >
          As global leaders convene for COP27 and COP28, Egypt and the UAE stand
          at the forefront of a pivotal moment in their commitment to energy
          transition.
        </p>
        <div
          style={{
            position: "absolute",
            top: 370,
            left: 161,
            right: 0,
            color: "white",
            fontSize: "20px",
            lineHeight: "24.38px",
            fontFamily: "Montserrat",
            fontStyle: "italic",
            display: "flex",
            alignItems: "right",
          }}
        >
          <span style={{ marginRight: "25px" }}>See what is ahead</span>
          <div
            style={{
              transition: "transform 0.3s ease",
              transform: isHovered2 ? "translateX(20px)" : "translateX(0)",
            }}
          >
            <EastIcon />
          </div>
        </div>
      </div>
      <div
        style={{ position: "relative" }}
        onMouseEnter={() => setIsHovered3(true)}
        onMouseLeave={() => setIsHovered3(false)}
        class="image-container"
      >
        <img
          src={landing6}
          alt="Background"
          style={{ width: "100%", height: "509px", objectFit: "cover" }}
        />
        <div class="overlay"></div>
        <p
          style={{
            position: "absolute",
            top: 126,
            left: 987,
            right: 0,
            color: "white",
            fontSize: "26px",
            width: "400px",
            textAlign: "left",
            lineHeight: "31.69px",
            fontFamily: "Montserrat",
          }}
        >
          Powering the Future: Egypt's Ambitious Renewable Energy Goal for 2030
        </p>
        <p
          style={{
            position: "absolute",
            top: 230,
            left: 987,
            right: 0,
            color: "white",
            fontSize: "17px",
            width: "400px",
            textAlign: "left",
            lineHeight: "20.72px",
            fontFamily: "Montserrat",
          }}
        >
          In a bold stride towards sustainable energy practices, Egypt has set
          an ambitious target to generate 42% of its power from renewable
          sources by 2030.
        </p>
        <div
          style={{
            position: "absolute",
            top: 320,
            left: 987,
            right: 0,
            color: "white",
            fontSize: "20px",
            lineHeight: "24.38px",
            fontFamily: "Montserrat",
            fontStyle: "italic",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ marginRight: "25px" }}>See what is ahead</span>
          <div
            style={{
              transition: "transform 0.3s ease",
              transform: isHovered3 ? "translateX(20px)" : "translateX(0)",
            }}
          >
            <EastIcon />
          </div>
        </div>
      </div>
      <div
        style={{ position: "relative", background: "white", height: "1300px" }}
      >
        <p
          style={{
            width: "1100px",
            fontSize: "80px",
            fontFamily: "Montserrat",
            fontWeight: 200,
            lineHeight: "97.52px",
            height: "196px",
            textAlign: "left",
            padding: 100,
          }}
        >
          Leading The Legal Landscape
        </p>

        <Stack direction={"column"} spacing={5}>
          <Stack
            direction={"row"}
            spacing={0}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "180px",
            }}
          >
            <img
              src={bx1}
              alt="stack"
              style={{
                background: "linear-gradient(to bottom, white 50%, black 50%)",
                width: "627px",
                height: "473px",
              }}
            />
            <img
              src={bx2}
              alt="stack"
              style={{
                background: "linear-gradient(to bottom, white 50%, black 50%)",
                width: "627px",
                height: "473px",
              }}
            />
          </Stack>
          <Stack
            direction={"row"}
            spacing={0}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={bx3}
              alt="stack"
              style={{
                width: "411px",
                height: "315px",
              }}
            />
            <img
              src={bx4}
              alt="stack"
              style={{
                width: "411px",
                height: "315px",
              }}
            />
            <img
              src={bx5}
              alt="stack"
              style={{
                width: "411px",
                height: "315px",
              }}
            />
          </Stack>
        </Stack>
      </div>
      <div style={{ position: "relative" }}>
        <img
          src={landing7}
          alt="Background"
          style={{ width: "100%", height: "490px", objectFit: "cover" }}
        />
        <p
          style={{
            position: "absolute",
            top: 65,
            left: 121,
            color: "white",
            fontSize: "50px",
            fontFamily: "Montserrat",
            fontWeight: 400,
            textAlign: "left",
            width: "249px",
            height: "122px",
          }}
        >
          We Stand{" "}
          <span style={{ fontStyle: "italic", fontWeight: 100 }}>
            Resiliently
          </span>
        </p>
        <p
          style={{
            position: "absolute",
            top: 211,
            left: 121,
            color: "white",
            fontSize: "20px",
            fontFamily: "Montserrat",
            fontWeight: 100,
            textAlign: "left",
            width: "403px",
            height: "48px",
            fontStyle: "italic",
          }}
        >
          Conducting operations globally within diverse local markets.
        </p>
        <p
          style={{
            color: "white",
            textAlign: "left",
            top: 280,
            position: "absolute",
            left: 121,
            fontSize: 15,
            display: "flex",
            alignItems: "center",
            transition: "transform 0.3s", // Apply transition to transform property
            cursor: "pointer",
          }}
          onMouseEnter={() => setIsHovered6(true)}
          onMouseLeave={() => setIsHovered6(false)}
        >
          <span
            style={{
              marginRight: isHovered6 ? "20px" : "10px",
              transition: "margin-right 0.3s",
            }}
          >
            <strong>Find Us</strong>
          </span>
          <ChangeHistoryIcon
            style={{
              color: "white",
              transform: isHovered6
                ? "translateX(-5px) rotateZ(90deg)"
                : "rotateZ(90deg)", // Adjust transform on hover
              width: "15px",
              transition: "transform 0.3s", // Apply transition to transform property
            }}
          />
        </p>
      </div>
      <div
        style={{ position: "relative", background: "white", height: "2000px" }}
      >
        <p
          style={{
            width: "1100px",
            height: "244px",
            fontSize: 100,
            fontWeight: 400,
            fontFamily: "Montserrat",
            paddingLeft: "80px",
            paddingTop: "47px",
          }}
        >
          Standing Strong for{" "}
          <span
            style={{
              fontStyle: "italic",
              fontWeight: 100,
              fontFamily: "Montserrat",
            }}
          >
            40 Years
          </span>
        </p>
        <Grid container style={{ padding: "80px" }}>
          <Stack direction={"row"} spacing={5} style={{ marginTop: 80 }}>
            <img
              src={bx7}
              alt="back"
              style={{ width: "518px", height: "651px" }}
            />
            <div style={{ width: "708px" }}>
              <p>
                In 1981, a seed of legal excellence was planted in the heart of
                Cairo when Mr. Amal Afifi Dawood founded the Afifi Law Office.
                From the very beginning, integrity, professionalism, and
                unwavering commitment to superior legal service were woven into
                the firm's DNA. This dedication bore fruit, fostering a
                reputation for exceptional legal counsel that swiftly
                transcended borders.
              </p>
              <p style={{ marginTop: "40px" }}>
                Within the vibrant tapestry of the Egyptian legal market, Afifi
                Law Office emerged as a shining thread. Their expertise and
                unwavering principles resonated with a diverse clientele,
                including reputable international and multinational companies,
                banks, financial institutions, and even airlines. This stellar
                track record paved the way for momentous collaborations. First,
                in 1996, Afifi Law Office joined forces with El Oteifi Law
                Office, uniting two powerhouses of legal brilliance.
              </p>
              <p style={{ marginTop: "40px" }}>
                But the story didn't end there. Afifi Law Office's ambition,
                like its legal prowess, knew no bounds. In 1996, they took
                another pivotal step, entering into an association with Dentons,
                one of the largest and most respected law firms on the global
                stage. This strategic alliance propelled Afifi Law Office onto
                the world stage, granting them access to a vast network of legal
                expertise and the ability to cater to the complex needs of
                clients operating across international frontiers.
              </p>
              <p style={{ marginTop: "40px" }}>
                Today, Afifi Law Office stands as a testament to the enduring
                power of vision and relentless pursuit of excellence. Beyond its
                Cairo roots, it has blossomed into a legal force to be reckoned
                with, seamlessly navigating the intricate landscapes of both
                regional and global legal ecosystems. Its unwavering commitment
                to quality, coupled with its strategic partnerships, continues
                to attract a diverse clientele seeking solutions that transcend
                borders and deliver unparalleled results.
              </p>
            </div>
          </Stack>
        </Grid>
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

export default Landing;
