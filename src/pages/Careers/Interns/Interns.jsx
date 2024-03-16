import InternsHeroImage from '../../../assets/Images/Careers/InternsHeroImage.jpeg';
import BoatImage from '../../../assets/Images/Careers/InternsBoatImage.jpeg';
import TelescopeImage from '../../../assets/Images/Careers/InternsTelescopeImage.jpeg';

import HeroCareers from '../../../components/Common/Hero/HeroCareers';
import CustomForm from '../../../components/Common/Form/CustomForm';
import SectionHeaderWithoutArrow from '../../../components/Common/Section/sectionHeaderWithoutArrow';
import ApplyNowSection from '../../../components/Page/Careers/Interns/ApplyNowSection';

import { FormConstants } from '../../../constants/Constants';

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

const Interns = () => {
  const heroDetails = {
    heroImage: InternsHeroImage,
    heroPrimaryHeading: 'Internship',
    heroSecondaryHeading: 'Careers',
    heroSubHeading:
      'Embrace a career path where your potential is recognized and your contributions truly matter. Start your journey with us and become an integral part of a forward-thinking legal team.',
  };

  const firstSectionHeader = {
    sectionHeaderTitle: 'flourishing next?',
    sectionHeaderText: 'Where do you see your career journey',
    sectionStyle: {
      width: '969px',
      fontSize: '50px',
      fontFamily: 'Montserrat',
      fontWeight: 300,
    },
  };

  const formInputs = [
    {
      inputType: FormConstants.TEXT,
      inputTitle: 'Name',
    },
    {
      inputType: FormConstants.UPLOAD,
      inputTitle: 'Required Documents',
    },
    {
      inputType: FormConstants.TEXT,
      inputTitle: 'Email Address',
    },
    {
      inputType: FormConstants.PHONE_NUMBER,
      inputTitle: 'Phone Number',
    },
    {
      inputType: FormConstants.TEXT,
      inputTitle: 'Your Message To The Hiring Manager',
    },
    {
      inputType: FormConstants.CHECKER,
    },
  ];

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

          <Stack direction={'row'} spacing={1} sx={{ marginBottom: '10vh' }}>
            <Box
              component="img"
              sx={{
                height: 442,
                width: '50%', // Adjust the width to 50%
                // maxHeight: { xs: 233, md: 167 },
                // maxWidth: { xs: 350, md: 250 },
              }}
              alt="Old Interns"
              src={BoatImage}
            />

            <Box
              sx={{
                width: '50%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'Montserrat',
                  fontSize: 50,
                  fontWeight: 300,
                  lineHeight: '61px',
                  letterSpacing: '0em',
                  textAlign: 'left',
                  marginBottom: '1vh',
                }}>
                Old Interns
              </Typography>

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
                Our internship program is specifically designed to bridge the
                gap between academic learning and real-world legal practice. Our
                interns play a pivotal role in guiding fresh graduates, offering
                insights, hands-on experience, and mentorship.
                <br />
                <br />
                This supportive network not only enhances practical skills but
                also helps new graduates align their career aspirations with
                achievable goals, setting a strong foundation for a successful
                legal career.
              </Typography>
            </Box>
          </Stack>

          <Stack direction={'row'} spacing={1} sx={{ marginBottom: '10vh' }}>
            <Box
              sx={{
                width: '50%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'Montserrat',
                  fontSize: 50,
                  fontWeight: 300,
                  lineHeight: '61px',
                  letterSpacing: '0em',
                  textAlign: 'left',
                  marginBottom: '1vh',
                }}>
                Our Vision
              </Typography>

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
                Our internship program is to create a nurturing and dynamic
                environment where interns are key catalysts in shaping the
                future of fresh law graduates. We strive to foster a culture of
                mentorship, collaboration, and practical skill-building,
                ensuring that each intern is not just an observer but an active
                participant in legal processes.
                <br />
                <br />
                This approach aims to equip new graduates with the confidence,
                knowledge, and experience necessary to excel in the legal
                profession, ultimately shaping the next generation of legal
                experts.
              </Typography>
            </Box>

            <Box
              component="img"
              sx={{
                height: 442,
                width: '50%', // Adjust the width to 50%
                // maxHeight: { xs: 233, md: 167 },
                // maxWidth: { xs: 350, md: 250 },
              }}
              alt="Old Interns"
              src={TelescopeImage}
            />
          </Stack>
        </Container>
      </ThemeProvider>

      <ApplyNowSection />

      <ThemeProvider theme={theme}>
        <Container
          maxWidth="lg"
          style={{ marginTop: '10vh', marginBottom: '10vh' }}>
          <Box
            style={{
              width: '60%'
            }}
          >
            <CustomForm key={'Professionals Form'} inputs={formInputs} buttonText={'Apply Now'} />
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Interns;
