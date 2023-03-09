import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import COLOR from '../Assets/Colors';
import ConstText from './ConstText';
import image from '../Assets/images/image';

const SeemoreCard = ({price, source, cardtitle}) => {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.pictureView}>
        <Image source={source} style={styles.image} />
      </View>
      <View style={{width: '80%'}}>
        <ConstText
          color={COLOR.black}
          title={cardtitle}
          alignSelf={'center'}
          fontWeight={'600'}
          fontSize={22}
          styles={{textAlign: 'center', lineHeight: 22}}
        />
      </View>
      <ConstText
        color={COLOR.orange}
        title={price}
        alignSelf={'center'}
        fontWeight={'800'}
        fontSize={17}
        marginTop={13}
        styles={{textAlign: 'center'}}
      />
    </View>
  );
};

export default SeemoreCard;

const styles = StyleSheet.create({
  parentContainer: {
    height: 212,
    backgroundColor: COLOR.white,
    width: 156,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: COLOR.white,
    elevation: 5,
    marginBottom: 56,
  },
  pictureView: {
    height: 130,
    width: 130,
    borderRadius: 65,
    marginTop: -50,
    alignItems: 'center',
    marginBottom: 17,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 65,
  },
});
