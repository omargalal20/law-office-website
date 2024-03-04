import React, { useState } from "react";
import HeroMainTeam from "../../components/Common/Hero/heroMainTeam";
import mainHero from "../../assets/Images/Team/mainhero.png";
import main1 from "../../assets/Images/Team/main1.png";
import { Container, Stack, Button } from "@mui/material";
import ProfileCard from "../../components/Common/ProfileCard/profileCard";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import bx6 from "../../assets/Images/Misc/img.svg";

const MainTeam = () => {
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  const heroDetails = {
    heroPrimaryHeading: "Meet Our Legal / Pioneers",
    heroSecondaryHeading: "Team",
    heroSubHeading: "Founded in 1981, Leading through Excellence",
  };

  const profiles = [
    "Habil Abu El-Kheir",
    "Tamer Kamal",
    "Hossam El Sharawi",
    "Emil maken gobrial",
    "Amin kamal amin",
    "Asser negmeldin",
    "Andrew afifi",
    "Alia safie",
    "Adel Fekry",
    "Mahmoud Maher",
    "Gamil ibrahim Dorgham",
    "Walid moneir Sakr",
    "Mohamed Tayel",
  ];

  // Chunk the profiles into groups of 2 for initial display
  const initialProfiles = profiles.slice(0, 8); // Display the first 8 profiles initially
  const [visibleProfiles, setVisibleProfiles] = useState(initialProfiles);
  const [showLess, setShowLess] = useState(false);
  const remainingProfiles = profiles.slice(8, profiles.length); // Profiles after the initial ones

  const handleShowMore = () => {
    setVisibleProfiles((prevProfiles) => [
      ...prevProfiles,
      ...remainingProfiles,
    ]);
    setShowLess(true);
  };

  const handleShowLess = () => {
    const initialProfiles = profiles.slice(0, 8); // Display the first 8 profiles initially
    setVisibleProfiles(initialProfiles);
    setShowLess(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <HeroMainTeam
        backgroundImage={mainHero}
        primaryHeading={heroDetails.heroPrimaryHeading}
        secondaryHeading={heroDetails.heroSecondaryHeading}
        subHeading={heroDetails.heroSubHeading}
      />
      <Stack direction={"row"} spacing={0}>
        <div
          style={{
            width: "713px",
            height: "651px",
            marginLeft: "80px", // Adjust left margin instead of left positioning
          }}
        >
          <p
            style={{
              width: "240px",
              fontSize: "50px",
              fontFamily: "Montserrat",
              fontWeight: 300,
              marginTop: "180px",
            }}
          >
            Our Own{" "}
            <span style={{ fontWeight: 100, fontStyle: "italic" }}>Spirit</span>
          </p>
          <p
            style={{
              width: "592px",
              fontSize: "18px",
              fontFamily: "Montserrat",
              fontWeight: 400,
              marginTop: "45px",
            }}
          >
            Their unwavering dedication and collaborative spirit have been
            instrumental in achieving our notable legal successes and in
            establishing us as a distinguished presence in the legal community.
          </p>
          <br />
          <p
            style={{
              width: "592px",
              fontSize: "18px",
              fontFamily: "Montserrat",
              fontWeight: 400,
              marginTop: "18px",
            }}
          >
            Together, they are the cornerstone of our firm, continually driving
            us towards new heights in legal excellence and client service.
          </p>
        </div>
        <div style={{ marginLeft: "auto" }}>
          {" "}
          {/* Use marginLeft: "auto" to push the image to the right */}
          <img
            src={main1}
            alt="bg"
            style={{
              width: "713px",
              height: "651px",
            }}
          />
        </div>
      </Stack>
      <p
        style={{
          width: "320px",
          fontSize: "50px",
          fontWeight: 300,
          fontFamily: "Montserrat",
          marginLeft: 80,
        }}
      >
        Our{" "}
        <span
          style={{
            fontWeight: 100,
            fontStyle: "italic",
          }}
        >
          Professionals
        </span>
      </p>
      <Container style={{ marginTop: "20px" }}>
        <div>
          {[0, 1, 2, 3].map((rowIndex) => (
            <div
              key={rowIndex}
              style={{ display: "flex", marginBottom: "20px" }}
            >
              {[0, 1].map((profileIndex) => {
                const index = rowIndex * 2 + profileIndex;
                if (index < visibleProfiles.length) {
                  return (
                    <div key={index} style={{ marginRight: "20px" }}>
                      <ProfileCard profileName={visibleProfiles[index]} />
                    </div>
                  );
                }
                return null;
              })}
            </div>
          ))}
          {visibleProfiles.length > 8 &&
            [4, 5, 6, 7].map((rowIndex) => (
              <div
                key={rowIndex}
                style={{ display: "flex", marginBottom: "20px" }}
              >
                {[0, 1].map((profileIndex) => {
                  const index = rowIndex * 2 + profileIndex;
                  if (index < visibleProfiles.length) {
                    return (
                      <div key={index} style={{ marginRight: "20px" }}>
                        <ProfileCard profileName={visibleProfiles[index]} />
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            ))}
        </div>
        {remainingProfiles.length > 0 && (
          <Container
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {!showLess && (
              <Button
                onClick={handleShowMore}
                variant="outlined"
                style={{ color: "black", border: "none" }}
              >
                Show More
              </Button>
            )}
            {showLess && (
              <Button
                onClick={handleShowLess}
                variant="outlined"
                style={{ color: "black", border: "none" }}
              >
                Show Less
              </Button>
            )}
          </Container>
        )}
      </Container>
      <div
        style={{
          height: 565,
          width: "100%",
          background: "#09283F",
          marginTop: "25px",
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
    </div>
  );
};

export default MainTeam;
