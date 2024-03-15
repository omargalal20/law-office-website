import PropTypes from 'prop-types';

import HeaderBar from '../../Layout/Header/header';

const HeroMainTeam = ({
  backgroundImage,
  primaryHeading,
  secondaryHeading,
  subHeading,
}) => {
  // Splitting the heroPrimaryHeading on "/"
  const [firstPart, secondPart] = primaryHeading.split(' / ');

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: '975px', // Adjust the height as needed
      }}>
      <img
        src={backgroundImage}
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
        {secondaryHeading}
      </p>

      <p
        style={{
          position: 'absolute',
          top: 540,
          left: 80,
          right: 0,
          color: 'white',
          fontSize: '50px',
          width: '396px',
          fontWeight: 300,
          fontFamily: 'Montserrat',
        }}>
        {/* Rendering first part */}
        {firstPart} {/* Rendering second part in italic */}
        <span style={{ fontStyle: 'italic', fontWeight: 100 }}>
          {secondPart}
        </span>
      </p>

      <p
        style={{
          position: 'absolute',
          top: 712,
          left: 80,
          right: 0,
          color: 'white',
          fontSize: '18px',
          width: '50%',
          fontStyle: 'italic',
          fontWeight: '400',
          fontFamily: 'Montserrat',
        }}>
        {subHeading}
      </p>
    </div>
  );
};

HeroMainTeam.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  primaryHeading: PropTypes.string.isRequired,
  secondaryHeading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
};

export default HeroMainTeam;
