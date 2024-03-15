import PropTypes from 'prop-types';

import './swiper.css';
import sectionHeaderArrow from '../../../assets/Images/Misc/section-header-arrow.svg';

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

const Swiper = ({ sectionHeader, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="lg"
        style={{ marginTop: '10vh', marginBottom: '10vh' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '10vh',
            marginBottom: '10vh',
          }}>
          <p
            style={{
              color: '#000000',
              fontSize: '50px',
              fontWeight: '100',
              lineHeight: '1.2',
            }}>
            <span
              style={{
                fontStyle: 'italic',
                fontWeight: '100',
                lineHeight: '60.95px',
              }}>
              {sectionHeader}
            </span>
          </p>

          <img
            src={sectionHeaderArrow}
            alt="icon"
            style={{ marginLeft: '10px' }}
          />
        </div>
        <swiper-container
          class="mySwiper"
          slides-per-view="auto"
          centered-slides="true"
          space-between="50"
          scrollbar-clickable="true"
          mousewheel-invert="true">
          {children}
        </swiper-container>
      </Container>
    </ThemeProvider>
  );
};

Swiper.propTypes = {
  sectionHeader: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Swiper;
