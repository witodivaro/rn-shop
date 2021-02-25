import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const CustomButton = ({green, style, children, ...otherProps}) => {
  const styleProps = {green};

  return (
    <TouchableOpacity
      style={[styles.button, getButtonStyling(styleProps)]}
      {...otherProps}>
      <Text style={[styles.text, getTextStyling(styleProps)]}>{children}</Text>
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
