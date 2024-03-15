import CareersPathConstants from '../../routes/CareersPathConstants';

import CareersHeroImage from '../../assets/Images/Careers/CareersHeroImage.jpeg';
import CareersCultureImage from '../../assets/Images/Careers/CareersCultureImage.jpeg';
import CareersProfessionalsImage from '../../assets/Images/Careers/CareersProfessionalsImage.jpeg';
import CareersInternsImage from '../../assets/Images/Careers/CareersInternsImage.jpeg';

import HeroCareers from '../../components/Common/Hero/HeroCareers';
import ImageOverlay from '../../components/Page/Careers/ImageOverlay';
import SectionHeaderWithoutArrow from '../../components/Common/Section/sectionHeaderWithoutArrow';

import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

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

const Careers = () => {
  const heroDetails = {
    heroImage: CareersHeroImage,
    heroPrimaryHeading: 'Careers',
    heroSecondaryHeading: '',
    heroSubHeading:
      'We are proud to offer lawyers and professional staff myriad opportunities to apply their talents toward important, challenging projects on a global stage. We seek motivated individuals who are talented and committed to pursue meaningful work and ensure excellent service to clients.',
  };

  const firstSectionHeader = {
    sectionHeaderTitle: 'Career',
    sectionHeaderText: 'Build Your Legal',
    sectionStyle: {
      width: '969px',
      fontSize: '50px',
      fontFamily: 'Montserrat',
      fontWeight: 300,
    },
  };

  return (
    <>
      <HeroCareers
        backgroundImage={heroDetails.heroImage}
        primaryHeading={heroDetails.heroPrimaryHeading}
        secondaryHeading={heroDetails.heroSecondaryHeading}
        subHeading={heroDetails.heroSubHeading}
        color="white"
        subHeadingWidth={454}
      />

      <ThemeProvider theme={theme}>
        <Container
          maxWidth="lg"
          style={{ marginTop: '10vh', marginBottom: '10vh' }}>
          <SectionHeaderWithoutArrow sectionInfo={firstSectionHeader} />

          <Stack
            direction={'row'}
            spacing={1}
            sx={{ marginTop: '10vh', marginBottom: '10vh' }}>
            <Box
              component="img"
              sx={{
                height: '599px',
                width: '578px', // Adjust the width to 50%
                // maxHeight: { xs: 233, md: 167 },
                // maxWidth: { xs: 350, md: 250 },
              }}
              alt="Old Interns"
              src={CareersCultureImage}
            />

            <Box
              sx={{
                width: '50%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
              }}>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'Montserrat',
                  fontSize: 18,
                  fontWeight: 400,
                  lineHeight: '22px',
                  letterSpacing: '0em',
                  textAlign: 'left',
                }}>
                Where our culture is not just a part of who we are – it is the
                heartbeat of our legal practice. Passion and excellence
                intertwine to create an environment that goes beyond traditional
                legal realms.
                <br />
                <br />
                Our commitment to fostering a supportive atmosphere ensures that
                creativity, critical thinking, and the relentless pursuit of
                justice resonate in every corner of our firm.
              </Typography>

              <Box sx={{ color: '#000000' }}>
                <Typography
                  variant="h1"
                  component="div"
                  sx={{
                    fontFamily: 'Montserrat',
                    fontSize: 100,
                    fontStyle: 'italic',
                    fontWeight: 200,
                    lineHeight: '122px',
                    letterSpacing: '0em',
                    textAlign: 'left',
                  }}>
                  Our
                </Typography>
                <Typography
                  variant="h1"
                  component="div"
                  sx={{
                    fontFamily: 'Montserrat',
                    fontSize: 100,
                    fontWeight: 300,
                    lineHeight: '122px',
                    letterSpacing: '0em',
                    textAlign: 'left',
                  }}>
                  Culture
                </Typography>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'Montserrat',
                  fontSize: 18,
                  fontWeight: 400,
                  lineHeight: '22px',
                  letterSpacing: '0em',
                  textAlign: 'left',
                }}>
                Our team is more than a collection of legal professionals; it is
                a mosaic of diverse talents and perspectives. We celebrate the
                unique qualities each team member brings, recognizing that a
                diverse blend of experiences enhances our collective strength.
                <br />
                <br />
                This diversity empowers us to approach legal challenges with a
                broad and innovative mindset, delivering impactful solutions
                that stand out in the legal landscape.
              </Typography>
            </Box>
          </Stack>

          <Typography
            variant="body1"
            sx={{
              fontFamily: 'Montserrat',
              fontSize: 18,
              fontWeight: 400,
              lineHeight: '22px',
              letterSpacing: '0em',
              textAlign: 'left',
            }}>
            We understand that the legal landscape is dynamic and ever-evolving.
            That's why we place a premium on continuous learning and
            professional development.
            <br />
            <br />
            We provide our team with the tools and resources needed to stay at
            the forefront of legal trends and emerging practices. We believe in
            nurturing an environment where every member has the opportunity to
            expand their skill set, enabling them to reach their full potential
            and contribute meaningfully to our collective success.
            <br />
            <br />
            Upholding the highest standards of integrity is not just a choice
            but an inherent part of our culture, ensuring that every action
            taken aligns with the principles that define us.
            <br />
            <br />
            Be part of a firm that doesn't just navigate the legal landscape but
            passionately upholds the principles of justice and integrity.
            Together, let's shape a future where legal excellence is not just a
            goal but a shared reality.
          </Typography>
        </Container>
      </ThemeProvider>

      <Box sx={{ width: '100%' }}>
        <Stack
          direction={'row'}
          width={'100%'}
          sx={{ border: '1px solid red' }}>
          <ImageOverlay
            alt="Careers Professionals"
            src={CareersProfessionalsImage}
            primaryText="Join As"
            secondaryText={'Professional'}
            toPage={CareersPathConstants.PROFESSIONALS}
          />
          <ImageOverlay
            alt="Careers Interns"
            src={CareersInternsImage}
            primaryText="Join As"
            secondaryText={'Intern'}
            toPage={CareersPathConstants.INTERNS}
          />
        </Stack>
      </Box>
    </>
  );
};

export default Careers;
