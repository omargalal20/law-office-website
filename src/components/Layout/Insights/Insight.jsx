import PropTypes from 'prop-types';

import HeroInsights from '../../Common/Hero/HeroInsights';
import SectionHeader from '../../Common/Section/sectionHeader';
import RelatedImagesSection from '../../Common/Section/relatedImagesSection';

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

const Insight = ({
  key,
  heroDetails,
  headerText,
  insightImages,
  teamName,
  children,
}) => {
  const { heroImage, heroPrimaryHeading, heroSecondaryHeading } = heroDetails;

  return (
    <>
      <HeroInsights
        backgroundImage={heroImage}
        primaryHeading={heroPrimaryHeading}
        secondaryHeading={heroSecondaryHeading}>
        {headerText}
      </HeroInsights>
      <ThemeProvider theme={theme}>
        <Container
          maxWidth="lg"
          style={{ marginTop: '10vh', marginBottom: '10vh' }}>
          {children}

          <SectionHeader title={'Related Insights'} />

          <RelatedImagesSection
            key={key}
            insightImages={insightImages}
            teamName={teamName}
          />
        </Container>
      </ThemeProvider>
    </>
  );
};

Insight.propTypes = {
  key: PropTypes.string.isRequired,
  heroDetails: PropTypes.shape({
    heroImage: PropTypes.string.isRequired,
    heroPrimaryHeading: PropTypes.string.isRequired,
    heroSecondaryHeading: PropTypes.string.isRequired,
  }).isRequired,
  headerText: PropTypes.string.isRequired,
  insightImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  teamName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Insight;
