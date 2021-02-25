import React from 'react';
import {Text} from 'react-native';

const RegularText = ({style, children}) => {
  return (
    <Text style={[{fontFamily: 'Montserrat-Regular'}, style]}>{children}</Text>
  );
};

export default RegularText;
