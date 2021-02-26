import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import RegularText from '../../components/regular-text/regular-text.component';
import useInputs from '../../hooks/use-inputs';
import {createProductsItemByIdSelector} from '../../redux/products/products.selectors';

const EditProductScreen = () => {
  const route = useRoute();
  const itemId = route.params.itemId;
  const item = useSelector(createProductsItemByIdSelector(itemId));

  const {title, price, imageUrl, description} = item;
  const [inputs, onChangeText] = useInputs({
    title: '',
  });

  const createTextChangeHandler = (name) => (text) => {
    onChangeText(text, name);
  };
  console.log(inputs);

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.preview}>
        <Image
          style={styles.image}
          source={{uri: imageUrl}}
          resizeMode="cover"
        />
        <View style={styles.inputGroup}>
          <RegularText style={styles.label}>Title:</RegularText>
          <TextInput
            style={styles.textInput}
            onChangeText={createTextChangeHandler('title')}
            value={inputs.title}
          />
        </View>
        <View style={styles.inputGroup}>
          <RegularText style={styles.label}>Image URL:</RegularText>
          <TextInput style={styles.textInput} value={imageUrl} />
        </View>
        <View style={styles.inputGroup}>
          <RegularText style={styles.label}>Price:</RegularText>
          <TextInput style={styles.textInput} value={price.toString()} />
        </View>
        <View style={styles.inputGroup}>
          <RegularText style={styles.label}>Description:</RegularText>
          <TextInput style={styles.textInput} value={description} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    minHeight: 200,
  },
  inputGroup: {
    marginTop: 20,
  },
  textInput: {
    borderBottomWidth: 1,
  },
  preview: {
    paddingHorizontal: 20,
  },
});

export default EditProductScreen;
