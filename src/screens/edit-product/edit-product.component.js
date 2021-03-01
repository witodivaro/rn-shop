import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import RegularText from '../../components/regular-text/regular-text.component';
import useInputs from '../../hooks/use-inputs';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {createProductsItemByIdSelector} from '../../redux/products/products.selectors';
import MaterialHeaderButton from '../../components/material-header-button/material-header-button.component';
import {addProduct, changeProduct} from '../../redux/products/products.actions';

const EditProductScreen = () => {
  const route = useRoute();
  const itemId = route.params.itemId;
  const item = useSelector(createProductsItemByIdSelector(itemId));
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {title, imageUrl, price, description} = item || {
    price: '',
    imageUrl: '',
    description: '',
    title: '',
  };

  const [inputs, onChangeText] = useInputs({
    title,
    imageUrl,
    price: price.toString(),
    description,
  });

  const createTextChangeHandler = (name) => (text) => {
    onChangeText(text, name);
  };

  const createNumberOnlyTextChangeHandler = (name) => (text) => {
    const formattedText = text.replace(/\D/g, '');
    return onChangeText(formattedText, name);
  };

  const saveProductHandler = () => {
    if (itemId) {
      dispatch(changeProduct(itemId, inputs));
    } else if (itemId === null) {
      dispatch(addProduct(inputs));
    }
    navigation.goBack();
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item iconName="save" onPress={saveProductHandler} />
        </HeaderButtons>
      ),
    });
  }, [inputs]);

  const renderedImage = imageUrl ? (
    <Image style={styles.image} source={{uri: imageUrl}} resizeMode="cover" />
  ) : null;

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.preview}>
        {renderedImage}
        <View style={styles.inputGroup}>
          <RegularText style={styles.label}>Title:</RegularText>
          <TextInput
            multiline={true}
            style={styles.textInput}
            autoCompleteType="off"
            onChangeText={createTextChangeHandler('title')}
            value={inputs.title}
          />
        </View>
        <View style={styles.inputGroup}>
          <RegularText style={styles.label}>Image URL:</RegularText>
          <TextInput
            multiline={true}
            style={styles.textInput}
            autoCompleteType="off"
            onChangeText={createTextChangeHandler('imageUrl')}
            value={inputs.imageUrl}
          />
        </View>
        <View style={styles.inputGroup}>
          <RegularText style={styles.label}>Price:</RegularText>
          <TextInput
            style={styles.textInput}
            autoCompleteType="off"
            onChangeText={createNumberOnlyTextChangeHandler('price')}
            value={inputs.price}
          />
        </View>
        <View style={styles.inputGroup}>
          <RegularText style={styles.label}>Description:</RegularText>
          <TextInput
            multiline={true}
            style={styles.textInput}
            value={inputs.description}
            onChangeText={createTextChangeHandler('description')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
  },
  image: {
    minHeight: 200,
    minWidth: '100%',
  },
  inputGroup: {
    marginTop: 20,
  },
  textInput: {
    borderBottomWidth: 1,
    paddingBottom: 0,
  },
  preview: {
    paddingHorizontal: 20,
    width: '100%',
  },
});

export default EditProductScreen;
