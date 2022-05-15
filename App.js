import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {CustomInput} from './src/CustomInput';

import useFormValidation from './src/useFormValidation';
import validateAuth from './src/validateAuth';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  input: {
    borderColor: 'black',
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    width: '90%',
    paddingHorizontal: 20,
    fontSize: 17,
  },
  inputError: {
    borderColor: 'red',
    borderWidth: 1,
  },
  error: {
    marginTop: 7,
    marginBottom: 13,
    color: 'red',
  },
});
const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  password: '',
};

function App() {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    handleOnChange,
    values,
    errors,
    isSubmitting,
  } = useFormValidation(INITIAL_STATE, validateAuth);
  isSubmitting && console.log({isSubmitting});
  return (
    <View style={styles.container}>
      <CustomInput
        name="firstName"
        errors={errors}
        values={values}
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleOnChange={handleOnChange}
        placeholder="Your first name"
      />
      <CustomInput
        name="lastName"
        errors={errors}
        values={values}
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleOnChange={handleOnChange}
        placeholder="Your last name"
      />
      <CustomInput
        name="phone"
        errors={errors}
        values={values}
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleOnChange={handleOnChange}
        placeholder="Your phone, like +70001234567"
      />
      <CustomInput
        name="email"
        errors={errors}
        values={values}
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleOnChange={handleOnChange}
        placeholder="Your email address"
      />
      <CustomInput
        name="password"
        errors={errors}
        values={values}
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleOnChange={handleOnChange}
        placeholder="Choose a safe password"
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

export default App;
