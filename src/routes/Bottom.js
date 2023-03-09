import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Screen/Home';
import History from '../Screen/History';
import COLOR from '../Assets/Colors';
import image from '../Assets/images/image';
const Tab = createBottomTabNavigator();
// Entypo.loadFont();
const Bottom = () => {
  const [color, setColor] = React.useState(false);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

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
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home1"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="hearto" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="history1"
        component={History}
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

export default Bottom;

const styles = StyleSheet.create({});
