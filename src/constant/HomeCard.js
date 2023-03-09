import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import COLOR from '../Assets/Colors';
import image from '../Assets/images/image';
import ConstText from './ConstText';

const HomeCard = ({cardtitle, source, cardNum}) => {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.pictureView}>
        <Image source={source} style={styles.image} resizeMode={'contain'} />
      </View>
      <View style={{width: '60%'}}>
        <ConstText
          color={COLOR.black}
          title={cardtitle}
          alignSelf={'center'}
          fontWeight={'700'}
          fontSize={17}
          styles={{textAlign: 'center', lineHeight: 19}}
        />
      </View>
      <ConstText
        color={COLOR.orange}
        title={cardNum}
        alignSelf={'center'}
        fontWeight={'800'}
        fontSize={14}
        marginTop={15}
        styles={{textAlign: 'center'}}
      />
    </View>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  parentContainer: {
    height: 205,
    backgroundColor: COLOR.white,
    width: 175,
    borderRadius: 30,
    alignItems: 'center',
    elevation: 10,
    shadowColor: COLOR.white,
    marginRight: 35,
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
    borderRadius: 70,
  },
});
