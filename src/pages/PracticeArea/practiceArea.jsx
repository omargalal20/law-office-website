import React from "react";
import practicebg from "../../assets/Images/PracticeArea/practice.svg";
import practicebg2 from "../../assets/Images/PracticeArea/practice2.svg";
import practicebg3 from "../../assets/Images/PracticeArea/Rectangle 36.svg";
import Stack from "@mui/material/Stack";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import BlackHeaderBar from "../../components/Layout/Header/blackHeader";
import img1 from "../../assets/Images/PracticeArea/Group 397.svg";
import img2 from "../../assets/Images/PracticeArea/Group 161.svg";
import img3 from "../../assets/Images/PracticeArea/Group 163.svg";
import img4 from "../../assets/Images/PracticeArea/Group 165.svg";
import img5 from "../../assets/Images/PracticeArea/Group 166.svg";
import img6 from "../../assets/Images/PracticeArea/Group 147.svg";
import img7 from "../../assets/Images/PracticeArea/Group 160.svg";
import img8 from "../../assets/Images/PracticeArea/Group 162.svg";
import img9 from "../../assets/Images/PracticeArea/Group 164 (1).svg";
import img10 from "../../assets/Images/PracticeArea/Group 391.png";
import { Container } from "@mui/material";

import practiceBG from "../../assets/Images/PracticeArea/nrd-c3tNiAb098I-unsplash 2 (1).svg";

const Practice = () => {
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
          src={practicebg}
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
            <BlackHeaderBar />
          </div>
        </div>
        <p
          style={{
            position: "absolute",
            top: 540,
            left: 80,
            right: 0,
            color: "black",
            fontSize: "50px",
            width: "802px",
            fontWeight: "400",
            height: "122px",
          }}
        >
          Shaping The Global Influence Through Our{" "}
          <span
            style={{
              fontWeight: "100",
              fontStyle: "italic",
            }}
          >
            Practice Areas
          </span>
        </p>
        <p
          style={{
            position: "absolute",
            top: 712,
            left: 80,
            right: 0,
            color: "black",
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
          src={practicebg2}
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
            width: 650,
            fontWeight: 300,
            height: 146,
            position: "absolute",
            textAlign: "left",
            top: 84,
            left: 94,
            color: "white",
          }}
        >
          Upholding Legal Excellence Through Effective{" "}
          <span style={{ fontWeight: 100, fontStyle: "italic" }}>
            Communication
          </span>
        </p>
        <p
          style={{
            position: "absolute",
            fontSize: 16,
            fontWeight: 400,
            textAlign: "left",
            top: 283,
            left: 94,
            width: 592,
            color: "white",
            fontFamily: "Montserrat",
          }}
        >
          We are committed to providing top-tier legal services, upholding the
          highest standards of professionalism, and fostering a culture of
          collaborative success. <br></br>
          <br></br> Our dedication to client satisfaction and our pursuit of
          justice are unwavering, ensuring that we not only meet but exceed
          expectations in every case we handle. <br></br>
          <br></br> With a forward-thinking approach and a team of expert legal
          professionals, we are constantly striving to make a meaningful impact
          in the lives of our clients and the community.
        </p>
      </div>
      <Container>
        <div
          style={{
            background: "white",
            height: "2556px",
          }}
        >
          <Stack direction={"column"} spacing={5}>
            <Stack direction={"column"} spacing={0}>
              <p
                style={{
                  fontSize: 100,
                  fontWeight: 100,
                  width: 482,
                  fontFamily: "Montserrat",
                  fontStyle: "italic",
                  marginBottom: "58px",
                  marginTop: "58px",
                }}
              >
                Industries
              </p>
              <ImageList
                sx={{ width: 1230, height: 237, marginBottom: "56px" }}
                cols={5}
                rowHeight={195}
              >
                <div>
                  <ImageListItem>
                    <img src={img1} alt="practice" />
                  </ImageListItem>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      width: 160,
                      fontFamily: "Montserrat",
                      fontStyle: "italic",
                      marginTop: "15px",
                      marginLeft: "75px",
                    }}
                  >
                    See what is ahead{" -"}
                  </p>
                </div>
                <div>
                  <ImageListItem>
                    <img src={img2} alt="practice" />
                  </ImageListItem>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      width: 160,
                      fontFamily: "Montserrat",
                      fontStyle: "italic",
                      marginTop: "15px",
                      marginLeft: "75px",
                    }}
                  >
                    See what is ahead{" -"}
                  </p>
                </div>
                <div>
                  <ImageListItem>
                    <img src={img3} alt="practice" />
                  </ImageListItem>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      width: 160,
                      fontFamily: "Montserrat",
                      fontStyle: "italic",
                      marginTop: "15px",
                      marginLeft: "75px",
                    }}
                  >
                    See what is ahead{" -"}
                  </p>
                </div>
                <div>
                  <ImageListItem>
                    <img src={img4} alt="practice" />
                  </ImageListItem>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      width: 160,
                      fontFamily: "Montserrat",
                      fontStyle: "italic",
                      marginTop: "15px",
                      marginLeft: "75px",
                    }}
                  >
                    See what is ahead{" -"}
                  </p>
                </div>
                <div>
                  <ImageListItem>
                    <img src={img5} alt="practice" />
                  </ImageListItem>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      width: 160,
                      fontFamily: "Montserrat",
                      fontStyle: "italic",
                      marginTop: "15px",
                      marginLeft: "75px",
                    }}
                  >
                    See what is ahead{" -"}
                  </p>
                </div>
              </ImageList>
              <ImageList
                sx={{ width: 1230, height: 237 }}
                cols={5}
                rowHeight={195}
              >
                <div>
                  <ImageListItem>
                    <img src={img6} alt="practice" />
                  </ImageListItem>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      width: 160,
                      fontFamily: "Montserrat",
                      fontStyle: "italic",
                      marginTop: "15px",
                      marginLeft: "75px",
                    }}
                  >
                    See what is ahead{" -"}
                  </p>
                </div>
                <div>
                  <ImageListItem>
                    <img src={img7} alt="practice" />
                  </ImageListItem>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      width: 160,
                      fontFamily: "Montserrat",
                      fontStyle: "italic",
                      marginTop: "15px",
                      marginLeft: "75px",
                    }}
                  >
                    See what is ahead{" -"}
                  </p>
                </div>
                <div>
                  <ImageListItem>
                    <img src={img8} alt="practice" />
                  </ImageListItem>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      width: 160,
                      fontFamily: "Montserrat",
                      fontStyle: "italic",
                      marginTop: "15px",
                      marginLeft: "75px",
                    }}
                  >
                    See what is ahead{" -"}
                  </p>
                </div>
                <div>
                  <ImageListItem>
                    <img src={img9} alt="practice" />
                  </ImageListItem>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      width: 160,
                      fontFamily: "Montserrat",
                      fontStyle: "italic",
                      marginTop: "15px",
                      marginLeft: "75px",
                    }}
                  >
                    See what is ahead{" -"}
                  </p>
                </div>
                <div>
                  <ImageListItem>
                    <img src={img10} alt="practice" />
                  </ImageListItem>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      width: 160,
                      fontFamily: "Montserrat",
                      fontStyle: "italic",
                      marginTop: "15px",
                      marginLeft: "75px",
                    }}
                  >
                    See what is ahead{" -"}
                  </p>
                </div>
              </ImageList>
            </Stack>
            <Stack direction={"column"} spacing={0}>
              <p
                style={{
                  fontSize: 100,
                  fontWeight: 100,
                  width: 482,
                  fontFamily: "Montserrat",
                  fontStyle: "italic",
                  marginBottom: "58px",
                }}
              >
                Expertise
              </p>
              <ImageList
                sx={{ width: 1230, height: 237, marginBottom: "56px" }}
                cols={5}
                rowHeight={195}
              >
                <div>
                  <ImageListItem>
                    <img src={img1} alt="practice" />
                  </ImageListItem>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      width: 160,
                      fontFamily: "Montserrat",
                      fontStyle: "italic",
                      marginTop: "15px",
                      marginLeft: "75px",
                    }}
                  >
                    See what is ahead{" -"}
                  </p>
                </div>
                <div>
                  <ImageListItem>
                    <img src={img2} alt="practice" />
                  </ImageListItem>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      width: 160,
                      fontFamily: "Montserrat",
                      fontStyle: "italic",
                      marginTop: "15px",
                      marginLeft: "75px",
                    }}
                  >
                    See what is ahead{" -"}
                  </p>
                </div>
                <div>
                  <ImageListItem>
                    <img src={img3} alt="practice" />
                  </ImageListItem>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      width: 160,
                      fontFamily: "Montserrat",
                      fontStyle: "italic",
                      marginTop: "15px",
                      marginLeft: "75px",
                    }}
                  >
                    See what is ahead{" -"}
                  </p>
                </div>
                <div>
                  <ImageListItem>
                    <img src={img4} alt="practice" />
                  </ImageListItem>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      width: 160,
                      fontFamily: "Montserrat",
                      fontStyle: "italic",
                      marginTop: "15px",
                      marginLeft: "75px",
                    }}
                  >
                    See what is ahead{" -"}
                  </p>
                </div>
                <div>
                  <ImageListItem>
                    <img src={img5} alt="practice" />
                  </ImageListItem>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      width: 160,
                      fontFamily: "Montserrat",
                      fontStyle: "italic",
                      marginTop: "15px",
                      marginLeft: "75px",
                    }}
                  >
                    See what is ahead{" -"}
                  </p>
                </div>
              </ImageList>
              <ImageList
                sx={{ width: 1230, height: 237 }}
                cols={5}
                rowHeight={195}
              >
                <div>
                  <ImageListItem>
                    <img src={img6} alt="practice" />
                  </ImageListItem>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      width: 160,
                      fontFamily: "Montserrat",
                      fontStyle: "italic",
                      marginTop: "15px",
                      marginLeft: "75px",
                    }}
                  >
                    See what is ahead{" -"}
                  </p>
                </div>
                <div>
                  <ImageListItem>
                    <img src={img7} alt="practice" />
                  </ImageListItem>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      width: 160,
                      fontFamily: "Montserrat",
                      fontStyle: "italic",
                      marginTop: "15px",
                      marginLeft: "75px",
                    }}
                  >
                    See what is ahead{" -"}
                  </p>
                </div>
                <div>
                  <ImageListItem>
                    <img src={img8} alt="practice" />
                  </ImageListItem>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      width: 160,
                      fontFamily: "Montserrat",
                      fontStyle: "italic",
                      marginTop: "15px",
                      marginLeft: "75px",
                    }}
                  >
                    See what is ahead{" -"}
                  </p>
                </div>
                <div>
                  <ImageListItem>
                    <img src={img9} alt="practice" />
                  </ImageListItem>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      width: 160,
                      fontFamily: "Montserrat",
                      fontStyle: "italic",
                      marginTop: "15px",
                      marginLeft: "75px",
                    }}
                  >
                    See what is ahead{" -"}
                  </p>
                </div>
                <div>
                  <ImageListItem>
                    <img src={img10} alt="practice" />
                  </ImageListItem>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      width: 160,
                      fontFamily: "Montserrat",
                      fontStyle: "italic",
                      marginTop: "15px",
                      marginLeft: "75px",
                    }}
                  >
                    See what is ahead{" -"}
                  </p>
                </div>
              </ImageList>
            </Stack>
            <p
              style={{
                position: "absolute",
                fontSize: "50px",
                top: 3040,
                left: 83,
                width: 389,
                fontWeight: 200,
              }}
            >
              Main{" "}
              <span style={{ fontWeight: 100, fontFamily: "Montserrat" }}>
                Achievements
              </span>
            </p>
            <p
              style={{
                position: "absolute",
                fontSize: "30px",
                top: 3220,
                left: 83,
                width: 600,
                fontWeight: 400,
              }}
            >
              We stand resiliently In Our Notable Achievements{" "}
              <span
                style={{
                  fontWeight: 100,
                  fontFamily: "Montserrat",
                  fontStyle: "italic",
                }}
              >
                Around The Globe
              </span>
            </p>
            <img
              src={practiceBG}
              alt="bg"
              style={{
                width: 651,
                height: 594,
                position: "absolute",
                top: 3350,
                left: 83,
              }}
            />
          </Stack>
        </div>
      </Container>
      <Stack direction={"row"} spacing={5}>
        <div
          style={{
            height: 223,
            width: "100%",
            background: "#09283F",
            position: "relative", // Add position relative to the outer div
          }}
        >
          <div style={{ height: "223px", position: "relative" }}>
            <img
              src={practicebg3}
              alt="bg"
              style={{ width: "842px", height: "223px" }}
            />
            <div
              style={{
                height: 107,
                width: "404px",
                background: "#702082",
                position: "absolute",
                top: 0, // Position from the top
                left: 841, // Position from the left
              }}
            ></div>
            <p
              style={{
                color: "white",
                fontSize: "30px",
                top: 62, // Position from the top
                left: 841, // Position from the left
                position: "absolute",
                width: "340px",
                marginLeft: "16px",
                fontStyle: "Montserrat",
              }}
            >
              For Personalized Legal{" "}
              <span
                style={{
                  color: "white",
                  fontSize: "40px",
                  fontWeight: 100,
                }}
              >
                Excellence
              </span>
            </p>
            <p
              style={{
                color: "white",
                fontWeight: 100,
                fontSize: 18,
                width: "99px",
                position: "absolute",
                bottom: 16, // Position from the top
                right: 24, // Position from the left
              }}
            >
              Contact Us
            </p>
          </div>
        </div>
        <div style={{ position: "absolute", left: 791, top: 3380 }}>
          <p
            style={{
              width: "259px",
              fontSize: 30,
              fontWeight: 400,
              marginBottom: "20px",
              fontFamily: "Montserrat",
            }}
          >
            Consistent Legal{" "}
            <span
              style={{
                fontWeight: 100,
                fontStyle: "italic",
                fontFamily: "Montserrat",
              }}
            >
              Excellence
            </span>
          </p>
          <p
            style={{
              width: "567px",
              fontSize: 18,
              marginBottom: "50px",
              fontFamily: "Montserrat",
            }}
          >
            Recognized by industry bodies for our outstanding legal services,
            demonstrating our commitment to upholding the highest standards in
            every case.
          </p>
          <p
            style={{
              width: "270px",
              fontSize: 30,
              marginBottom: "20px",
              fontFamily: "Montserrat",
            }}
          >
            High-Profile Case{" "}
            <span
              style={{
                fontWeight: 100,
                fontStyle: "italic",
                fontFamily: "Montserrat",
              }}
            >
              Successes
            </span>
          </p>
          <p
            style={{
              width: "567px",
              fontSize: 18,
              marginBottom: "50px",
              fontFamily: "Montserrat",
            }}
          >
            A track record of winning complex, high-stakes cases, showcasing our
            legal acumen and strategic expertise
          </p>
          <p
            style={{
              width: "268px",
              fontSize: 30,
              marginBottom: "20px",
              fontFamily: "Montserrat",
            }}
          >
            Innovative Legal{" "}
            <span
              style={{
                fontWeight: 100,
                fontStyle: "italic",
                fontFamily: "Montserrat",
              }}
            >
              Solutions
            </span>
          </p>
          <p
            style={{
              width: "567px",
              fontSize: 18,
              marginBottom: "50px",
              fontFamily: "Montserrat",
            }}
          >
            Pioneering in adopting new legal technologies and approaches,
            leading to more efficient and effective legal services
          </p>
        </div>
      </Stack>
    </Stack>
  );
};

export default Practice;
