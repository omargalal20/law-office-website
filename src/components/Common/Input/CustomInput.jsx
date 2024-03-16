import PropTypes from 'prop-types';

import { FormConstants } from '../../../constants/Constants';

import CustomText from './CustomText/CustomText';
import CustomCheckbox from './CustomCheckbox/CustomCheckbox';
import CustomUpload from './CustomUpload/CustomUpload';
import CustomPhoneNumber from './CustomPhoneNumber/CustomPhoneNumber';

const CustomInput = ({ inputType, inputTitle = '', largeInput = false }) => {
  switch (inputType) {
    case FormConstants.TEXT:
      return <CustomText title={inputTitle} largeInput={largeInput} />;
    case FormConstants.UPLOAD:
      return <CustomUpload title={inputTitle} />;
    case FormConstants.CHECKER:
      return <CustomCheckbox />;
    case FormConstants.PHONE_NUMBER:
      return <CustomPhoneNumber title={inputTitle} />;
    default:
      return null;
  }
};

CustomInput.propTypes = {
  inputType: PropTypes.number.isRequired,
  inputTitle: PropTypes.string,
  largeInput: PropTypes.bool,
};

export default CustomInput;
