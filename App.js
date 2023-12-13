import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import fonts from './src/assets/fonts';
import LoginScreen from './src/screens/LoginScreen';
import CounsellingScreen from './src/screens/counsellingScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();
const App = () => {
  return (
    <>
      <StatusBar backgroundColor={'#000'} barStyle={'light-content'} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Counselling" component={CounsellingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
