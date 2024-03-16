import { useState } from 'react';
import PropTypes from 'prop-types';
import './CustomForm.css';

import CustomInput from '../Input/CustomInput';

import hoverableImageButtonIcon from '../../../assets/Images/Misc/hoverable-image-button-icon.svg';

import { Button, Form } from 'antd';

const CustomForm = ({ inputs, buttonText }) => {
  const [isHovered, setIsHovered] = useState(false);

  const onFinish = values => {
    console.log('Success:', values);
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
      {inputs.map((input, index) => (
        <CustomInput
          key={index}
          inputType={input.inputType}
          inputTitle={input.inputTitle}
          largeInput={input.largeInput}
        />
      ))}

      <Form.Item
        style={{
          marginTop: '35px',
          display: 'flex',
          justifyContent: 'flex-end',
        }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          <Button htmlType="submit" className="button">
            {buttonText}
          </Button>
          <div
            style={{
              transition: 'transform 0.5s ease',
              transform: isHovered ? 'translateX(10px)' : 'translateX(0)',
            }}>
            <img src={hoverableImageButtonIcon} alt="icon" />
          </div>
        </div>
      </Form.Item>
    </Form>
  );
};

CustomForm.propTypes = {
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      inputType: PropTypes.number.isRequired,
      inputTitle: PropTypes.string,
      largeInput: PropTypes.bool,
    })
  ).isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default CustomForm;
