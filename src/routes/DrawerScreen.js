import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../Screen/Userprofile/Profile';
import MainProfileScreen from '../Screen/Userprofile/MainProfileScreen';
import Fruit from '../Screen/Fruit';
import Home from '../Screen/Home';
import BottomStack from './Bottom';
import CustomDrawer from '../constant/CustomDrawer';
const Drawer = createDrawerNavigator();
const DrawerScreen = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="BottomStack" component={BottomStack} />
      <Drawer.Screen name="Fruit" component={Fruit} />
    </Drawer.Navigator>
  );
};

export default DrawerScreen;

const styles = StyleSheet.create({});
