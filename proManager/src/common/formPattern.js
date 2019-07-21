import React from 'react';
import { Input } from 'react-native-elements';

function formElements({
 elementType, onChange, elementConfig, isSecure 
}) {
  switch (elementType) {
    case 'Input':
      return (
        <Input
          secureTextEntry={isSecure || false}
          onChange={onChange}
          {...elementConfig}
        />
      );
      break;
    default:
      return <Input onChange={onChange} {...elementConfig} />;
  }
}

export default formElements;
