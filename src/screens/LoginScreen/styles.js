import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import fonts from '../../assets/fonts';
const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.Secondary,
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: DeviceWidth * 0.45,
    height: 80,
    alignSelf: 'center',
    marginTop: DeviceHeight * 0.05,
    marginBottom: 40,
  },
  input: {
    width: DeviceWidth * 0.8,
    height: 50,
    borderWidth: 2,
    borderColor: colors.InputColor,
    fontFamily: fonts.RegularFont,
    borderRadius: 12,
    paddingHorizontal: 15,
    marginVertical: 25,
    fontSize: fonts.FontHeadding,
  },
  password: {
    width: DeviceWidth * 0.8,
    height: 50,
    borderWidth: 2,
    borderColor: colors.InputColor,
    fontFamily: fonts.RegularFont,
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: fonts.FontHeadding,
  },
  password_container: {
    flexDirection: 'row',
  },
  eye_icon: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  remember_row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 25,
  },
  remember_text: {
    fontFamily: fonts.RegularFont,
    fontSize: fonts.FontHeadding,
  },
  remember_checkbox: {
    marginLeft: 10,
  },
  submit_btns: {
    flexDirection: 'row',
  },
  forgot_password: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  forgot_password_text: {
    fontFamily: fonts.RegularFont,
    fontSize: fonts.FontSubHeadding,
  },
  SignIn: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: colors.white,
    marginLeft: 25,
    borderRadius: 25,
  },
  SignIn_text: {
    fontFamily: fonts.RegularFont,
    fontSize: fonts.FontHeadding,
  },
  login_gmail_row: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginTop: 15,
  },
  google_logo: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
  login_gmail: {
    fontFamily: fonts.RegularFont,
    fontSize: fonts.FontSubHeadding,
  },
  sign_up: {
    alignSelf: 'center',
    marginTop: 30,
  },
  signup_text: {
    fontFamily: fonts.RegularFont,
    fontSize: fonts.FontHeadding,
    textDecorationLine:'underline'
  },
});

export default styles;
