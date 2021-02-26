import {useState} from 'react';

const useInputs = (defaultInputs) => {
  const [inputs, setInputs] = useState(defaultInputs);

  const onChangeText = (text, name) => {
    setInputs({
      ...inputs,
      [name]: text,
    });
  };

  return [inputs, onChangeText];
};

export default useInputs;
