/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

import MyButton from '../components/MyButton';
import FormInput from '../components/FormInput';
import Action from '../components/Action';

const Register = ({setMode}: any) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Text
        style={{
          color: '#fff',
          fontSize: 30,
        }}>
        Register
      </Text>
      <Text
        style={{
          color: '#fff',
          fontSize: 20,
          marginTop: 5,
        }}>
        Create your account
      </Text>
      <View
        style={{
          marginTop: 30,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}>
        {/* input name */}
        <FormInput label="Your Name" placeholder="Name" />
        {/* input email */}
        <FormInput label="Email" placeholder="Email" />
        {/* input pw */}
        <FormInput label="Password" placeholder="Password" security={true} />
        {/* Action Login */}
        <Action
          setMode={setMode}
          valueSetMode="login"
          title="Login"
          ask="Have account?"
        />
        {/* input confirm pw */}
        <MyButton title="Register" />
      </View>
    </View>
  );
};

export default Register;
