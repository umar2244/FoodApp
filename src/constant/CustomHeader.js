import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLOR from '../Assets/Colors';
import ConstText from './ConstText';
import {Font} from '../Assets/fonts';

const CustomHeader = ({Headertitle, onPress, headerStyle}) => {
  return (
    <View
      style={[
        headerStyle,
        {
          flexDirection: 'row',
          alignItems: 'center',
          width: '60%',
          justifyContent: 'space-between',
        },
      ]}>
      <Ionicons
        name="chevron-back-outline"
        size={22}
        color={COLOR.black}
        onPress={onPress}
      />
      <ConstText
        title={Headertitle}
        color={COLOR.black}
        fontSize={18}
        fontWeight={'600'}
      />
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({});
