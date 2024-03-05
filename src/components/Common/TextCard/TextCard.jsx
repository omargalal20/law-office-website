import React from "react";
import Stack from "@mui/material/Stack";

const TextCard = ({ educations, languages, admittance = "", biography }) => {
  return (
    <>
      <Stack
        direction={"row"}
        spacing={2}
        style={{ width: "1258px" }}
      >
        <div style={{ width: "35%", height: "159px" }}>
          <p
            style={{
              fontSize: "30px",
              fontFamily: "Montserrat",
              fontWeight: 500,
            }}
          >
            Education & Qualifications{" "}
          </p>

          {
            educations.length !== 0 ? (
              educations.map(education => (
                <p
                  style={{
                    fontSize: "18px",
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                  }}
                >
                  {education.degree} , {education.university} {education.year}
                </p>
              )
              )) : "N/A"
          }

          <p
            style={{
              fontSize: "18px",
              fontFamily: "Montserrat",
              fontWeight: 400,
            }}
          >
            {admittance}
          </p>
          <br></br>
          <p
            style={{
              fontSize: "30px",
              fontFamily: "Montserrat",
              fontWeight: 500,
            }}
          >
            Language(s)
          </p>
          <p
            style={{
              fontSize: "18px",
              fontFamily: "Montserrat",
              fontWeight: 400,
            }}
          >
            {languages.length !== 0 ? (
              languages.map((language, index) => (
                <span key={language.language}>
                  {language.language}
                  {index !== languages.length - 1 ? (index !== languages.length - 2 ? ", " : " & ") : ""}
                </span>
              )
              )) : "N/A"
            }
          </p>
        </div>

        <div
          style={{
            fontSize: "18px",
            fontFamily: "Montserrat",
            fontWeight: 400,
            width: "801px",
          }}
        >
          {biography}
        </div>
      </Stack>
    </>
  );
};
export default TextCard;
