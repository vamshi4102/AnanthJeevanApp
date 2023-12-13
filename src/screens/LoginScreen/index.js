import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import CheckBox from '@react-native-community/checkbox';
import {EyeIcon, EyeSlashIcon} from 'react-native-heroicons/solid';
import colors from '../../assets/colors';
import { useNavigation } from '@react-navigation/native';
const LoginScreen = () => {
  const navigation = useNavigation();
  const [ShowPassword, setShowPassword] = useState(false);
  const HandleShowPassword = () => {
    setShowPassword(!ShowPassword);
  };
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const HandleSignIn = () => { 
    alert('Clicked Submit')
   }
   const [RememberMe, setRememberMe] = useState(false)
  return (
    <ImageBackground
      source={require('../../assets/images/background.png')}
      style={styles.container}>
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
            secureTextEntry={ShowPassword?false:true}
          />
          <TouchableOpacity onPress={HandleShowPassword} style={styles.eye_icon}>
            {ShowPassword ? (
              <EyeSlashIcon size={20} color={colors.white} />
            ) : (
              <EyeIcon size={20} color={colors.white} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.remember_row}>
          <Text style={styles.remember_text}>Remember Me</Text>
          <CheckBox
            value={RememberMe}
              onValueChange={()=>setRememberMe(!RememberMe)}
            style={styles.remember_checkbox}
          />
        </View>
        <View style={styles.submit_btns}>
          <TouchableOpacity style={styles.forgot_password}>
            <Text style={styles.forgot_password_text}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.SignIn} onPress={HandleSignIn}>
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
        <TouchableOpacity style={styles.sign_up} onPress={()=>navigation.navigate('Counselling')}>
          <Text style={styles.signup_text}>Anonymous Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
export default LoginScreen;
