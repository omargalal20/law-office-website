import PropTypes from 'prop-types';

import { FormConstants } from '../../../constants/Constants';

import CustomText from './CustomText/CustomText';
import CustomCheckbox from './CustomCheckbox/CustomCheckbox';
import CustomUpload from './CustomUpload/CustomUpload';

const CustomInput = ({ inputType, inputTitle, largeInput = false }) => {
  switch (inputType) {
    case FormConstants.TEXT:
      return <CustomText title={inputTitle} largeInput={largeInput} />;
    case FormConstants.UPLOAD:
      return <CustomUpload title={inputTitle} />;
    case FormConstants.CHECKER:
      return <CustomCheckbox />;
    default:
      return null;
  }
};

CustomInput.propTypes = {
  inputType: PropTypes.string.isRequired,
  inputTitle: PropTypes.string.isRequired,
  largeInput: PropTypes.bool,
};

export default CustomInput;
