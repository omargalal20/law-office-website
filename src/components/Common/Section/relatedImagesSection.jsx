import PropTypes from 'prop-types';

import HoverableImageWith from '../HoverableImage/hvImgwith';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const RelatedImagesSection = ({ insightImages, teamName = 'Employment' }) => {
  return (
    <Stack direction="row" spacing={2} sx={{ height: '100%' }}>
      {/* Labor law images */}
      {insightImages.map(insightImage => (
        <HoverableImageWith
          key={insightImage.title}
          src={insightImage.img}
          width="523px"
          height="534px"
          text={insightImage.textLines}
          buttonEnabled={false}
          toPage={insightImage.toPage}
        />
      ))}

      {/* Box with two divs */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '534px',
          width: '235px',
        }}>
        <div
          style={{
            height: '393px',
            backgroundImage: 'linear-gradient(0deg, #09283F, #09283F)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
          {['Our', teamName, 'Team'].map((line, index) => (
            <div
              key={index}
              style={{
                color: 'white',
                fontSize: '24px',
                fontWeight: '400',
                fontFamily: 'Montserrat',
                marginLeft: '28px',
              }}>
              {line}
            </div>
          ))}
        </div>
        <div
          style={{
            height: '141px',
            backgroundImage: 'linear-gradient(0deg, #702082, #702082)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
          {['Find Out', 'More'].map((line, index) => (
            <div
              key={index}
              style={{
                color: 'white',
                fontSize: '15px',
                fontWeight: '100',
                fontFamily: 'Montserrat',
                marginLeft: '28px',
              }}>
              {line}
            </div>
          ))}
        </div>
      </Box>
    </Stack>
  );
};

RelatedImagesSection.propTypes = {
  insightImages: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      textLines: PropTypes.arrayOf(PropTypes.string).isRequired,
      toPage: PropTypes.string.isRequired,
    })
  ).isRequired,
  teamName: PropTypes.string,
};

export default RelatedImagesSection;
