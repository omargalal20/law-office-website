import PropTypes from 'prop-types';

import { Typography } from 'antd';
import { Form, Input } from 'antd';

const CustomPhoneNumber = ({ title }) => {
  const validatePhoneNumber = (rule, value) => {
    const egyptianPhoneNumberPattern = /^01[0-2|5]\d{8}$/;
    if (egyptianPhoneNumberPattern.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject('Invalid Egyptian phone number!');
  };

  return (
    <>
      <Typography.Title
        style={{
          fontSize: '25px',
          fontFamily: 'Montserrat',
          fontWeight: 400,
          marginTop: '30px',
        }}>
        {title}
      </Typography.Title>
      <Form.Item
        name={'Phone Number'}
        rules={[
          { required: true, message: 'Please input your phone number!' },
          { validator: validatePhoneNumber },
        ]}>
        <Input
          style={{
            borderColor: '#09283F',
            height: '64px',
            border: '2px solid',
          }}
        />
      </Form.Item>
    </>
  );
};

CustomPhoneNumber.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CustomPhoneNumber;
