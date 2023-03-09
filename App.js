import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import OnBoarding from './src/Screen/OnBoarding';
import Login from './src/Screen/Login';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomStack from './src/routes/Bottom';
import HomeScreen from './src/Screen/Home';
import Profile from './src/Screen/Userprofile/Profile';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          initialRouteName: 'onboarding',
        }}>
        <Stack.Screen name="onboarding" component={OnBoarding} />
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
        <Stack.Screen name="BottomStack" component={BottomStack} />
        <Stack.Screen name="Profile" component={Profile} />
        {/* <Stack.Screen name="Drawer" component={DrawerScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
