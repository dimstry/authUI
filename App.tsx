/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
import {
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import React, {useState} from 'react';
import Login from './src/screens/Login';
import Register from './src/screens/Register';

const App = () => {
  const [show, setShow] = useState(false);
  // mode login dan register
  const [mode, setMode] = useState('login');
  const handleMode = (mode: string) => {
    if (mode === 'login') {
      return <Login setMode={setMode} />;
    } else {
      return <Register setMode={setMode} />;
    }
  };
  return (
    <ImageBackground
      source={require('./src/assets/img/Background.png')}
      style={{width: '100%', height: '100%'}}>
      <StatusBar barStyle="light-content" />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        {!show && (
          <Text
            style={{
              color: '#FFD93D',
              fontSize: 30,
              fontWeight: 'bold',
              textAlign: 'center',
              shadowColor: '#000',
            }}>
            Golden Time
          </Text>
        )}
      </View>
      <TouchableOpacity
        onPress={() => {
          setShow(!show);
        }}
        style={{
          backgroundColor: '#121515',
          width: 50,
          height: 5,
          marginBottom: 15,
          alignSelf: 'center',
          borderRadius: 2.5,
        }}
      />
      <View
        style={
          show === false
            ? {
                backgroundColor: '#121515',
                padding: 20,
              }
            : {
                backgroundColor: '#121515',
                padding: 20,
                height: '80%',
              }
        }>
        {show === true && handleMode(mode)}
        {/* tombol show */}
        {!show && (
          <TouchableOpacity
            onPress={() => {
              setShow(!show);
            }}>
            <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
              Sign to your account
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </ImageBackground>
  );
};

export default App;
