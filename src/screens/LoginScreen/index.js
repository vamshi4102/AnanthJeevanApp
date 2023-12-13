import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import CheckBox from '@react-native-community/checkbox';
import {EyeIcon, EyeSlashIcon} from 'react-native-heroicons/solid';
import colors from '../../assets/colors';
const LoginScreen = () => {
  const [ShowPassword, setShowPassword] = useState(false);
  const HandleShowPassword = () => {
    setShowPassword(!ShowPassword);
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/aj_logo.png')}
        style={styles.logo}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={colors.white}
      />
      <View style={styles.password_container}>
        <TextInput
          style={styles.password}
          placeholder="Password"
          placeholderTextColor={colors.white}
        />
        <TouchableOpacity onPress={HandleShowPassword}>
          {ShowPassword ? (
            <EyeSlashIcon
              size={20}
              color={colors.white}
            />
          ) : (
            <EyeIcon  size={20} color={colors.white} />
          )}
        </TouchableOpacity>
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
