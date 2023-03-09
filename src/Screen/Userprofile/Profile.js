import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import COLOR from '../../Assets/Colors';
import CustomHeader from '../../constant/CustomHeader';
import ConstText from '../../constant/ConstText';
import ProfileCard from '../../constant/ProfileCard';
import PaymentCard from '../../constant/PaymentCard';
import CustomButtoon from '../../constant/CustomButtoon';

const Profile = ({navigation}) => {
  const data = [
    {
      id: 0,
      family: 'MaterialCommunityIcons',
      icon: 'card-bulleted',
      title: 'Card',
      color: '#F47B0A',
    },
    {
      id: 1,
      family: 'MaterialCommunityIcons',
      icon: 'bank',
      title: 'Bank account',
      color: '#EB4796',
    },
    {
      id: 2,
      family: 'Fontisto',
      icon: 'paypal-p',
      title: 'Paypal',
      color: '#0038FF',
    },
  ];
  return (
    <View style={styles.container}>
      <CustomHeader
        Headertitle={'Profile'}
        onPress={() => navigation.navigate('Main')}
      />
      <View style={styles.mainView}>
        <ConstText
          title={'Information'}
          marginLeft={4}
          fontSize={17}
          color={COLOR.black}
          fontWeight={'700'}
          marginBottom={12}
        />
      </View>

      <ProfileCard />

      <View style={styles.paymentView}>
        <ConstText
          title={'Payment Method'}
          fontSize={17}
          color={COLOR.black}
          fontWeight={'700'}
          marginBottom={21}
        />

        <View style={styles.faltContainer}>
          {data.map((item, index) => {
            return (
              <PaymentCard
                paymentTitle={item.title}
                backgroundColor={item.color}
                family={item.family}
                Name={item.icon}
                borderColor={item.id == 2 && 'transparent'}
              />
            );
          })}
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            paddingHorizontal: -35,
            justifyContent: 'flex-end',
            marginBottom: 5,
          }}>
          <CustomButtoon
            Buttontitle={'Update'}
            backgroundColor={COLOR.orange}
            color={COLOR.white}
            fontSize={17}
            fontWeight={'600'}
          />
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.grey,
    paddingTop: 15,
    paddingHorizontal: 35,
  },
  mainView: {
    marginTop: 60,
  },
  paymentView: {height: '65%', paddingTop: 48},

  faltContainer: {
    height: 231,
    width: 315,
    backgroundColor: COLOR.white,
    paddingTop: 20,
    paddingLeft: 25,
    borderRadius: 20,
  },
});
