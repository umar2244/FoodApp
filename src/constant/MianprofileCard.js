import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import COLOR from '../Assets/Colors';
import image from '../Assets/images/image';
import ConstText from './ConstText';

const MianprofileCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgview}>
        <Image
          source={image.main}
          style={styles.imgview}
          resizeMode={'contain'}
        />
      </View>
      <View style={{flex: 1}}>
        <ConstText
          title={'Marvis Ighedosa'}
          fontSize={18}
          fontFamily={'600'}
          color={COLOR.black}
        />
        <ConstText
          title={'Dosamarvis@gmail.com'}
          fontSize={15}
          fontFamily={'400'}
          color={COLOR.black}
          styles={{lineHeight: 25, opacity: 0.5}}
        />
        <View style={styles.line} />
        <ConstText
          title={'+234 9011039271'}
          fontSize={15}
          fontFamily={'400'}
          color={COLOR.black}
          styles={{lineHeight: 17, opacity: 0.5}}
        />
        <View style={styles.line} />
        <ConstText
          title={'No 15 uti street off ovie palace road effurun delta state'}
          fontSize={15}
          fontFamily={'400'}
          color={COLOR.black}
          styles={{lineHeight: 17, opacity: 0.5}}
        />
      </View>
    </View>
  );
};

export default MianprofileCard;

const styles = StyleSheet.create({
  container: {
    height: 197,
    width: 315,
    backgroundColor: COLOR.white,
    borderRadius: 20,
    paddingTop: 18,
    paddingLeft: 18,
    flexDirection: 'row',
  },
  imgview: {
    width: 91,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  line: {
    height: 0,
    borderWidth: 0.5,
    width: 165,
    backgroundColor: COLOR.black,
    opacity: 0.3,
    marginVertical: 7,
  },
});
