import React, {useReducer, useEffect} from 'react';
import {useCallback} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

import RegularText from '../regular-text/regular-text.component';

const INPUT_TEXT_CHANGE = 'INPUT_TEXT_CHANGE';
const INPUT_BLUR = 'INPUT_BLUR';

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_TEXT_CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
        touched: false,
      };

    case INPUT_BLUR:
      return {
        ...state,
        touched: true,
      };

    default:
      return state;
  }
};

const CustomInput = (props) => {
  const [inputState, dispatchInputState] = useReducer(inputReducer, {
    value: props.initialValue,
    isValid: props.initialValidity,
    touched: false,
  });

  const {onInputChange, id} = props;

  useEffect(() => {
    if (inputState.touched) {
      onInputChange(id, inputState.value, inputState.isValid);
    }
  }, [inputState]);

  const changeTextHandler = (text) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true;
    if (props.required && text.trim().length === 0) {
      isValid = false;
    }
    if (props.email && !emailRegex.test(text.toLowerCase())) {
      isValid = false;
    }
    if (props.min != null && +text < props.min) {
      isValid = false;
    }
    if (props.max != null && +text > props.max) {
      isValid = false;
    }
    if (props.minLength != null && text.length < props.minLength) {
      isValid = false;
    }

    dispatchInputState({
      type: INPUT_TEXT_CHANGE,
      isValid: isValid,
      value: text,
    });
  };

  const inputBlurHandler = useCallback(() => {
    dispatchInputState({
      type: INPUT_BLUR,
    });
  }, [dispatchInputState]);

  const renderedError =
    inputState.isValid || !inputState.touched ? null : (
      <RegularText style={styles.error}>{props.error}</RegularText>
    );
  return (
    <View style={styles.inputGroup}>
      <RegularText style={styles.label}>{props.label}:</RegularText>
      <TextInput
        {...props}
        onChangeText={changeTextHandler}
        onBlur={inputBlurHandler}
        style={[styles.textInput, props.style]}
        value={inputState.value}
      />
      {renderedError}
    </View>
  );
};

const styles = StyleSheet.create({
  inputGroup: {
    marginTop: 20,
  },
  textInput: {
    borderBottomWidth: 1,
    paddingBottom: 0,
  },
  error: {
    textAlign: 'right',
    marginTop: 5,
    color: 'rgb(200, 0, 0)',
  },
});

export default CustomInput;
