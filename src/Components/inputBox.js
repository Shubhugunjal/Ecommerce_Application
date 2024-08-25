import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from '../Styles/componentStyles/inputBoxStyles';

const InputBox = ({
  label,
  autoComplete,
  secureTextEntry = false,
  keyboardType,
  value,
  onChangeText,
}) => {
  return (
    <View style={styles.nameView}>
      <Text style={styles.nameText}>{label}</Text>
      <TextInput
        style={styles.nameInputBox}
        keyboardType={keyboardType}
        autoCorrect={false}
        autoComplete={autoComplete}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}></TextInput>
    </View>
  );
};

export default InputBox;
