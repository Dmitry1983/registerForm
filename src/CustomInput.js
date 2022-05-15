import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import R from 'ramda';

export const CustomInput = ({
  name,
  errors,
  values,
  handleChange,
  handleBlur,
  placeholder,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, errors[name] && styles.inputError]}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={e => handleChange([name], e)}
        onBlur={handleBlur}
        value={values[name]}
        placeholder={placeholder}
      />
      <Text style={styles.error}>{R.pathOr(' ', [name], errors)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {width: '100%', alignItems: 'center'},
  input: {
    borderColor: 'black',
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    width: '90%',
    paddingHorizontal: 20,
    fontSize: 18,
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
