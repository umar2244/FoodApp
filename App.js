import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import OnBoarding from './src/Screen/OnBoarding';
import Login from './src/Screen/Login';
import History from './src/Screen/History';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/Screen/Home';
import Bottom from './src/routes/Bottom';
import Profile from './src/Screen/Userprofile/Profile';
import {Provider as PaperProvider} from 'react-native-paper';
import MainProfileScreen from './src/Screen/Userprofile/MainProfileScreen';
import Details from './src/Screen/Details';
import Seemore from './src/Screen/Seemore';
import Cart from './src/Screen/Cart';
import DrawerScreen from './src/routes/DrawerScreen';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          initialRouteName: 'onboarding',
        }}>
        {/* <Stack.Screen name="onboarding" component={OnBoarding} />
        <Stack.Screen name="Login" component={Login} /> */}
        <Stack.Screen name="Drawer" component={DrawerScreen} />
        <Stack.Screen name="bottom" component={Bottom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
