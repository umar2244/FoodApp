import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import COLOR from '../Assets/Colors';
import image from '../Assets/images/image';
import ConstText from './ConstText';

const cartCard = ({source, cartprice, Cartname}) => {
  const [count, setCount] = React.useState(0);
  const decerment = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <View style={styles.Parentcontainer}>
      <View style={styles.imagesView}>
        <Image source={source} style={styles.image} />
      </View>
      <View>
        <ConstText
          title={Cartname}
          color={COLOR.black}
          fontSize={17}
          fontWeight={'600'}
          styles={{lineHeight: 22}}
        />
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            width: '62%',
          }}>
          <ConstText
            title={cartprice}
            color={COLOR.orange}
            fontSize={15}
            fontWeight={'600'}
          />
          <View
            style={{
              backgroundColor: COLOR.orange,
              width: 50,
              height: 20,
              marginTop: 9,
              borderRadius: 30,
              flexDirection: 'row',
              paddingHorizontal: 7,
              justifyContent: 'space-around',
            }}>
            <ConstText title={'-'} fontSize={12} onPress={() => decerment()} />
            <ConstText title={`${count}`} fontSize={12} />
            <ConstText
              title={'+'}
              fontSize={12}
              onPress={() => setCount(count + 1)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default cartCard;

const styles = StyleSheet.create({
  Parentcontainer: {
    height: 102,
    width: 315,
    backgroundColor: COLOR.white,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 11,
  },
  imagesView: {
    height: 90,
    width: 90,
    borderRadius: 45,
    padding: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 45,
  },
});
