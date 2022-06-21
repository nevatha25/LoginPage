import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LoginButton from '../../../components/elements/LoginButton'
export default function Login() {
  const [userName, onChangeUserName] = useState('');
  return (
    <SafeAreaView style={styles.loginpage}>
      <StatusBar animated={true} translucent backgroundColor="#00639D" />
      <View style={styles.button}>
        <ImageBackground
          source={require('../../../assests/images/logo-login.png')}
          style={styles.images}
        />
      </View>
      <View style={styles.skipContent}>
        <TouchableOpacity style={styles.skipButton} activeOpacity={0.6}>
          <Text style={styles.skipText}>Skip</Text>
          <TouchableOpacity style={styles.skipicon} activeOpacity={0.7}>
            <Text style={styles.textIcon}>i</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <View style={styles.loginHeading}>
        <View style={styles.headings}>
          <Text style={styles.first}>Hey!{'\n'}Welcome to</Text>
          <Text style={styles.second}>Squarefoot</Text>
          <Text style={styles.third}>
            Get yourself logged in for a seamless experience
          </Text>
        </View>
      </View>
      <View style={styles.loginForm}>
        <Text style={styles.inputLabel}>Username</Text>
        <TextInput
          allowFontScaling={false}
          style={styles.inputData}
          onChangeText={onChangeUserName}
          value={userName}
        />
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          allowFontScaling={false}
          style={styles.inputData}
          onChangeText={onChangeUserName}
          value={userName}
        />
        <View style={styles.forgotPassword}>
          <TouchableOpacity activeOpacity={0.6}>
            <Text style={styles.forgoText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <LoginButton/>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  loginpage: {
    backgroundColor: '#00639D',
    ...Platform.select({
      android: {
        paddingTop: 25,
      },
    }),
  },
  images: {
    resizeMode: 'contain',
    height: 300,
    width: '100%',
    position: 'absolute',
    backgroundColor: '#00639D',
  },
  skipContent: {
    backgroundColor: '#00639D',
    width: '100%',
  },
  skipButton: {
    paddingRight: 10,
    paddingTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  skipicon: {
    width: 20,
    height: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#ffffff66',
  },
  skipText: {
    marginRight: 6,
    color: '#fff',
    fontFamily: 'Manrope-Bold',
  },
  textIcon: {
    color: 'red',
  },
  headings: {
    paddingHorizontal: 25,
  },
  first: {
    paddingTop: 90,
    fontSize: 27,
    color: 'white',
  },
  second: {
    fontSize: 43,
    color: 'white',
  },
  third: {
    paddingTop: 31,
    fontSize: 12,
    color: '#fff',
    fontFamily: 'Manrope-Regular',
    maxWidth: 260,
  },
  loginForm: {
    paddingHorizontal: 25,
    paddingTop: 85,
  },
  inputLabel: {
    fontSize: 10,
    color: '#fff',
    fontFamily: 'Manrope-Medium',
    marginBottom: 7,
  },
  inputData: {
    fontFamily: 'Manrope-SemiBold',
    paddingHorizontal: 16,
    marginBottom: 30,
    fontSize: 12,
    height: 50,
    borderRadius: 10,
    borderColor: '#ffffff33',
    borderWidth: 1,
    position: 'relative',
    color: '#fff',
    backgroundColor: '#00446c26',
  },
  forgotPassword: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  forgoText: {
    paddingBottom:80,
    fontSize: 12,
    fontFamily: 'Manrope-SemiBold',
    color: '#fff',
  },
});
