import ProfessionalsHeroImage from '../../../assets/Images/Careers/ProfessionalsHeroImage.jpeg';

import HeroCareers from '../../../components/Common/Hero/HeroCareers';
import SectionHeaderWithoutArrow from '../../../components/Common/Section/sectionHeaderWithoutArrow';
import CustomForm from '../../../components/Common/Form/CustomForm';

import { FormConstants } from '../../../constants/Constants';

import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

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

const Professionals = () => {
  const heroDetails = {
    heroImage: ProfessionalsHeroImage,
    heroPrimaryHeading: 'Professionals',
    heroSecondaryHeading: 'Careers',
    heroSubHeading:
      "Our team is on the lookout for driven, talented individuals eager to contribute to our narrative. Whether you're a legal expert, a business professional, or a recent graduate seeking growth and career advancement, explore our current openings and programs to find where you fit in our story",
  };

  const firstSectionHeader = {
    sectionHeaderTitle: 'Career Journey',
    sectionHeaderText: 'Where Do you Envision Taking The Next step In Your',
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
          <SectionHeaderWithoutArrow
            key={'Professionals-First-SectionHeaderWithoutArrow'}
            sectionInfo={firstSectionHeader}
          />

          <Box
            style={{
              width: '60%',
            }}>
            <CustomForm
              key={'Professionals Form'}
              inputs={formInputs}
              buttonText={'Apply Now'}
            />
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Professionals;
