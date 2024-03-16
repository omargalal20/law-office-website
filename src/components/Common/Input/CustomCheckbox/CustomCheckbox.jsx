import React, { useState } from 'react';
import { Checkbox, Form } from 'antd';
import './Checker.css'; // Importing custom CSS file

const Checker = () => {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = e => {
    setIsChecked(e.target.checked);
  };

  const validateCheckBox = () => {
    if (isChecked) {
      return Promise.resolve();
    }
    return Promise.reject('Please Check The Box !');
  };

  return (
    <Form.Item
      name={"Confirmation"}
      rules={[
        { validator: validateCheckBox },
      ]}
    >
      <Checkbox
        className={isChecked ? 'custom-checkbox checked' : 'custom-checkbox'}
        style={{
          marginTop: '20px',
        }}
        onChange={onChange}
      >
        <p style={{ width: '450px' }}>
          By clicking this box, Afifi Law Office will only process your personal
          data in relation to this specific enquiry according to our Privacy
          Policy. *
        </p>
      </Checkbox>
    </Form.Item>
  );
};

export default Checker;
