import React from 'react';
import {Modal, StyleSheet, TouchableOpacity} from 'react-native';

const OrderModal = ({visible, setVisible, children}) => {
  const hideModalHandler = () => {
    setVisible(false);
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={hideModalHandler}>
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={hideModalHandler}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {}}
          style={styles.modalView}>
          {children}
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
  },
});

export default OrderModal;
