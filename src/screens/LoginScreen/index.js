import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import CheckBox from '@react-native-community/checkbox';
import {EyeIcon, EyeSlashIcon} from 'react-native-heroicons/solid';
import colors from '../../assets/colors';
import {useNavigation} from '@react-navigation/native';
const LoginScreen = () => {
  const navigation = useNavigation();
  const [ShowPassword, setShowPassword] = useState(false);
  const HandleShowPassword = () => {
    setShowPassword(!ShowPassword);
  };
  const [Email, setEmail] = useState('test@test.com');
  const [EmailError, setEmailError] = useState('');
  const [Password, setPassword] = useState('@test890');
  const [PasswordError, setPasswordError] = useState('');
  const [ActionType, setActionType] = useState('');
  const [Message, setMessage] = useState('');
  const [Loader, setLoader] = useState(false)
  const HandleSignIn = () => {
    if (Email == '') {
      setEmailError('Email is required');
    } else if (Password == '') {
      setPasswordError('Password is required');
      setEmailError('');
    } else {
      setEmailError('');
      setPasswordError('');
      setLoader(true)
      var InsertAPIURL = 'https://vahhcircle.in/apis/actions.php';
      var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };

      var Data = {
        action: 'SIGNIN_WITH_EMAIL',
        UserEmail: Email,
        UserPassword: Password,
      };
      fetch(InsertAPIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then(response => response.json())
        .then(RES => {
          setLoader(false)
          console.log('response', RES);
          setActionType(RES[0].action);
          setMessage(RES[0].message);
          if(RES[0].action == 'LOGIN_SUCCESS'){
            setTimeout(() => {
              navigation.navigate('Counselling');
              setActionType('');
              setMessage('')
              setEmail('');
              setPassword('');
              setEmailError('');
              setPasswordError('');
            }, 2000);
          }
          else{
            setTimeout(() => {
            setActionType('');
            setMessage('')
          }, 2000);
          }
        })
        .catch(function (gg) {
          console.log(gg);
        });
    }
  };
  const [RememberMe, setRememberMe] = useState(false);
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
          onChangeText={text => setEmail(text)}
          defaultValue={Email}
        />
        {EmailError !== '' && <Text style={styles.error}>{EmailError}</Text>}
        <View style={styles.password_container}>
          <TextInput
            style={styles.password}
            placeholder="Password"
            placeholderTextColor={colors.white}
            secureTextEntry={ShowPassword ? false : true}
            onChangeText={text => setPassword(text)}
            defaultValue={Password}
          />
          <TouchableOpacity
            onPress={HandleShowPassword}
            style={styles.eye_icon}>
            {ShowPassword ? (
              <EyeSlashIcon size={20} color={colors.white} />
            ) : (
              <EyeIcon size={20} color={colors.white} />
            )}
          </TouchableOpacity>
        </View>
        {PasswordError !== '' && (
          <Text style={styles.error}>{PasswordError}</Text>
        )}
        {ActionType !== '' && (
          <View
            style={[
              styles.response,
              {
                backgroundColor:
                  ActionType == 'LOGIN_FAILED' ? colors.red : colors.green,
              },
            ]}>
            <Text style={styles.message}>{Message}</Text>
          </View>
        )}
        {Loader && <ActivityIndicator style={{marginTop:10}} size={'small'} color={colors.white} />}
        <View style={styles.remember_row}>
          <Text style={styles.remember_text}>Remember Me</Text>
          <CheckBox
            value={RememberMe}
            onValueChange={() => setRememberMe(!RememberMe)}
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
        <TouchableOpacity
          style={styles.sign_up}
          onPress={() => navigation.navigate('Counselling')}>
          <Text style={styles.signup_text}>Anonymous Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
export default LoginScreen;
