import {StyleSheet, Text, View, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import React from 'react';
import COLOR from '../Assets/Colors';
import Icons from '../Assets/Icons';
import image from '../Assets/images/image';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ConstText from '../constant/ConstText';
import CustomButtoon from '../constant/CustomButtoon';

const Details = () => {
  const data = [
    {
      id: 0,
      image: image.swiper,
      title: 'Veggie tomato mix',
      number: 'N1,901',
    },
    {
      id: 1,
      image: image.swiper,
      title: 'Veggie tomato mix',
      number: 'N1,902',
    },
    {
      id: 2,
      image: image.swiper,
      title: 'Veggie tomato mix',
      number: 'N1,903',
    },
    {
      id: 3,
      image: image.swiper,
      title: 'Veggie tomato mix',
      number: 'N1,904',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Icons
          family={'Ionicons'}
          name={'chevron-back-outline'}
          color={COLOR.black}
          size={22}
        />
        <Icons
          family={'AntDesign'}
          name={'hearto'}
          color={COLOR.black}
          size={22}
        />
      </View>
      <View style={styles.SwiperView}>
        <Swiper
          autoplay={true}
          showsButtons={false}
          activeDotColor={COLOR.orange}
          dotStyle={{height: 8, width: 8, marginRight: 10, marginTop: 35}}
          activeDotStyle={{
            height: 8,
            width: 8,
            marginRight: 10,
            marginTop: 35,
          }}>
          <View style={styles.slide}>
            <Image
              source={image.swiper}
              resizeMode={'contain'}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={image.swiper}
              resizeMode={'contain'}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={image.swiper}
              resizeMode={'contain'}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={image.swiper}
              resizeMode={'contain'}
              style={styles.image}
            />
          </View>
        </Swiper>
      </View>
      <View style={styles.TextView}>
        <ConstText
          title={'Veggie tomato mix'}
          fontSize={24}
          color={COLOR.black}
          alignSelf={'center'}
          fontWeight={'600'}
        />
        <ConstText
          title={'N1,903'}
          fontSize={18}
          color={COLOR.orange}
          alignSelf={'center'}
          fontWeight={'700'}
          styles={{lineHeight: 18}}
        />
      </View>
      <View style={styles.description}>
        <ConstText
          title={'Delivery info'}
          fontSize={17}
          color={COLOR.black}
          fontWeight={'600'}
        />
        <View style={{width: '80%'}}>
          <ConstText
            title={
              'Delivered between monday aug and thursday 20 from 8pm to 91:32 pm'
            }
            fontSize={15}
            color={COLOR.black}
            fontWeight={'600'}
            styles={{lineHeight: 17, opacity: 0.5}}
          />
        </View>
        <ConstText
          title={'Return policy'}
          fontSize={17}
          color={COLOR.black}
          fontWeight={'600'}
          marginTop={20}
        />
        <View style={{width: '85%'}}>
          <ConstText
            title={
              'All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately'
            }
            fontSize={15}
            color={COLOR.black}
            fontWeight={'600'}
            styles={{lineHeight: 17, opacity: 0.5}}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginBottom: 15,
        }}>
        <CustomButtoon
          backgroundColor={COLOR.orange}
          fontSize={17}
          Buttontitle={'Add to cart'}
          color={COLOR.white}
        />
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.grey,
    paddingTop: 22,
  },
  headerView: {
    width: '100%',
    height: '5.5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 3,
    paddingLeft: 34,
    paddingRight: 50,
  },
  SwiperView: {
    width: '100%',
    height: 269,
  },
  image: {
    height: '100%',
    width: '100%',
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextView: {
    marginTop: 14,
    marginHorizontal: 20,
  },
  description: {
    marginHorizontal: 40,
    marginTop: 20,
  },
});
