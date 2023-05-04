/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput} from 'react-native';

type PropsFormInput = {
  label: string;
  placeholder: string;
  security?: boolean;
  isEmail?: boolean;
};

const FormInput = ({label, placeholder, security}: PropsFormInput) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}>
      <Text
        style={{
          color: '#fff',
          fontSize: 14,
          lineHeight: 16,
          letterSpacing: 1.6,
          textTransform: 'uppercase',
        }}>
        {label}
      </Text>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={security || false}
        placeholderTextColor="#fff"
        dataDetectorTypes={'address'}
        cursorColor="green"
        style={{
          backgroundColor: '#1A1E1E',
          padding: 15,
          color: '#fff',
        }}
      />
    </View>
  );
};

export default FormInput;
