import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';

import {XCircleIcon} from 'react-native-heroicons/outline';
import colors from '../assets/colors';
import fonts from '../assets/fonts';
const SelectSheet = props => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        props.setModalVisible(!props.modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            {props.SelectAction == 'SUBJECT'
              ? 'Select a subject'
              : props.SelectAction == 'MODE'
              ? 'Mode of counselling'
              : props.SelectAction == 'TIME'
              ? 'Your Best time to connect'
              : 'Reload the screen'}
          </Text>
          <View style={styles.border} />
          <Text style={styles.info}>List/Info goes here</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => props.setModalVisible(!props.modalVisible)}>
            <XCircleIcon size={20} color={colors.white4} />
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'flex-end',
  },
  modalView: {
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    minHeight: '60%',
    paddingHorizontal: 20,
    paddingVertical: 35,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    position: 'absolute',
    top: 15,
    right: 15,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: fonts.BoldFont,
    fontSize: fonts.FontHeadding,
  },
  border: {
    width: '100%',
    borderBottomColor: colors.white2,
    borderBottomWidth: 1,
  },
  info:{
    fontFamily: fonts.RegularFont,
    fontSize: fonts.FontBody,
    marginTop:30
  }
});

export default SelectSheet;
