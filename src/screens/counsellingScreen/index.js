import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

import {
  ArrowLeftOnRectangleIcon,
  ChevronLeftIcon,
  ChevronDownIcon,
} from 'react-native-heroicons/outline';
import colors from '../../assets/colors';
const CounsellingScreen = () => {
  const [ActiveButton, setActiveButton] = useState('APPOINTMENT'); //APPOINTMENT || EMERGENCY
  const HandleActionBtn = action => {
    setActiveButton(action);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.signout}>
          <ArrowLeftOnRectangleIcon size={20} color={colors.black} />
        </TouchableOpacity>
        <Image
          source={require('../../assets/images/aj_logo.png')}
          style={styles.logo}
        />
        <TouchableOpacity style={styles.back}>
          <ChevronLeftIcon size={20} color={colors.black} />
          <Text style={styles.back_text}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.action_buttons}>
        <Pressable
          onPress={() => HandleActionBtn('APPOINTMENT')}
          style={[
            styles.action_btn,
            {
              backgroundColor:
                ActiveButton == 'APPOINTMENT' ? colors.Primary : colors.white,
            },
          ]}>
          <Text
            style={[
              styles.action_btn_text,
              {
                color:
                  ActiveButton == 'APPOINTMENT' ? colors.white : colors.Primary,
              },
            ]}>
            Appointment
          </Text>
        </Pressable>
        <Pressable
          onPress={() => HandleActionBtn('EMERGENCY')}
          style={[
            styles.action_btn,
            {
              backgroundColor:
                ActiveButton == 'EMERGENCY' ? colors.Primary : colors.white,
            },
          ]}>
          <Text
            style={[
              styles.action_btn_text,
              {
                color:
                  ActiveButton == 'EMERGENCY' ? colors.white : colors.Primary,
              },
            ]}>
            Emergency
          </Text>
        </Pressable>
      </View>
      {ActiveButton == 'APPOINTMENT' ? (
        <View>
          <Pressable style={styles.select_btn}>
            <Text style={styles.select_btn_text}>Select A Subject</Text>
            <ChevronDownIcon size={20} color={colors.white} />
          </Pressable>
          <Pressable style={styles.select_btn}>
            <Text style={styles.select_btn_text}>Mode Of Counselling</Text>
            <ChevronDownIcon size={20} color={colors.white} />
          </Pressable>
          <Pressable style={styles.select_btn}>
            <Text style={styles.select_btn_text}>
              Your Best Time To Connect
            </Text>
            <ChevronDownIcon size={20} color={colors.white} />
          </Pressable>
          <TextInput
            style={styles.input}
            placeholder="Place"
            placeholderTextColor={colors.white}
          />
          <TextInput
            style={[styles.input, {minHeight: 80}]}
            placeholder="Briefly tell us your problem... Type Here"
            placeholderTextColor={colors.white}
          />
          <TouchableOpacity style={styles.Submit}>
            <Text style={styles.Submit_text}>Submit</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text>Emergency Form here</Text>
      )}
      <View style={styles.bottom_buttons}>
        <Pressable style={styles.bottom_btn}>
          <Image
            source={require('../../assets/images/home.png')}
            style={styles.bottom_image}
          />
        </Pressable>
        <Pressable style={styles.bottom_btn}>
          <Image
            source={require('../../assets/images/computer.png')}
            style={styles.bottom_image}
          />
        </Pressable>
        <Pressable style={styles.bottom_btn}>
          <Image
            source={require('../../assets/images/counselling.png')}
            style={styles.bottom_image}
          />
        </Pressable>
        <Pressable style={styles.bottom_btn}>
          <Image
            source={require('../../assets/images/robot.png')}
            style={styles.bottom_image}
          />
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default CounsellingScreen;
