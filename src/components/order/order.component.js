import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import RegularText from '../regular-text/regular-text.component';
import moment from 'moment';

import OrderItem from '../order-item/order-item.component';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useMemo} from 'react';

const Order = ({order}) => {
  const {items, total, date} = order;
  const [isExpanded, setIsExpanded] = useState(false);

  const dropdownHandler = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };

  const renderedDropdownIcon = isExpanded ? (
    <Icon name="keyboard-arrow-up" size={40} />
  ) : (
    <Icon name="keyboard-arrow-down" size={40} />
  );

  const renderedItems = useMemo(
    () => items.map((item) => <OrderItem key={item.id} item={item} />),
    [items],
  );

  const renderedItemsContainer = useMemo(() =>
    isExpanded ? <View style={styles.items}>{renderedItems}</View> : null,
  );

  return (
    <View style={styles.order}>
      <View style={styles.info}>
        <View style={styles.dateContaner}>
          <RegularText>
            {moment(date).format('MMMM Do YYYY h:mm A')}
          </RegularText>
        </View>
        <View style={styles.details}>
          <RegularText style={styles.total}>${total}</RegularText>
          <TouchableOpacity onPress={dropdownHandler}>
            {renderedDropdownIcon}
          </TouchableOpacity>
        </View>
      </View>
      {renderedItemsContainer}
    </View>
  );
};

const styles = StyleSheet.create({
  order: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    marginBottom: 10,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  total: {
    fontSize: 23,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Order;
