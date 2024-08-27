import {View, Text, SafeAreaView, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from '../../Styles/registerStyle';
import InputBox from '../../Components/inputBox';
import SubmitButton from '../../Components/submitButton';

const Register = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  //Functions
  const handleSubmit = () => {
    Alert.alert('Click on Register Button');
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.text}>Register</Text>
      <InputBox
        label="Name"
        value={values.name}
        onChangeText={text => {
          setValues({...values, name: text});
        }}
      />
      <InputBox
        label="Email"
        keyboardType="email-address"
        autoComplete="email"
        value={values.email}
        onChangeText={text => {
          setValues({...values, email: text});
        }}
      />
      <InputBox
        label="Password"
        secureTextEntry={true}
        autoComplete="password"
        value={values.password}
        onChangeText={text => {
          setValues({...values, password: text});
        }}
      />
      <SubmitButton label="Register" handleSubmit={handleSubmit} />
      <Text style={styles.lastText}>
        Already Register? <Text style={styles.lastLoginText}>LOGIN</Text>
      </Text>
    </SafeAreaView>
  );
};

export default Register;
