import { useState } from 'react';
import PropTypes from 'prop-types';

import { MainInsightsConstants } from '../../../utils/Constants';

import dentonsHongKong from '../../../assets/Images/Insights/main-insights-denton-hong-kong-logo.svg';
import viewMoreInsightsArrow from '../../../assets/Images/Insights/view-more-insights-arrow.svg';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ViewMoreInsights = ({ state, toggleView, setExpanded }) => {
  const [isHovered, setIsHovered] = useState(false);

  switch (state) {
    case MainInsightsConstants.EXPANDED:
      return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row', // Change to row
            height: '181px', // Add "px" to specify the height
          }}
          onClick={() => {
            toggleView(MainInsightsConstants.COLLAPSED);
            setExpanded(false);
          }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignContent: 'center',
              background: '#09283F',
              width: '307px',
            }}>
            <img
              src={dentonsHongKong}
              height={'50px'}
              width={'100px'}
              alt="icon"
              style={{ marginLeft: '20px' }}
            />
          </div>

          <div
            style={{
              flex: '1', // Add flex: 1 to make the div expand to fill the remaining space
              background: '#09283FC7',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: isHovered ? 'pointer' : '',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            {['View Less', 'Insights'].map((line, index) => (
              <div
                key={index}
                style={{
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: '100',
                  fontFamily: 'Montserrat',
                }}>
                {line}
              </div>
            ))}

            <div
              style={{
                transform: `rotate(180deg) ${isHovered ? 'translateX(20px)' : 'translateX(0)'}`,
                transition: 'transform 0.5s ease',
                marginTop: '10px',
              }}>
              <img src={viewMoreInsightsArrow} alt="icon" />
            </div>
          </div>
        </Box>
      );
    case MainInsightsConstants.TOGGLED:
      return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <Typography
            variant="h1"
            style={{
              fontFamily: 'Montserrat',
              fontSize: '50px',
              fontWeight: 300,
              lineHeight: '61px',
              letterSpacing: '0em',
              textAlign: 'left',
            }}>
            Explore More
          </Typography>

          <Typography
            variant="h1"
            style={{
              fontFamily: 'Montserrat',
              fontSize: '50px',
              fontStyle: 'italic',
              fontWeight: 100,
              lineHeight: '61px',
              letterSpacing: '0em',
              textAlign: 'left',
            }}>
            Insights
          </Typography>
        </Box>
      );
    case MainInsightsConstants.COLLAPSED:
      return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row', // Change to row
            height: '181px', // Add "px" to specify the height
          }}
          onClick={() => {
            toggleView(MainInsightsConstants.TOGGLED);
            setExpanded(true);
          }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignContent: 'center',
              background: '#09283F',
              width: '307px',
            }}>
            <img
              src={dentonsHongKong}
              height={'50px'}
              width={'100px'}
              alt="icon"
              style={{ marginLeft: '20px' }}
            />
          </div>

          <div
            style={{
              flex: '1', // Add flex: 1 to make the div expand to fill the remaining space
              background: '#09283FC7',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: isHovered ? 'pointer' : '',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            {['View More', 'Insights'].map((line, index) => (
              <div
                key={index}
                style={{
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: '100',
                  fontFamily: 'Montserrat',
                }}>
                {line}
              </div>
            ))}

            <div
              style={{
                transition: 'transform 0.5s ease',
                transform: isHovered ? 'translateX(20px)' : 'translateX(0)',
                marginTop: '10px',
              }}>
              <img src={viewMoreInsightsArrow} alt="icon" />
            </div>
          </div>
        </Box>
      );
    default:
      return null;
  }
};

ViewMoreInsights.propTypes = {
  state: PropTypes.string.isRequired,
  toggleView: PropTypes.func.isRequired,
  setExpanded: PropTypes.func.isRequired,
};

export default ViewMoreInsights;
