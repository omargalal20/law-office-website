import React from "react";
import Stack from "@mui/material/Stack";

const TextCard = ({ qualif, lang, about }) => {
  return (
    <>
      <Stack
        direction={"row"}
        spacing={2}
        style={{ width: "1258px", height: "396px" }}
      >
        <div style={{ width: "425px", height: "159px" }}>
          <p
            style={{
              fontSize: "30px",
              fontFamily: "Montserrat",
              fontWeight: 500,
            }}
          >
            Education & Qualifications{" "}
          </p>
          <p
            style={{
              fontSize: "18px",
              fontFamily: "Montserrat",
              fontWeight: 400,
            }}
          >
            {qualif}
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
            {lang}
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
          {about}
        </div>
      </Stack>
    </>
  );
};
export default TextCard;
