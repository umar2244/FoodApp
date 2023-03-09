import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import COLOR from '../Assets/Colors';
import Icons from '../Assets/Icons';
import ConstText from './ConstText';
import RadioButton from 'react-native-paper';

const PaymentCard = ({
  family,
  Name,
  backgroundColor,
  paymentTitle,
  borderWidth,
  borderColor,
}) => {
  return (
    <View>
      <View style={{alignItems: 'center', flexDirection: 'row'}}>
        <View
          style={{
            height: 40,
            width: 40,
            marginLeft: 15,
            marginRight: 11,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor: backgroundColor || '#F47B0A',
          }}>
          <Icons family={family} name={Name} size={20} color={COLOR.white} />
        </View>
        <ConstText
          title={paymentTitle}
          fontSize={17}
          color={COLOR.black}
          alignSelf={'flex-end'}
        />
      </View>
      <View
        style={[
          styles.line,
          {
            borderWidth: borderWidth || 0.5,
            borderColor: borderColor || COLOR.black,
          },
        ]}
      />
    </View>
  );
};

export default PaymentCard;

const styles = StyleSheet.create({
  line: {
    width: 232,
    height: 0,
    marginLeft: 24,
    marginVertical: 15,
    opacity: 0.3,
  },
});
