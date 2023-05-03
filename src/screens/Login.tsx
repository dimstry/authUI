/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import MyButton from '../components/MyButton';

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
            Your Email
          </Text>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#fff"
            style={{
              backgroundColor: '#1A1E1E',
              padding: 15,
              color: '#fff',
            }}
          />
        </View>
        {/* input pw */}
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
            Password
          </Text>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#fff"
            style={{
              backgroundColor: '#1A1E1E',
              padding: 15,
              color: '#fff',
            }}
          />
        </View>
        <Text style={{color: '#fff', fontSize: 14, textAlign: 'right'}}>
          Forgot Password?
        </Text>
        {/* register */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#fff', fontSize: 14, textAlign: 'center'}}>
            Don't have an account?{' '}
          </Text>
          <TouchableOpacity onPress={() => setMode('register')}>
            <Text style={{color: '#FFD93D', fontSize: 14, textAlign: 'center'}}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
        {/* buttom login */}
        <MyButton title="Login" />
      </View>
    </View>
  );
};

export default Login;
