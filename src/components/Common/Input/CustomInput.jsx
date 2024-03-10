import { FormConstants } from "../../../constants/Constants";
import CustomText from "./CustomText/CustomText";
import CustomCheckbox from "./CustomCheckbox/CustomCheckbox";
import CustomUpload from "./CustomUpload/CustomUpload";

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

export default CustomInput