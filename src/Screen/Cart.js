import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import COLOR from '../Assets/Colors';
import CustomHeader from '../constant/CustomHeader';
import CartCard from '../constant/CartCard';
import {SwipeListView} from 'react-native-swipe-list-view';
import image from '../Assets/images/image';
import Icons from '../Assets/Icons';

import CustomButtoon from '../constant/CustomButtoon';
const Cart = () => {
  const [data, setData] = React.useState([
    {
      id: 0,
      title: 'mutton',
      Rate: 'N9,100',
      Pic: image.cartfood,
    },
    {
      id: 1,
      title: 'mutton',
      Rate: 'N9,100',
      Pic: image.cartfood,
    },
    {
      id: 2,
      title: 'mutton',
      Rate: 'N9,100',
      Pic: image.cartfood,
    },
    {
      id: 3,
      title: 'mutton',
      Rate: 'N9,100',
      Pic: image.cartfood,
    },
  ]);

  const delte = item => {
    console.log('heeee', item);
    const data1 = (data.filter = (item, index) => index !== index);
    setData(data1);
    console.log('data', data1);
  };
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader Headertitle={'Cart'} headerStyle={{marginBottom: 40}} />
      <SwipeListView
        data={data}
        renderItem={({item, index}) => (
          <CartCard
            cartprice={item.Rate}
            source={item.Pic}
            Cartname={item.title}
          />
        )}
        renderHiddenItem={(item, index) => (
          <View style={styles.rowBack}>
            <View
              style={{
                backgroundColor: COLOR.merun,
                height: 45,
                width: 45,
                borderRadius: 23,
                marginRight: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icons
                name={'hearto'}
                family={'AntDesign'}
                color={COLOR.white}
                size={19}
              />
            </View>

            <View
              style={{
                backgroundColor: COLOR.merun,
                height: 45,
                width: 45,
                borderRadius: 23,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icons
                name={'delete'}
                family={'AntDesign'}
                color={COLOR.white}
                size={19}
                onPress={() => delte(index)}
              />
            </View>
          </View>
        )}
        rightOpenValue={-160}
        disableRightSwipe
      />
      <View
        style={{
          height: '10%',
          marginBottom: 5,
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <CustomButtoon
          backgroundColor={COLOR.orange}
          Buttontitle={'Complete order'}
          color={COLOR.white}
          fontSize={17}
        />
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.grey,
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  rowBack: {
    width: '90%',
    height: 40,
    alignItems: 'flex-end',
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
