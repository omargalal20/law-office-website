import React from "react";
import contactbg from "../../assets/Images/Contact/contact.svg";
import Stack from "@mui/material/Stack";
import HeaderBar from "../../components/Layout/Header/header";
import { Input, Typography } from "antd";
import CloseIcon from "@mui/icons-material/Close";
import map from "../../assets/Images/Contact/Rectangle.png";
import line from "../../assets/Images/Misc/Line 7.png";

const Contact = () => {
  return (
    <Stack direction={"column"} spacing={4}>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "975px", // Adjust the height as needed
        }}
      >
        <img
          src={contactbg}
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
            top: 424,
            left: 80,
            right: 0,
            color: "white",
            fontSize: "50px",
            width: "800px",
            fontWeight: "500",
          }}
        >
          Contact Us
        </p>
        <p
          style={{
            position: "absolute",
            top: 497,
            left: 80,
            right: 0,
            color: "white",
            fontSize: "40px",
            width: "817px",
            fontWeight: "100",
            fontFamily: "Montserrat",
          }}
        >
          Thank you for considering Afifi Law Office
        </p>
      </div>
      <div>
        <p
          style={{
            fontSize: "50px",
            width: "969px",
            height: "122px",
            paddingLeft: "80px",
            marginBottom: 78,
            fontWeight: 400,
          }}
        >
          For Any Other Questions Or Requests, Kindly Fill Out{" "}
          <span
            style={{
              fontStyle: "italic",
              fontWeight: 100,
            }}
          >
            The Form Below
          </span>
        </p>
      </div>
      <Stack direction={"row"} spacing={8}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "79px",
          }}
        >
          <Typography.Title
            style={{
              fontSize: "25px",
              fontFamily: "Montserrat",
              fontWeight: 400,
              marginTop: "20px",
            }}
          >
            Name
          </Typography.Title>
          <Input
            style={{
              borderColor: "#09283F",
              width: "648px",
              height: "64px",
              border: "2px solid",
            }}
          />
          <Typography.Title
            style={{
              fontSize: "25px",
              fontFamily: "Montserrat",
              fontWeight: 400,
              marginTop: "20px",
            }}
          >
            Email Address
          </Typography.Title>
          <Input
            style={{
              borderColor: "#09283F",
              width: "648px",
              height: "64px",
              border: "2px solid",
            }}
          />
          <Typography.Title
            style={{
              fontSize: "25px",
              fontFamily: "Montserrat",
              fontWeight: 400,
              marginTop: "20px",
            }}
          >
            Nearest Office
          </Typography.Title>
          <Input
            style={{
              borderColor: "#09283F",
              width: "648px",
              height: "64px",
              border: "2px solid",
            }}
          />
          <Typography.Title
            style={{
              fontSize: "25px",
              fontFamily: "Montserrat",
              fontWeight: 400,
              marginTop: "20px",
            }}
          >
            Expertise
          </Typography.Title>
          <Input
            style={{
              borderColor: "#09283F",
              width: "648px",
              height: "64px",
              border: "2px solid",
            }}
          />
          <Typography.Title
            style={{
              fontSize: "25px",
              fontFamily: "Montserrat",
              fontWeight: 400,
              marginTop: "20px",
            }}
          >
            Enquiry Type
          </Typography.Title>
          <Input
            style={{
              borderColor: "#09283F",
              width: "648px",
              height: "64px",
              border: "2px solid",
            }}
          />
          <Typography.Title
            style={{
              fontSize: "25px",
              fontFamily: "Montserrat",
              fontWeight: 400,
              marginTop: "20px",
            }}
          >
            Nearest Office
          </Typography.Title>
          <Input
            style={{
              borderColor: "#09283F",
              width: "648px",
              height: "64px",
              border: "2px solid",
            }}
          />
          <Typography.Title
            style={{
              fontSize: "25px",
              fontFamily: "Montserrat",
              fontWeight: 400,
              marginTop: "20px",
            }}
          >
            Your Message
          </Typography.Title>
          <Input
            style={{
              borderColor: "#09283F",
              width: "648px",
              height: "131px",
              border: "2px solid",
            }}
          />
        </div>
        <div>
          <p
            style={{
              fontWeight: 400,
              fontSize: "40px",
              fontFamily: "Montserrat",
            }}
          >
            Cairo, Egypt
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div></div>
            <div>
              <CloseIcon style={{ width: "30px", height: "30px" }} />
            </div>
          </div>
          <div>
            <p
              style={{
                fontWeight: 400,
                fontSize: "20px",
                fontFamily: "Montserrat",
              }}
            >
              6 Salah El Din St. Zamalek
            </p>
            <p
              style={{
                fontWeight: 400,
                fontSize: "20px",
                fontFamily: "Montserrat",
              }}
            >
              11211 Cairo
            </p>
            <p
              style={{
                fontWeight: 400,
                fontSize: "20px",
                fontFamily: "Montserrat",
              }}
            >
              Egypt
            </p>
            <p
              style={{
                fontWeight: 400,
                fontSize: "20px",
                fontFamily: "Montserrat",
              }}
            >
              T +20 2 2735 4010F +20 2736 7717
            </p>
            <p
              style={{
                fontWeight: 400,
                fontSize: "20px",
                fontFamily: "Montserrat",
              }}
            >
              info@afifioffice.com
            </p>
            <img src={line} alt="line" style={{marginTop : 23}}/>
            <img src={map} alt="map" style={{marginTop : 50}}/>
          </div>
        </div>
      </Stack>
    </Stack>
  );
};

export default Contact;
