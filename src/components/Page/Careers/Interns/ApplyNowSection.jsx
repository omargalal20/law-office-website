import practicebg3 from '../../../../assets/Images/PracticeArea/Rectangle 36.svg';

import Stack from '@mui/material/Stack';

const ApplyNowSection = () => {
  return (
    <Stack direction={'row'} spacing={5}>
      <div
        style={{
          height: 223,
          width: '100%',
          background: '#09283F',
          position: 'relative', // Add position relative to the outer div
        }}>
        <div style={{ height: '223px', position: 'relative' }}>
          <img
            src={practicebg3}
            alt="bg"
            style={{ width: '842px', height: '223px' }}
          />
          <div
            style={{
              height: 107,
              width: '404px',
              background: '#702082',
              position: 'absolute',
              top: 0, // Position from the top
              left: 841, // Position from the left
            }}></div>
          <p
            style={{
              color: 'white',
              fontSize: '30px',
              top: 62, // Position from the top
              left: 841, // Position from the left
              position: 'absolute',
              width: '340px',
              marginLeft: '16px',
              fontStyle: 'Montserrat',
            }}>
            Application Available{' '}
            <span
              style={{
                color: 'white',
                fontSize: '40px',
                fontWeight: 100,
              }}>
              From 1/6/2024 Till 15/6/2024
            </span>
          </p>
          <p
            style={{
              color: 'white',
              fontWeight: 100,
              fontSize: 18,
              width: '99px',
              position: 'absolute',
              bottom: 16, // Position from the top
              right: 24, // Position from the left
            }}>
            Apply Now
          </p>
        </div>
      </div>
    </Stack>
  );
};

export default ApplyNowSection;
