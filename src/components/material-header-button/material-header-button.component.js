import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';

import Icon from 'react-native-vector-icons/MaterialIcons';

const MaterialHeaderButton = (props) => {
  return <HeaderButton IconComponent={Icon} iconSize={23} {...props} />;
};

export default MaterialHeaderButton;
