import {useState} from 'react';

export const useStateGroup = initialState => {
  const [value, setValue] = useState(initialState);

  const changeValue = (key, item) => {
    setValue({...value, [key]: item});
  };

  return {value, changeValue};
};
