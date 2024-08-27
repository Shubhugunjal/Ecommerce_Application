import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../Styles/componentStyles/submitButtonStyles';

const SubmitButton = ({label, handleSubmit}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleSubmit}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
