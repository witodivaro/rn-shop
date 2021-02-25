import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

import RegularText from '../regular-text/regular-text.component';

const CustomButton = ({green, style, children, ...otherProps}) => {
  const styleProps = {green};

  return (
    <TouchableOpacity
      style={[styles.button, getButtonStyling(styleProps)]}
      {...otherProps}>
      <RegularText style={[styles.text, getTextStyling(styleProps)]}>
        {children}
      </RegularText>
    </TouchableOpacity>
  );
};

const getButtonStyling = ({green}) => {
  if (green)
    return {
      backgroundColor: '#73a657',
      borderColor: '#73a657',
    };

  return {
    borderColor: '#444',
  };
};

const getTextStyling = ({green}) => {
  if (green)
    return {
      color: 'white',
    };

  return {
    color: '#444',
  };
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: '#444',
    borderRadius: 15,
  },
  text: {
    fontSize: 18,
  },
});

export default CustomButton;
