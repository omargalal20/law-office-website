import React, { useState } from 'react';
import { Checkbox } from 'antd';
import './Checker.css'; // Importing custom CSS file

const Checker = () => {
    const [isChecked, setIsChecked] = useState(false);

    const onChange = (e) => {
        setIsChecked(e.target.checked);
    };

    return (
        <Checkbox
            className={isChecked ? "custom-checkbox checked" : "custom-checkbox"}
            onChange={onChange}
        >
            <p style={{ width: "450px" }}>
                By clicking this box, Afifi Law Office will only process your personal data in relation to this specific enquiry according to our Privacy Policy. *
            </p>
        </Checkbox>
    );
};

export default Checker;
