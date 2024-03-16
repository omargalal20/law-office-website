import PropTypes from 'prop-types';

import { Input, Typography, Form } from 'antd';

const CustomText = ({ title, largeInput = false }) => {
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
        name={title}
        rules={[
          {
            required: true,
            message: 'Please input ' + title + ' !',
          },
        ]}
      >
        {largeInput ? (
          <Input
            style={{
              borderColor: '#09283F',
              height: '131px',
              border: '2px solid',
            }}
          />
        ) : (
          <Input
            style={{
              borderColor: '#09283F',
              height: '64px',
              border: '2px solid',
            }}
          />
        )}
      </Form.Item>
    </>
  );
};

CustomText.propTypes = {
  title: PropTypes.string.isRequired,
  largeInput: PropTypes.bool,
};

export default CustomText;
