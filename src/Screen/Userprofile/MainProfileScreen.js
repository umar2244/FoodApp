import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import COLOR from '../../Assets/Colors';
import Icons from '../../Assets/Icons';
import ConstText from '../../constant/ConstText';
import MianprofileCard from '../../constant/MianprofileCard';
import CustomButtoon from '../../constant/CustomButtoon';

const MainProfileScreen = ({navigation}) => {
  const data = [
    {
      id: 0,
      Name: 'order',
    },
    {
      id: 1,
      Name: 'Pending reviews',
    },
    {
      id: 2,
      Name: 'Faq',
    },
    {
      id: 3,
      Name: 'Help',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icons
          name={'chevron-back-outline'}
          family={'Ionicons'}
          size={22}
          color={COLOR.black}
        />
        <ConstText
          title={'My profile'}
          color={COLOR.black}
          fontSize={30}
          fontWeight={'600'}
        />
      </View>
      <View style={styles.MainContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: -6,
          }}>
          <ConstText
            color={COLOR.black}
            title={'Personal details'}
            alignSelf={'center'}
            fontSize={18}
          />
          <ConstText
            color={COLOR.orange}
            title={'Change'}
            alignSelf={'center'}
            fontSize={12}
            onPress={() => navigation.navigate('Profile')}
          />
        </View>
        <MianprofileCard />
        {data.map(item => {
          return (
            <View
              style={{
                height: 60,
                width: 315,
                backgroundColor: COLOR.white,
                flexDirection: 'row',
                marginTop: 17,
                borderRadius: 20,
                paddingHorizontal: 23,
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <ConstText
                title={item.Name}
                fontSize={18}
                color={COLOR.black}
                fontWeight={'600'}
                alignSelf={'center'}
              />
              <Icons
                family={'Ionicons'}
                name={'chevron-forward-sharp'}
                size={18}
                color={COLOR.black}
              />
            </View>
          );
        })}
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginBottom: 8,
        }}>
        <CustomButtoon
          Buttontitle={'Update'}
          backgroundColor={COLOR.orange}
          color={COLOR.white}
          fontSize={17}
        />
      </View>
    </View>
  );
};

export default MainProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.grey,
    paddingTop: 20,
  },
  header: {
    paddingHorizontal: 38,
  },
  MainContainer: {
    paddingLeft: 30,
    paddingRight: 43,
  },
});
