import PropTypes from 'prop-types';

import HoverableImageWith from '../HoverableImage/hvImgwith';

import Stack from '@mui/material/Stack';

const TripleImageGrid = ({ images }) => {
  const [firstImage, secondImage, thirdImage] = images;

  return (
    <Stack direction={'row'} spacing={4} sx={{ marginBottom: '20px' }}>
      <HoverableImageWith
        key={'Technology'}
        src={firstImage.img}
        width={'100%'}
        height={'692px'}
        text={firstImage.textLines}
        toPage={firstImage.toPage}
      />

      <Stack spacing={4}>
        <HoverableImageWith
          key={'Oil & Gas'}
          src={secondImage.img}
          width={'100%'}
          height={'318px'}
          text={secondImage.textLines}
          toPage={secondImage.toPage}
        />

        <HoverableImageWith
          key={'Renewable Energy'}
          src={thirdImage.img}
          width={'100%'}
          height={'318px'}
          text={thirdImage.textLines}
          toPage={thirdImage.toPage}
        />
      </Stack>
    </Stack>
  );
};

TripleImageGrid.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      textLines: PropTypes.arrayOf(PropTypes.string).isRequired,
      toPage: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TripleImageGrid;
