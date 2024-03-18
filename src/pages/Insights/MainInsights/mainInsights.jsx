import { useState } from 'react';

import { MainInsightsConstants } from '../../../utils/Constants';

import insightsOfficeAdvantagePrimaryImage from '../../../assets/Images/Insights/main-insights-office-advantage-1.png';
import sectionHeaderArrow from '../../../assets/Images/Misc/section-header-arrow.svg';
import mainInsightsGenericInsightsImage from '../../../assets/Images/Insights/main-insights-generic-insights.png';
import mainInsightsGenericInsightsRenewableImage from '../../../assets/Images/Insights/main-insights-renewable.jpeg';
import mainInsightsGenericInsightsOilGasImage from '../../../assets/Images/Insights/main-insights-oil-gas.png';

import {
  practiceRelatedInsightsImages,
  exploreMoreInsightsImages,
} from './MainInsightsImages';

import HeroInsights from '../../../components/Common/Hero/HeroInsights';
import HoverableImageWith from '../../../components/Common/HoverableImage/hvImgwith';
import ViewMoreInsights from '../../../components/Page/Insights/viewMoreInsights';

import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

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

const MainInsights = () => {
  const [viewMoreInsights, setViewMoreInsights] = useState(
    MainInsightsConstants.COLLAPSED
  );
  const [expanded, setExpanded] = useState(false);

  const toggleView = toggleState => {
    setViewMoreInsights(toggleState);
  };

  return (
    <>
      <HeroInsights
        backgroundImage={insightsOfficeAdvantagePrimaryImage}
        primaryHeading={'Insights'}
        secondaryHeading={'Insights'}>
        <div>
          <h1
            style={{
              position: 'absolute',
              color: 'white',
              width: '65%',
              top: 571,
              left: 85,
              right: 0,
              fontFamily: 'Montserrat',
              fontSize: '20px',
              fontWeight: 400,
              lineHeight: '24.38px',
              letterSpacing: '0em',
              textAlign: 'left',
            }}>
            At Afifi Law Office, we blend deep legal expertise with personalized
            service. Our team stays ahead of legal trends to offer you
            innovative, effective solutions for your unique challenges. Choose
            us for strategic guidance and the confidence that your legal matters
            are in expert hands
          </h1>
        </div>
      </HeroInsights>

      <ThemeProvider theme={theme}>
        <Container maxWidth="lg" style={{ marginTop: '56px' }}>
          <div style={{ marginBottom: '20px' }}>
            <p
              style={{
                color: '#000000',
                fontSize: '50px',
                fontWeight: '400',
                lineHeight: '1.2',
              }}>
              Expert Insight, Personalized Solutions
            </p>
            <p
              style={{
                color: '#000000',
                fontSize: '50px',
                fontWeight: '400',
                lineHeight: '1.2',
              }}>
              The Afifi Law{' '}
              <span
                style={{
                  fontStyle: 'italic',
                  fontWeight: '100',
                  lineHeight: '60.95px',
                }}>
                Office Advantage
              </span>
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '20px',
              marginTop: '55px',
            }}>
            <p
              style={{
                color: '#000000',
                fontFamily: 'Montserrat',
                fontSize: '50px',
                fontStyle: 'italic',
                fontWeight: '100',
                lineHeight: '61px',
                letterSpacing: '0em',
                textAlign: 'left',
              }}>
              Generic Insights
            </p>

            <img
              src={sectionHeaderArrow}
              alt="icon"
              style={{ marginLeft: '10px' }}
            />
          </div>

          <Stack direction={'row'} spacing={4} sx={{ marginBottom: '20px' }}>
            <HoverableImageWith
              key={'Technology'}
              src={mainInsightsGenericInsightsImage}
              width={'100%'}
              height={'692px'}
              text={[
                'Technology',
                'Legal Tech Revolution',
                '',
                '31 January, 2024',
              ]}
            />

            <Stack spacing={4}>
              <HoverableImageWith
                key={'Oil & Gas'}
                src={mainInsightsGenericInsightsOilGasImage}
                width={'100%'}
                height={'318px'}
                text={[
                  'Oil & Gas',
                  'Energy Transition Strategies',
                  '',
                  '31 January, 2024',
                ]}
              />

              <HoverableImageWith
                key={'Renewable Energy'}
                src={mainInsightsGenericInsightsRenewableImage}
                width={'100%'}
                height={'318px'}
                text={[
                  'Renewable Energy',
                  'Sustainable Development Trends',
                  '',
                  '31 January, 2024',
                ]}
              />
            </Stack>
          </Stack>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '20px',
              marginTop: '91px',
            }}>
            <p
              style={{
                color: '#000000',
                fontFamily: 'Montserrat',
                fontSize: '50px',
                fontStyle: 'italic',
                fontWeight: '100',
                lineHeight: '61px',
                letterSpacing: '0em',
                textAlign: 'left',
              }}>
              Practice Related Insights
            </p>

            <img
              src={sectionHeaderArrow}
              alt="icon"
              style={{ marginLeft: '10px' }}
            />
          </div>

          <Stack direction={'row'} spacing={4} sx={{ marginBottom: '20px' }}>
            <Stack spacing={4}>
              {practiceRelatedInsightsImages.slice(0, 3).map(item => (
                <>{item.component}</>
              ))}

              <ViewMoreInsights
                state={viewMoreInsights}
                toggleView={toggleView}
                setExpanded={setExpanded}
              />
            </Stack>

            <Stack spacing={4}>
              {practiceRelatedInsightsImages.slice(3).map(item => (
                <>{item.component}</>
              ))}
            </Stack>
          </Stack>

          {expanded && (
            <Stack direction={'row'} spacing={4} sx={{ marginBottom: '20px' }}>
              <Stack spacing={4}>
                {exploreMoreInsightsImages.slice(0, 5).map(item => (
                  <>{item.component}</>
                ))}

                <ViewMoreInsights
                  state={MainInsightsConstants.EXPANDED}
                  toggleView={toggleView}
                  setExpanded={setExpanded}
                />
              </Stack>

              <Stack spacing={4}>
                {exploreMoreInsightsImages.slice(5).map(item => (
                  <>{item.component}</>
                ))}
              </Stack>
            </Stack>
          )}
        </Container>
      </ThemeProvider>
    </>
  );
};

export default MainInsights;
