import PropTypes from 'prop-types';

const SectionHeaderWithoutArrow = ({ sectionInfo }) => {
  const { sectionHeaderTitle, sectionHeaderText, sectionStyle } = sectionInfo;

  return (
    <p style={sectionStyle}>
      {sectionHeaderText}{' '}
      <span style={{ fontWeight: 100, fontStyle: 'italic' }}>
        {sectionHeaderTitle}
      </span>
    </p>
  );
};

SectionHeaderWithoutArrow.propTypes = {
  sectionInfo: PropTypes.shape({
    sectionHeaderTitle: PropTypes.string.isRequired,
    sectionHeaderText: PropTypes.string.isRequired,
    sectionStyle: PropTypes.object.isRequired,
  }).isRequired,
};

export default SectionHeaderWithoutArrow;
