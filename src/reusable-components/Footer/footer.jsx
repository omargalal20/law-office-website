import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { MDBInput } from "mdb-react-ui-kit";
import { MDBBtn } from "mdb-react-ui-kit";
import logoMain from "../assets/logo-main9 2.svg";
import fbIcon from "../assets/facebook.svg";
import xIcon from "../assets/x.svg";
import { TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export default function Footer() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));

  return isSmallScreen ? (
    <MDBFooter bgColor="light">
      <section className="">
        <Stack direction="row" spacing={2} mb={2}>
          <Stack direction="column" spacing={2} pl={5}>
            <div>
              <h6 className="text-uppercase fw-bold mb-2">
                <img
                  src={logoMain}
                  alt="Icon"
                  fluid
                  className="d-inline-block mr-0 img-fluid"
                  style={{ width: "50%" }}
                />
              </h6>
              <p
                className="d-inline-block mr-0"
                style={{
                  fontFamily: "Montserrat",
                  fontStyle: "italic",
                  fontWeight: "400",
                  fontSize: "6px",
                  lineHeight: "7.31px",
                  width: "75%",
                  textAlign: "left",
                }}
              >
                Delivering ingenious legal resolutions for the most intricate
                contentious and commercial challenges.
              </p>
            </div>
            <div>
              <p
                style={{
                  textDecoration: "underline",
                  color: "black",
                  fontSize: "10px",
                }}
              >
                <strong>Navigation</strong>
              </p>
              <p>
                <a
                  href="#!"
                  style={{
                    fontStyle: "italic",
                    color: "black",
                    fontSize: "10px",
                  }}
                >
                  Home
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  style={{
                    fontStyle: "italic",
                    color: "black",
                    fontSize: "10px",
                  }}
                >
                  Practices
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  style={{
                    fontStyle: "italic",
                    color: "black",
                    fontSize: "10px",
                  }}
                >
                  Our Story
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  style={{
                    fontStyle: "italic",
                    color: "black",
                    fontSize: "10px",
                  }}
                >
                  Careers
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  style={{
                    fontStyle: "italic",
                    color: "black",
                    fontSize: "10px",
                  }}
                >
                  Team
                </a>
              </p>
            </div>
          </Stack>
          <Stack direction="column" spacing={2} pr={2}>
            <div>
              <p
                className="mb-4"
                style={{
                  textDecoration: "underline",
                  color: "black",
                  fontSize: "10px",
                }}
              >
                <strong>Join a Newsletter</strong>
              </p>
              <Stack direction="row" spacing={2}>
                <div className="col-md-8">
                  <TextField
                    label="Enter Your Email"
                    type="text"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true, // To keep the label floating when there's input
                      style: { textAlign: "center" }, // Center-align the label
                      size: "small",
                    }}
                    InputProps={{
                      style: {
                        borderRadius: 10,
                        height: 20, // Adjust the height as needed
                        width: 125,
                        padding: "10px", // Adjust padding as needed for better alignment
                      },
                    }}
                  />
                </div>
                <div className="col-md-4">
                  <MDBBtn
                    style={{
                      borderRadius: 10,
                      backgroundColor: "#09283F",
                      fontSize: "6px",
                      scale: "0.75",
                    }}
                    size="sm"
                  >
                    Subscribe
                  </MDBBtn>
                </div>
              </Stack>
              <Stack direction={"row"} spacing={2}>
                <div>
                  <IconButton>
                    <img src={fbIcon} alt="Facebook Icon" />
                  </IconButton>
                </div>
                <div>
                  <IconButton>
                    <img src={xIcon} alt="Close Icon" />
                  </IconButton>
                </div>
              </Stack>
            </div>
            <div>
              <p
                className="mb-2"
                style={{
                  textDecoration: "underline",
                  color: "black",
                  fontSize: "10px",
                }}
              >
                <strong>Contact Us</strong>
              </p>
              <p
                style={{
                  marginBottom: "10px",
                  fontStyle: "italic",
                  color: "black",
                  fontSize: "10px",
                }}
              >
                6 Salah El Din St. Zamalek, 11211 Cairo, Egypt.
              </p>
              <p
                style={{
                  marginBottom: "10px",
                  fontStyle: "italic",
                  color: "black",
                  fontSize: "10px",
                }}
              >
                Tel: +20 2 2735 4010 | +20 2736 7717
              </p>
              <p
                style={{
                  marginBottom: "10px",
                  fontStyle: "italic",
                  color: "black",
                  fontSize: "10px",
                }}
              >
                Info@afifioffice.com
              </p>
            </div>
          </Stack>
        </Stack>
      </section>
    </MDBFooter>
  ) : (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 d-flex justify-content-center">
                <img
                  src={logoMain}
                  alt="Icon"
                  fluid
                  className="d-inline-block me-3 img-fluid"
                />
              </h6>
              <p
                style={{
                  fontFamily: "Montserrat",
                  fontStyle: "italic",
                  fontWeight: "400",
                  fontSize: "12px",
                  lineHeight: "14.63px",
                  textAlign: "left",
                  paddingLeft: "25px",
                }}
              >
                Delivering ingenious legal resolutions for the most intricate
                contentious and commercial challenges.
              </p>
            </MDBCol>
            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <p
                className="mb-2"
                style={{ textDecoration: "underline", color: "black" }}
              >
                <strong>Navigation</strong>
              </p>
              <p>
                <a href="#!" style={{ fontStyle: "italic", color: "black" }}>
                  Home
                </a>
              </p>
              <p>
                <a href="#!" style={{ fontStyle: "italic", color: "black" }}>
                  Practices
                </a>
              </p>
              <p>
                <a href="#!" style={{ fontStyle: "italic", color: "black" }}>
                  Our Story
                </a>
              </p>
              <p>
                <a href="#!" style={{ fontStyle: "italic", color: "black" }}>
                  Careers
                </a>
              </p>
              <p>
                <a href="#!" style={{ fontStyle: "italic", color: "black" }}>
                  Team
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="4" className="mx-auto mb-4">
              <p
                className="mb-2"
                style={{ textDecoration: "underline", color: "black" }}
              >
                <strong>Contact Us</strong>
              </p>
              <p
                style={{
                  marginBottom: "10px",
                  fontStyle: "italic",
                  color: "black",
                }}
              >
                6 Salah El Din St. Zamalek, 11211 Cairo, Egypt.
              </p>
              <p
                style={{
                  marginBottom: "10px",
                  fontStyle: "italic",
                  color: "black",
                }}
              >
                Tel: +20 2 2735 4010 | +20 2736 7717
              </p>
              <p
                style={{
                  marginBottom: "10px",
                  fontStyle: "italic",
                  color: "black",
                }}
              >
                Info@afifioffice.com
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <p
                className="mb-4"
                style={{ textDecoration: "underline", color: "black" }}
              >
                <strong>Join a Newsletter</strong>
              </p>
              <MDBRow className="align-items-center">
                <div className="col-md-8">
                  <TextField
                    label="Enter Your Email"
                    type="text"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true, // To keep the label floating when there's input
                      style: { textAlign: "center" }, // Center-align the label
                    }}
                    InputProps={{
                      style: {
                        borderRadius: 10,
                        height: 40, // Adjust the height as needed
                        padding: "10px", // Adjust padding as needed for better alignment
                      },
                    }}
                  />
                </div>
                <div className="col-md-4">
                  <MDBBtn
                    style={{ borderRadius: 10, backgroundColor: "#09283F" }}
                  >
                    Subscribe
                  </MDBBtn>
                </div>
              </MDBRow>
              <MDBRow className="align-items-center">
                <div className="col-auto">
                  <IconButton>
                    <img src={fbIcon} alt="Facebook Icon" />
                  </IconButton>
                </div>
                <div className="col-auto">
                  <IconButton>
                    <img src={xIcon} alt="Close Icon" />
                  </IconButton>
                </div>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
}
