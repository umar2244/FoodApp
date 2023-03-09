import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import COLOR from '../Assets/Colors';
import image from '../Assets/images/image';
import {Font} from '../Assets/fonts';
import ConstText from '../constant/ConstText';
import CustomButtoon from '../constant/CustomButtoon';

const OnBoarding = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoView}>
        <Image source={image.logo} style={styles.image} />
      </View>
      <View style={styles.TextView}>
        <ConstText
          title={'Food for Everyone'}
          fontSize={44}
          fontFamily={Font.black}
          styles={{lineHeight: 45}}
        />
      </View>
      <View style={styles.picViewparent}>
        <View style={styles.picView}>
          <Image
            source={image.tony2}
            style={styles.picgirl}
            resizeMode={'contain'}
          />
        </View>
        <View
          style={{
            width: '45%',
            marginTop: 90,
          }}>
          <Image
            source={image.tony}
            style={styles.picboy}
            resizeMode={'contain'}
          />
        </View>
        <View style={styles.colorView} />
      </View>
      <View style={styles.getButton}>
        <CustomButtoon
          justifyContent={'center'}
          fontSize={17}
          height={50}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.primery,
    flex: 1,
  },
  logoView: {
    width: 73,
    height: 73,
    marginLeft: 49,
    marginTop: 56,
    backgroundColor: COLOR.white,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 40.22,
    height: 49.65,
  },
  TextView: {
    marginTop: 31,
    marginLeft: 51,
    width: 257,

    height: 112,
  },
  picViewparent: {
    flexDirection: 'row',
    marginTop: 20,
    height: 430,
    width: '100%',
    alignContent: 'center',
  },
  picView: {
    width: '50%',
    zIndex: 1,
    height: '100%',
  },

  picgirl: {
    height: '100%',
    marginLeft: -10,
  },
  picboy: {
    height: '100%',
    marginLeft: -20,
  },
  getButton: {
    alignItems: 'center',
    zIndex: 1,
  },
  colorView: {
    backgroundColor: 'rgba(255, 71, 11, 0.6)',
    position: 'absolute',
    bottom: -7,
    zIndex: 1,
    width: '100%',
    height: 150,
  },
});
