import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import fonts from '../../assets/fonts';
const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.Secondary,
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: DeviceWidth * 0.45,
    height: 80,
    alignSelf: 'center',
  },
  header: {
    width: DeviceWidth * 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: DeviceHeight * 0.05,
  },
  back_text: {
    fontFamily: fonts.BoldFont,
  },
  back: {flexDirection: 'row'},
  action_buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 25,
  },
  action_btn: {
    borderWidth: 1,
    borderColor: colors.Primary,
    borderRadius: 8,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    marginHorizontal: 5,
  },
  action_btn_text: {
    fontSize: fonts.FontHeadding,
    fontFamily: fonts.RegularFont,
  },
  select_btn: {
    width: DeviceWidth * 0.8,
    height: 50,
    borderWidth: 2,
    borderColor: colors.InputColor,
    borderRadius: 12,
    paddingHorizontal: 15,
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  select_btn_text: {
    fontSize: fonts.FontHeadding,
    color: colors.white,
    fontFamily: fonts.RegularFont,
  },
  input: {
    width: DeviceWidth * 0.8,
    height: 50,
    borderWidth: 2,
    borderColor: colors.InputColor,
    fontFamily: fonts.RegularFont,
    borderRadius: 12,
    paddingHorizontal: 15,
    marginTop: 25,
    fontSize: fonts.FontHeadding,
    color: colors.InputColor,
  },
  Submit: {
    width: 80,
    alignItems: 'center',
    backgroundColor: colors.white,
    marginLeft: 25,
    borderRadius: 25,
    marginTop: 25,
    height: 35,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  Submit_text: {
    fontFamily: fonts.RegularFont,
    fontSize: fonts.FontHeadding,
  },
  bottom_buttons: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: DeviceWidth * 0.05,
  },
  bottom_btn: {
    marginHorizontal:10
  },
  bottom_image: {
    width: 40,
    height: 40,
  },
});

export default styles;
