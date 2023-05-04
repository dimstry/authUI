/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';

import MyButton from '../components/MyButton';
import FormInput from '../components/FormInput';
import Action from '../components/Action';

const Login = ({setMode}: any) => {
  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          color: '#fff',
          fontSize: 30,
        }}>
        Login
      </Text>
      <Text
        style={{
          color: '#fff',
          fontSize: 20,
          marginTop: 5,
        }}>
        Sign to your account
      </Text>
      <View
        style={{
          marginTop: 50,
          display: 'flex',
          flexDirection: 'column',
          gap: 30,
        }}>
        {/* input email */}
        <FormInput label="Your Email" placeholder="Email" />
        {/* input pw */}
        <FormInput label="Password" placeholder="Password" security={true} />
        <Text style={{color: '#fff', fontSize: 14, textAlign: 'right'}}>
          Forgot Password?
        </Text>
        {/* action register */}
        <Action
          setMode={setMode}
          valueSetMode="register"
          title="Register"
          ask="Don't have an account?"
        />
        {/* buttom login */}
        <MyButton title="Login" />
      </View>
    </View>
  );
};

export default Login;
