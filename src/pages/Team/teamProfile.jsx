import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';

import { shuffleArray } from '../../utils/ShuffleArray';

import hero from '../../assets/Images/Team/hero.png';

import TextCard from '../../components/Common/TextCard/TextCard';
import HeroTeam from '../../components/Common/Hero/heroTeam';

const RelatedImagesSection = lazy(
  () => import('../../components/Common/Section/relatedImagesSection')
);
const TripleImageGrid = lazy(
  () => import('../../components/Common/Section/tripleImageGrid')
);

import profilesData from '../../data/TeamProfiles.json';
import { ProfileImagesData } from './profileImages';
import { RelatedInsightsImages } from '../Insights/InsightsInfos';

import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Container from '@mui/material/Container';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 300,
      md: 660,
      lg: 1350,
      xl: 1620,
    },
  },
});

const TeamProfile = () => {
  const { profileName } = useParams();

  const [profile, setProfile] = useState({});
  const [profileImages, setProfileImages] = useState([]);
  const [latestNewsImages, setLatestNewsImages] = useState([]);

  const numberOfLatestNewsImages = 3;
  const numberOfRelatedPracticeAreas = 2;

  useEffect(() => {
    const profilePageImagesKey =
      profilesData[profileName]?.profilePageImagesKey;
    const suffledRelatedInsights = shuffleArray(RelatedInsightsImages);
    const suffledRelatedPracticeAreas = profilePageImagesKey
      ? shuffleArray(ProfileImagesData[profilePageImagesKey].relatedPracticeAreasImages)
      : [];

    setProfile(profilesData[profileName] || {});
    setProfileImages(
      {
        profileImage: ProfileImagesData[profilePageImagesKey].profileImage,
        relatedPracticeAreasImages: suffledRelatedPracticeAreas.slice(0, numberOfRelatedPracticeAreas)
      }
    );
    setLatestNewsImages(
      suffledRelatedInsights.slice(0, numberOfLatestNewsImages)
    );
  }, [profileName]);

  return (
    Object.keys(profile).length !== 0 &&
    Object.keys(profileImages).length !== 0 && (
      <div>
        <HeroTeam
          backgroundImage={hero}
          teamImage={profileImages.profileImage}
          teamName={profile.name}
          teamPosition={profile.position}
          teamInfo={
            profile.address +
            ' / ' +
            profile.email +
            ' / ' +
            profile.phoneNumber
          }
        />

        <ThemeProvider theme={theme}>
          <Container maxWidth="lg" style={{ marginTop: '56px' }}>
            <div style={{ marginTop: '50px' }}>
              <TextCard
                educations={profile.educations}
                languages={profile.languages}
                admittance={profile.admittance}
                biography={profile.biography}
              />
            </div>
            <div>
              <p
                style={{
                  fontSize: '50px',
                  fontWeight: 400,
                  fontFamily: 'Montserrat',
                }}>
                Related{' '}
                <span
                  style={{
                    fontSize: '50px',
                    fontWeight: 100,
                    fontStyle: 'italic',
                  }}>
                  Practice Areas
                </span>
              </p>

              <Suspense fallback={<div>Loading...</div>}>
                <RelatedImagesSection
                  insightImages={profileImages.relatedPracticeAreasImages}
                />
              </Suspense>
            </div>
            <p
              style={{
                fontSize: '50px',
                fontWeight: 400,
                fontFamily: 'Montserrat',
                marginTop: '20px',
              }}>
              Latest{' '}
              <span
                style={{
                  fontSize: '50px',
                  fontWeight: 100,
                  fontStyle: 'italic',
                }}>
                News
              </span>
            </p>

            <Suspense fallback={<div>Loading...</div>}>
              <TripleImageGrid
                images={latestNewsImages}
                width="569px"
                bigWidth="712px"
              />
            </Suspense>
          </Container>
        </ThemeProvider>
      </div>
    )
  );
};

export default TeamProfile;
