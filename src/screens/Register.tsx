/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {View, Text, TextInput} from 'react-native';
import MyButton from '../components/MyButton';

const Register = () => {
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
          marginTop: 50,
          display: 'flex',
          flexDirection: 'column',
          gap: 30,
        }}>
        {/* input name */}
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
            Your Name
          </Text>
          <TextInput
            placeholder="Name"
            placeholderTextColor="#fff"
            style={{
              backgroundColor: '#1A1E1E',
              padding: 15,
              color: '#fff',
            }}
          />
        </View>
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
            Email{' '}
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
        {/* input confirm pw */}
        <MyButton title="Register" />
      </View>
    </View>
  );
};

export default Register;
