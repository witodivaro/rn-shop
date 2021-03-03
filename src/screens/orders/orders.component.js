import React, {useMemo} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import OrderItem from '../../components/order/order.component';
import RegularText from '../../components/regular-text/regular-text.component';

import {selectUserOrders} from '../../redux/user/user.selectors';

const renderOrderItem = ({item}) => <OrderItem order={item} />;

const OrdersScreen = () => {
  const orders = useSelector(selectUserOrders);

  const renderedOrders = useMemo(
    () =>
      orders.length > 0 ? (
        <FlatList
          contentContainerStyle={styles.orderContainer}
          data={orders.reverse()}
          renderItem={renderOrderItem}
        />
      ) : (
        <RegularText style={styles.emptyMessage}>
          You haven't done any orders yet!
        </RegularText>
      ),
    [orders],
  );

  return <View style={styles.screen}>{renderedOrders}</View>;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  orderContainer: {
    padding: 20,
  },
  emptyMessage: {
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
  },
});

export default OrdersScreen;
