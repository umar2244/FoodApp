import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import COLOR from '../Assets/Colors';
import ConstText from './ConstText';
import {Font} from '../Assets/fonts';

const CustomButtoon = ({
  stylesbuttn,
  height,
  width,
  backgroundColor,
  marginBottom,
  marginTop,
  justifyContent,
  alignItems,
  alignSelf,
  borderRadius,
  fontFamily,
  fontSize,
  color,
  onPress,
  Buttontitle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={[
        stylesbuttn,
        {
          height: height || 60,
          width: width || 270,
          backgroundColor: backgroundColor || COLOR.white,
          marginBottom: marginBottom || 0,
          marginTop: marginTop || 0,
          justifyContent: justifyContent || 'center',
          alignItems: alignItems || 'center',
          borderRadius: borderRadius || 30,
        },
      ]}>
      <ConstText
        fontFamily={fontFamily || Font.regular}
        fontSize={fontSize || 12}
        color={color || COLOR.orange}
        alignSelf={alignSelf || 'center'}
        title={Buttontitle}
      />
    </TouchableOpacity>
  );
};

export default CustomButtoon;

const styles = StyleSheet.create({});
