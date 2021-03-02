import React, {useEffect, useReducer} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Image, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {createProductsItemByIdSelector} from '../../redux/products/products.selectors';
import MaterialHeaderButton from '../../components/material-header-button/material-header-button.component';
import {addProduct, changeProduct} from '../../redux/products/products.actions';
import CustomInput from '../../components/custom-input/custom-input.component';
import {useCallback} from 'react';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
  switch (action.type) {
    case FORM_INPUT_UPDATE:
      const updatedValidiets = {
        ...state.inputValidities,
        [action.name]: action.isValid,
      };

      let formIsValid = Object.values(updatedValidiets).indexOf(false) === -1;

      return {
        ...state,
        inputValues: {
          ...state.inputValues,
          [action.name]: action.value,
        },
        inputValidities: updatedValidiets,
        formIsValid,
      };

    default:
      return state;
  }
};

const EditProductScreen = () => {
  const route = useRoute();
  const itemId = route.params.itemId;
  const item = useSelector(createProductsItemByIdSelector(itemId));
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      title: item ? item.title : '',
      imageUrl: item ? item.imageUrl : '',
      description: item ? item.description : '',
      price: item ? item.price.toString() : '0',
    },
    inputValidities: {
      title: !!item,
      imageUrl: !!item,
      description: !!item,
      price: !!item,
    },
    formIsValid: !!item,
  });

  const inputChangeHandler = useCallback(
    (id, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        name: id,
        isValid: inputValidity,
        value: inputValue,
      });
    },
    [dispatchFormState],
  );

  const saveProductHandler = () => {
    if (itemId) {
      dispatch(changeProduct(itemId, formState.inputValues));
    } else if (itemId === null) {
      dispatch(addProduct(formState.inputValues));
    }
    navigation.goBack();
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        formState.formIsValid ? (
          <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
            <Item iconName="save" onPress={saveProductHandler} />
          </HeaderButtons>
        ) : null,
    });
  }, [formState, saveProductHandler]);

  const renderedImage =
    item && item.imageUrl ? (
      <Image
        style={styles.image}
        source={{uri: item.imageUrl}}
        resizeMode="cover"
      />
    ) : null;

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.preview}>
        {renderedImage}
        <CustomInput
          id="title"
          label="Title"
          initialValue={item.title ? item.title : ''}
          initialValidity={!!item}
          onInputChange={inputChangeHandler}
          required
          error="Input valid title"
        />
        <CustomInput
          id="imageUrl"
          label="Image URL"
          multiline
          autoCompleteType="off"
          initialValue={item.imageUrl ? item.imageUrl : ''}
          initialValidity={!!item}
          onInputChange={inputChangeHandler}
          required
          error="Input valid image url"
        />
        <CustomInput
          id="price"
          label="Price"
          autoCompleteType="off"
          keyboardType="decimal-pad"
          initialValue={item.price ? item.price.toString() : '0'}
          initialValidity={!!item}
          onInputChange={inputChangeHandler}
          min={0}
          required
          error="Input valid price"
        />
        <CustomInput
          id="description"
          label="Description"
          multiline={true}
          initialValue={item.description ? item.description : ''}
          initialValidity={!!item}
          onInputChange={inputChangeHandler}
          required
          minLength={5}
          error="Input valid description"
        />
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

  preview: {
    paddingHorizontal: 20,
    width: '100%',
  },
});

export default EditProductScreen;
