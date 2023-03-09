import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../Screen/Userprofile/Profile';
import MainProfileScreen from '../Screen/Userprofile/MainProfileScreen';
import Home from '../Screen/Home';
const Drawer = createDrawerNavigator();
const DrawerScreen = () => {
  return (
    <Drawer.Navigator>
      {/* <Drawer.Screen name="Main" component={MainProfileScreen} /> */}
      <Drawer.Screen name="home" component={Home} />
    </Drawer.Navigator>
  );
};

export default DrawerScreen;

const styles = StyleSheet.create({});
