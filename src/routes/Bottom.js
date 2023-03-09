import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../Screen/Home';
import History from '../Screen/History';
import COLOR from '../Assets/Colors';
import image from '../Assets/images/image';
import Entypo from 'react-native-vector-icons/Entypo';
import MainProfileScreen from '../Screen/Userprofile/MainProfileScreen';
const Tab = createBottomTabNavigator();
//Entypo.loadFont();
const BottomStack = () => {
  const [color, setColor] = React.useState(false);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // initialRouteName: 'HomeScreen',
        tabBarStyle: {
          height: 60,
          backgroundColor: COLOR.grey,
          borderTopWidth: 0,
          elevation: 0,
        },

        tabBarShowLabel: false,
        tabBarActiveTintColor: COLOR.orange,
        tabBarInactiveTintColor: COLOR.tabIcon,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Home1"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="hearto" size={24} color={color} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Main"
        component={MainProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={image.user}
              style={{
                height: 24,
                width: 25,
                tintColor: color,
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="history"
        component={History}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="history" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomStack;

const styles = StyleSheet.create({});
