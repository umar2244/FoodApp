import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import COLOR from '../Assets/Colors';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import ConstText from '../constant/ConstText';
import {Font} from '../Assets/fonts';
import Searchbar from '../constant/Searchbar';
import HomeCard from '../constant/HomeCard';
import image from '../Assets/images/image';

const HomeScreen = () => {
  const Data = [
    {
      id: 1,
      Name: 'Food',
    },
    {
      id: 1,
      Name: 'Drink',
    },
    {
      id: 1,
      Name: 'Snaks',
    },
    {
      id: 1,
      Name: 'Fish',
    },
    {
      id: 1,
      Name: 'Salads',
    },
  ];

  const CardData = [
    {
      id: 1,
      image: image.Food,
      title: 'Veggie tomato mix',
      number: 'N1,900',
    },
    {
      id: 2,
      image: image.Food,
      title: 'Spicy fish sauce',
      number: 'N2,300.9',
    },
    {
      id: 3,
      image: image.Food,
      title: 'Mutton white khari',
      number: 'N1,940',
    },
  ];
  const [color, setColor] = React.useState(null);
  const colorchange = index => {
    setColor(index);
  };

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.headerView}>
        <Octicons name="three-bars" size={22} color={COLOR.black} />
        <Feather name="shopping-cart" size={22} />
      </View>
      <View style={styles.mianView}>
        <View style={{width: '60%'}}>
          <ConstText
            title={'Delicious food for you'}
            fontSize={30}
            fontFamily={Font.black}
            color={COLOR.black}
            marginBottom={20}
          />
        </View>
        <Searchbar placeholder={'Search'} />
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          contentContainerStyle={{
            alignItems: 'center',
            marginTop: 30,
          }}>
          {Data.map((item, index) => {
            return (
              <TouchableHighlight
                onPress={() => colorchange(index)}
                key={index}
                underlayColor="transparent">
                <View>
                  <ConstText
                    title={item.Name}
                    color={color === index ? COLOR.orange : COLOR.greyShade}
                    fontSize={17}
                    marginLeft={index == 0 ? 14 : 42}
                  />
                  {setColor === index ? (
                    <View
                      style={{
                        width: 38,
                        height: 3,
                        backgroundColor: COLOR.orange,
                        marginLeft: index == 0 ? 14 : 42,
                      }}
                    />
                  ) : null}
                </View>
              </TouchableHighlight>

              // <View>
              //   {Data.map((text, index) => (
              //     <TouchableHighlight
              //       key={index}
              //       onPress={() => setColor(index)}
              //       underlayColor="transparent">
              //       <View style={{flexDirection: 'row', alignItems: 'center'}}>
              //         <Text
              //           style={{
              //             color: setColor === index ? 'red' : 'black',
              //           }}>
              //           {text.Name}
              //         </Text>
              //         {setColor === index && (
              //           <View
              //             style={{
              //               width: 10,
              //               height: 3,
              //               backgroundColor: 'blue',
              //               marginLeft: 5,
              //             }}
              //           />
              //         )}
              //       </View>
              //     </TouchableHighlight>
              //   ))}
              // </View>
            );
          })}
        </ScrollView>

        <View style={{height: '66%', paddingTop: 55}}>
          <ConstText
            title={'see more'}
            fontSize={12}
            alignSelf={'flex-end'}
            color={COLOR.orange}
          />
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingTop: 75,
            }}>
            {CardData.map((item, index) => {
              return (
                <HomeCard
                  cardtitle={item.title}
                  cardNum={item.number}
                  source={item.image}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLOR.grey,
    paddingTop: 15,
  },
  headerView: {
    width: '94%',
    height: '5.5%',
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  mianView: {
    flex: 1,
    paddingHorizontal: 27,
  },
});
