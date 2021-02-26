import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import RegularText from '../regular-text/regular-text.component';

const CustomButton = ({
  green,
  red,
  orange,
  icon,
  style,
  children,
  ...otherProps
}) => {
  const styleProps = {green, red, orange};

  const renderedIcon = icon ? (
    <Icon
      style={styles.icon}
      name={icon}
      size={23}
      color={getIconColor(styleProps)}
    />
  ) : null;

  return (
    <TouchableOpacity
      style={[styles.button, getButtonStyling(styleProps), style]}
      {...otherProps}>
      {renderedIcon}
      <RegularText style={[styles.text, getTextStyling(styleProps)]}>
        {children}
      </RegularText>
    </TouchableOpacity>
  );
};

const getButtonStyling = ({green, red, orange}) => {
  if (green)
    return {
      backgroundColor: '#73a657',
      borderColor: '#73a657',
    };

  if (red)
    return {
      backgroundColor: '#C21807',
      borderColor: '#c21807',
    };

  if (orange)
    return {
      backgroundColor: '#fd6a02',
      borderColor: '#fd6a02',
    };

  return {
    borderColor: '#444',
  };
};

const getTextStyling = ({green, red, orange}) => {
  if (green || red || orange)
    return {
      color: 'white',
    };

  return {
    color: '#444',
  };
};

const getIconColor = ({green, red, orange}) => {
  if (green || red || orange) return 'white';

  return 'black';
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: '#444',
    borderRadius: 15,
    flexDirection: 'row',
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 18,
  },
});

export default CustomButton;
