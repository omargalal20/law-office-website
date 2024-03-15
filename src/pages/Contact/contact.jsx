import contactbg from '../../assets/Images/Contact/contact.svg';

import HeaderBar from '../../components/Layout/Header/header';
import CustomInput from '../../components/Common/Input/CustomInput';
import SectionHeaderWithoutArrow from '../../components/Common/Section/sectionHeaderWithoutArrow';
import Maps from '../../components/Page/Contact/Maps';
import HoverableButton from '../../components/Common/Button/HoverableButton';

import { FormConstants } from '../../constants/Constants';

import Stack from '@mui/material/Stack';
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
      inputTitle: 'Email Address',
      largeInput: false,
    },
    {
      inputType: FormConstants.TEXT,
      inputTitle: 'Nearest Office',
      largeInput: false,
    },
    {
      inputType: FormConstants.TEXT,
      inputTitle: 'Expertise',
      largeInput: false,
    },
    {
      inputType: FormConstants.TEXT,
      inputTitle: 'Enquiry Type',
      largeInput: false,
    },
    {
      inputType: FormConstants.TEXT,
      inputTitle: 'Nearest Office',
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
            fontSize: '50px',
            width: '800px',
            fontWeight: '500',
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
            fontSize: '40px',
            width: '817px',
            fontWeight: '100',
            fontFamily: 'Montserrat',
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
            <Stack direction={'column'} spacing={3}>
              {formInputs.map((input, index) => (
                <CustomInput
                  key={index}
                  inputType={input.inputType}
                  inputTitle={input.inputTitle}
                  largeInput={input.largeInput}
                />
              ))}

              <HoverableButton buttonText={'Send Message'} />
            </Stack>

            <Maps />
          </Stack>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Contact;
