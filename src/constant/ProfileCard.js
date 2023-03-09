import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import COLOR from '../Assets/Colors';
import image from '../Assets/images/image';
import ConstText from './ConstText';

const ProfileCard = () => {
  return (
    <View style={styles.continer}>
      <View style={styles.img}>
        <Image
          source={image.Profile}
          style={styles.imgstyle}
          resizeMode={'contain'}
        />
      </View>
      <View
        style={{
          flex: 1,
        }}>
        <ConstText
          title={'Marvis Ighedosa'}
          fontSize={18}
          fontWeight={'600'}
          color={COLOR.black}
          styles={{lineHeight: 17}}
        />
        <ConstText
          title={'dosamarvis@gmail.com'}
          fontSize={13}
          fontWeight={'600'}
          color={COLOR.black}
          styles={{lineHeight: 30, opacity: 0.5}}
        />
        <View style={{width: '80%'}}>
          <ConstText
            title={'No 15 uti street off ovie palace road effurun delta state'}
            fontSize={13}
            fontWeight={'600'}
            color={COLOR.black}
            styles={{lineHeight: 15, opacity: 0.5}}
          />
        </View>
      </View>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  continer: {
    height: 133,
    width: 315,
    backgroundColor: COLOR.white,
    borderRadius: 20,
    paddingTop: 20,
    paddingLeft: 16,
    flexDirection: 'row',
  },
  img: {
    height: 60,
    width: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  imgstyle: {
    height: '100%',
    width: '100%',
  },
});
