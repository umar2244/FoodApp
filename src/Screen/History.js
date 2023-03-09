import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import COLOR from '../Assets/Colors';
import CustomHeader from '../constant/CustomHeader';
import image from '../Assets/images/image';
import ConstText from '../constant/ConstText';
import CustomButtoon from '../constant/CustomButtoon';

const History = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader Headertitle={'History'} />
      <View style={styles.ImageParent}>
        <Image
          source={image.History}
          style={styles.image}
          resizeMode={'contain'}
        />
        <ConstText
          title={'No history yet'}
          alignSelf={'center'}
          marginTop={10}
          fontSize={22}
          color={COLOR.black}
          fontWeight={'700'}
        />
        <View style={styles.pragraphView}>
          <ConstText
            title={'Hit the orange button down below to Create an order'}
            alignSelf={'center'}
            fontSize={14}
            color={COLOR.black}
            styles={{textAlign: 'center', opacity: 0.57}}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,

          alignItems: 'center',
          marginBottom: 15,
          justifyContent: 'flex-end',
        }}>
        <CustomButtoon
          backgroundColor={COLOR.orange}
          Buttontitle={'Start odering'}
          color={COLOR.white}
          fontSize={16}
        />
      </View>
    </SafeAreaView>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.grey,
    paddingHorizontal: 30,
    paddingTop: 15,
  },
  ImageParent: {
    height: '55%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    height: 118.33,
    width: 106.5,
  },
  pragraphView: {
    width: '50%',
  },
});
