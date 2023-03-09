import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import ConstText from './ConstText';
import {Font} from '../Assets/fonts';
import COLOR from '../Assets/Colors';

const CustomInput = ({
  marginBottom,
  marginTop,
  value,
  fontSize,
  InputStyle,
  fontFamily,
  color,
  onChangeText,
  multiline,
  placeholder,
  placeholderTextColor,
  secureTextEntry,
  disable,
  InputTitle,
  keyboardType,
}) => {
  return (
    <View
      style={{
        marginBottom: marginBottom || 20,
        marginTop: marginTop || 0,
      }}>
      <ConstText
        title={InputTitle}
        fontFamily={fontFamily || Font.regular}
        fontSize={fontSize || 15}
        color={color || COLOR.black}
        styles={{opacity: 0.4}}
      />

      <TextInput
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={placeholderTextColor}
        multiline={multiline}
        editable={disable}
        placeholder={placeholder}
        style={[
          InputStyle,
          {
            borderBottomWidth: 0.5,
            paddingBottom: 1,
            margin: 0,
          },
        ]}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({});
