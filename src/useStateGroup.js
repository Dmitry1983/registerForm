import {useState} from 'react';

export const useStateGroup = initialState => {
  const [value, setValue] = useState(initialState);

  const changeValue = item => {
    setValue({...value, [item]: value[item]});
  };

  return {value, changeValue};
};
