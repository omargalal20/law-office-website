import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import hero from "../../assets/Images/Team/hero.png";

import TextCard from "../../components/Common/TextCard/TextCard";
import HeroTeam from "../../components/Common/Hero/heroTeam";
import RelatedImagesSection from "../../components/Common/Section/relatedImagesSection";
import TripleImageGrid from "../../components/Common/Section/tripleImageGrid";

import profilesData from "../../data/TeamProfiles.json";
import { profileImagesData } from "./profileImages";

const TeamProfile = () => {
  const { profileName } = useParams();

  const [profile, setProfile] = useState({})
  const [profileImages, setProfileImages] = useState({})

  useEffect(() => {
    setProfile(profilesData[profileName] || {});

    const profilePageImagesKey = profilesData[profileName]?.profilePageImagesKey;
    setProfileImages(profilePageImagesKey ? profileImagesData[profilePageImagesKey] : {});
  }, [profileName]);

  return (
    ((Object.keys(profile).length !== 0) && (Object.keys(profileImages).length !== 0)) && (
      <div>
        <HeroTeam
          backgroundImage={hero}
          teamImage={profileImages.profileImage}
          teamName={profile.name}
          teamPosition={profile.position}
          teamInfo={profile.address + " / " + profile.email + " / " + profile.phoneNumber}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ marginTop: "50px" }}>
            <TextCard educations={profile.educations}
              languages={profile.languages}
              admittance={profile.admittance}
              biography={profile.biography}
            />
          </div>
          <div>
            <p
              style={{
                fontSize: "50px",
                fontWeight: 400,
                fontFamily: "Montserrat",
              }}
            >
              Related{" "}
              <span
                style={{ fontSize: "50px", fontWeight: 100, fontStyle: "italic" }}
              >
                Practice Areas
              </span>
            </p>
            <RelatedImagesSection insightImages={profileImages.relatedPracticeAreasImages} />
          </div>
          <div style={{ paddingLeft: "100px", marginTop: "50px" }}>
            <p
              style={{
                fontSize: "50px",
                fontWeight: 400,
                fontFamily: "Montserrat",
              }}
            >
              Latest{" "}
              <span
                style={{ fontSize: "50px", fontWeight: 100, fontStyle: "italic" }}
              >
                News
              </span>
            </p>

            <TripleImageGrid images={profileImages.latestNewsImages} width="569px" bigWidth="712px" />
          </div>
        </div>
      </div>
    )
  );
};

export default TeamProfile;