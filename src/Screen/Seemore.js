import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import COLOR from '../Assets/Colors';
import Icons from '../Assets/Icons';
import ConstText from '../constant/ConstText';
import {Font} from '../Assets/fonts';
import SeemoreCard from '../constant/SeemoreCard';
import {ScrollView} from 'react-native-gesture-handler';
import image from '../Assets/images/image';

const Seemore = () => {
  const data = [
    {
      id: 0,
      title: 'Veggie tomato mix',
      price: 'N1,900',
      Image: image.chicken,
    },
    {
      id: 1,
      title: 'Veggie tomato mix',
      price: 'N1,900',
      Image: image.mutton,
    },
    {
      id: 2,
      title: 'Veggie tomato mix',
      price: 'N1,900',
      Image: image.roti,
    },
    {
      id: 3,
      title: 'Moi-moi and ekpa',
      price: 'N1,900',
      Image: image.pasta,
    },
    {
      id: 4,
      title: 'Fried chicken m',
      price: 'N1,900',
      Image: image.chicken,
    },
    {
      id: 5,
      title: 'Veggie tomato mix',
      price: 'N1,900',
      Image: image.pasta,
    },
    {
      id: 6,
      title: 'Fried chicken m',
      price: 'N1,900',
      Image: image.mutton,
    },
    {
      id: 7,
      title: 'Veggie tomato mix',
      price: 'N1,900',
      Image: image.chicken,
    },
    {
      id: 8,
      title: 'Veggie tomato mix',
      price: 'N1,900',
      Image: image.chicken,
    },
    {
      id: 9,
      title: 'Egg and cucmber',
      price: 'N1,900',
      Image: image.roti,
    },
    {
      id: 10,
      title: 'shami nana',
      price: 'N1,900',
      Image: image.mutton,
    },
    {
      id: 11,
      title: 'beaf kaab ',
      price: 'N1,900',
      Image: image.roti,
    },
    {
      id: 12,
      title: 'Veggie tomato mix',
      price: 'N1,900',
      Image: image.pasta,
    },
    {
      id: 13,
      title: 'Egg and cucmber',
      price: 'N1,900',
      Image: image.chicken,
    },
    {
      id: 14,
      title: 'sindhi khari',
      price: 'N1,900',
      Image: image.mutton,
    },
    {
      id: 15,
      title: 'white khari',
      price: 'N1,932',
      Image: image.roti,
    },
    {
      id: 16,
      title: 'Moi-moi and ekpa',
      price: 'N1,934',
      Image: image.mutton,
    },
  ];
  const [masterdata, setMasterData] = React.useState(data);
  const [filter, setFilter] = React.useState(data);
  const [search, setSearch] = React.useState('');

  const searchFilter = text => {
    if (text) {
      const Newdata = masterdata.filter(item => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData?.indexOf(textData) > -1;
      });
      setFilter(Newdata);
      setSearch(text);
    } else {
      setFilter(masterdata);
      setSearch(text);
    }
  };

  return (
    <SafeAreaView style={styles.contianer}>
      <TouchableOpacity style={styles.searchbar}>
        <Icons
          family={'Ionicons'}
          name={'chevron-back-outline'}
          size={20}
          color={COLOR.black}
          style={{marginRight: 30}}
        />
        <TextInput
          placeholder={'search'}
          style={{width: '100%'}}
          value={search}
          onChangeText={text => searchFilter(text)}
        />
      </TouchableOpacity>
      {filter.length > 0 ? (
        <View
          style={{
            backgroundColor: '#F9F9F9',
            flex: 1,
            marginTop: 20,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}>
          <View style={{marginHorizontal: 40}}>
            <ConstText
              title={`Found ${filter.length} results`}
              color={COLOR.black}
              fontSize={26}
              alignSelf={'center'}
              fontFamily={Font.black}
              fontWeight={'700'}
              marginTop={25}
            />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                paddingTop: 50,
                marginHorizontal: 26,
              }}>
              {filter.map(item => {
                return (
                  <SeemoreCard
                    cardtitle={item.title}
                    price={item.price}
                    source={item.Image}
                  />
                );
              })}
            </View>
          </ScrollView>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icons name={'search'} family={'feather'} size={80} />
          <ConstText
            title={'Item not found'}
            marginTop={16}
            fontSize={24}
            fontWeight={'600'}
            color={COLOR.black}
            alignSelf={'center'}
          />
          <View style={{width: '60%'}}>
            <ConstText
              title={'Try searching the item with a different keyword.'}
              fontSize={17}
              fontWeight={'600'}
              color={COLOR.black}
              alignSelf={'center'}
              styles={{textAlign: 'center', opacity: 0.57}}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Seemore;

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    backgroundColor: COLOR.grey,
    paddingTop: 30,
  },
  searchbar: {
    height: 47,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 40,
    flexDirection: 'row',
  },
});
