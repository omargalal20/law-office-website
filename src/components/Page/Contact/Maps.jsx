import map from '../../../assets/Images/Contact/Rectangle.png';
import line from '../../../assets/Images/Misc/Line 7.png';

import CloseIcon from '@mui/icons-material/Close';

const Maps = () => {
  return (
    <div>
      <p
        style={{
          fontWeight: 400,
          fontSize: '40px',
          fontFamily: 'Montserrat',
        }}>
        Cairo, Egypt
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div></div>
        <div>
          <CloseIcon style={{ width: '30px', height: '30px' }} />
        </div>
      </div>
      <div>
        <p
          style={{
            fontWeight: 400,
            fontSize: '20px',
            fontFamily: 'Montserrat',
          }}>
          6 Salah El Din St. Zamalek
        </p>
        <p
          style={{
            fontWeight: 400,
            fontSize: '20px',
            fontFamily: 'Montserrat',
          }}>
          11211 Cairo
        </p>
        <p
          style={{
            fontWeight: 400,
            fontSize: '20px',
            fontFamily: 'Montserrat',
          }}>
          Egypt
        </p>
        <p
          style={{
            fontWeight: 400,
            fontSize: '20px',
            fontFamily: 'Montserrat',
          }}>
          T +20 2 2735 4010F +20 2736 7717
        </p>
        <p
          style={{
            fontWeight: 400,
            fontSize: '20px',
            fontFamily: 'Montserrat',
          }}>
          info@afifioffice.com
        </p>
        <img src={line} alt="line" style={{ marginTop: 23 }} />
        <img src={map} alt="map" style={{ marginTop: 50 }} />
      </div>
    </div>
  );
};

export default Maps;
