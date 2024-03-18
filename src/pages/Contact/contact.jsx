import contactbg from '../../assets/Images/Contact/contact.svg';

import HeaderBar from '../../components/Layout/Header/header';
import SectionHeaderWithoutArrow from '../../components/Common/Section/sectionHeaderWithoutArrow';
import Maps from '../../components/Page/Contact/Maps';
import CustomForm from '../../components/Common/Form/CustomForm';

import { FormConstants } from '../../utils/Constants';

import Stack from '@mui/material/Stack';
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

const Contact = () => {
  const firstSectionHeader = {
    sectionHeaderTitle: 'The Form Below',
    sectionHeaderText: 'For Any Other Questions Or Requests, Kindly Fill Out',
    sectionStyle: {
      fontSize: '50px',
      width: '969px',
      height: '122px',
      marginBottom: 78,
      fontWeight: 400,
    },
  };

  const formInputs = [
    {
      inputType: FormConstants.TEXT,
      inputTitle: 'Name',
      largeInput: false,
    },
    {
      inputType: FormConstants.TEXT,
      inputTitle: 'Email',
      largeInput: false,
    },
    {
      inputType: FormConstants.PHONE_NUMBER,
      inputTitle: 'Phone Number',
      largeInput: false,
    },
    {
      inputType: FormConstants.TEXT,
      inputTitle: 'Your Message',
      largeInput: true,
    },
    {
      inputType: FormConstants.CHECKER,
    },
  ];

  return (
    <>
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          height: '975px', // Adjust the height as needed
        }}>
        <img
          src={contactbg}
          alt="Background"
          style={{
            width: '100%',
            height: '100%', // Ensure the image covers the entire container
            objectFit: 'cover',
          }}
        />

        {/* Black overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.25)', // Adjust the opacity as needed
          }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
            <HeaderBar />
          </div>
        </div>

        <p
          style={{
            position: 'absolute',
            top: 200,
            left: 85,
            right: 0,
            color: 'white',
            fontSize: '1rem',
            fontWeight: '100',
          }}>
          Contact
        </p>

        <p
          style={{
            position: 'absolute',
            top: 424,
            left: 80,
            right: 0,
            color: 'white',
            fontFamily: 'Montserrat',
            fontSize: '60px',
            fontWeight: '500',
            lineHeight: '73px',
            letterSpacing: '0em',
            width: '800px',
          }}>
          Contact Us
        </p>

        <p
          style={{
            position: 'absolute',
            top: 497,
            left: 80,
            right: 0,
            color: 'white',
            fontFamily: 'Montserrat',
            fontSize: '40px',
            fontWeight: '300',
            lineHeight: '49px',
            letterSpacing: '0em',
            width: '817px',
          }}>
          Thank you for considering Afifi Law Office
        </p>
      </div>

      <ThemeProvider theme={theme}>
        <Container
          maxWidth="lg"
          style={{ marginTop: '10vh', marginBottom: '10vh' }}>
          <SectionHeaderWithoutArrow
            key={'Contacts-First-SectionHeaderWithoutArrow'}
            sectionInfo={firstSectionHeader}
          />

          <Stack direction={'row'} spacing={8}>
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

            <Maps />
          </Stack>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Contact;
