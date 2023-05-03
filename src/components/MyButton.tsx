/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';

const MyButton = ({title}: {title: string}) => {
  return (
    <View
      style={{
        backgroundColor: '#FFD93D',
        padding: 15,
        borderRadius: 10,
      }}>
      <Text
        style={{
          color: '#000',
          fontSize: 14,
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        {title}
      </Text>
    </View>
  );
};

export default MyButton;
