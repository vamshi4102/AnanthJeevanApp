import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import CheckBox from '@react-native-community/checkbox';
// import  from 'react-native-heroicons'
const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/aj_logo.png')}
        style={styles.logo}
      />
      <TextInput style={styles.input} placeholder="Email" />
      <View style={styles.password_container}>
        <TextInput style={styles.password} placeholder="Password" />
        <Text style={styles.eye_icon}>eye</Text>
      </View>
      <View style={styles.remember_row}>
        <Text style={styles.remember_text}>Remember Me</Text>
        <CheckBox
          value={true}
          //   onValueChange={setSelection}
          style={styles.remember_checkbox}
        />
      </View>
      <View style={styles.submit_btns}>
        <TouchableOpacity style={styles.forgot_password}>
          <Text style={styles.forgot_password_text}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.SignIn}>
          <Text style={styles.SignIn_text}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.login_gmail_row}>
        <Image 
          source={require('../../assets/images/google_logo.png')}
          style={styles.google_logo}
        />
        <Text style={styles.login_gmail}>Login with gmail</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sign_up}>
        <Text style={styles.signup_text}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sign_up}>
        <Text style={styles.signup_text}>Anonymous Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
