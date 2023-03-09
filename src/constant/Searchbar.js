import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import COLOR from '../Assets/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TextInput} from 'react-native-gesture-handler';

const Searchbar = ({value, onChangeText, placeholder}) => {
  return (
    <TouchableOpacity
      style={{
        height: 47,
        width: '100%',
        backgroundColor: COLOR.darkgrey,
        borderRadius: 30,
        alignItems: 'center',
        paddingHorizontal: 20,
        flexDirection: 'row',
        elevation: 0.3,
      }}>
      <AntDesign name="search1" size={20} style={{marginRight: 4}} />
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={{width: '100%'}}
      />
    </TouchableOpacity>
  );
};

export default Searchbar;

const styles = StyleSheet.create({});
