import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import COLOR from '../Assets/Colors';
import image from '../Assets/images/image';
import ConstText from '../constant/ConstText';
import CustomInput from '../constant/CustomInput';
import CustomButtoon from '../constant/CustomButtoon';
import {useNavigation} from '@react-navigation/native';
import {RadioButton, Switch} from 'react-native-paper';

const Login = () => {
  const navigation = useNavigation();

  const [line, setLine] = useState(false);
  const [Signup, setSignup] = useState(false);

  const [error, setError] = useState({
    email: '',
    password: '',
  });

  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [checked, setChecked] = React.useState('male');
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const checkValieddation = () => {
    let Errorrss = {...error};
    const valid =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!valid.test(user.email)) {
      Errorrss.email = 'Emial is not matched';
    } else {
      Errorrss.email = '';
    }
    if (user?.password?.length < 8) {
      Errorrss.password = 'password must be long then 8 chacter ';
    } else {
      Errorrss.password = '';
    }
    setError(Errorrss);
  };

  const handleChange = (name, value) => {
    setUser(prev => ({...prev, [name]: value}));
  };

  useEffect(() => {
    checkValieddation();
  }, [user]);

  const check = () => {
    // if (error.email || error.password) {
    //   alert('please fill the data ');
    //   return;
    // }
    navigation.navigate('Drawer');
  };

  const Sign = () => {
    setLine(true);
    setSignup(true);
  };
  const login = () => {
    setLine(true);
    setSignup(false);
  };
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <View style={styles.logoView}>
          <View style={styles.imgView}>
            <Image
              source={image.logo2}
              style={styles.img}
              resizeMode={'contain'}
            />
          </View>
          <View style={styles.loginparentView}>
            <View style={styles.loginView}>
              <ConstText
                onPress={() => login()}
                title={'Login'}
                color={COLOR.black}
                fontSize={18}
                fontWeight={'700'}
              />

              <ConstText
                onPress={() => Sign()}
                title={'Sign-up'}
                color={COLOR.black}
                fontSize={18}
                fontWeight={'700'}
              />
            </View>
            {line ? (
              <View style={[styles.line, {right: Signup ? 7 : 160}]} />
            ) : null}
          </View>
        </View>
        <View style={styles.input}>
          {Signup ? (
            <CustomInput InputTitle={'Name'} placeholder={'Enter Your name'} />
          ) : null}
          <CustomInput
            InputTitle={'Email address'}
            placeholder={'Enter Your Email'}
            value={user.email}
            Name={'email'}
            onChangeText={value => handleChange('email', value)}
          />
          {user.email ? (
            <ConstText title={error.email} color={COLOR.merun} />
          ) : null}

          <CustomInput
            InputTitle={'Password'}
            marginTop={Signup ? 0 : 11}
            placeholder={'Enter Your Password'}
            secureTextEntry={true}
            value={user.password}
            Name={'password'}
            onChangeText={value => handleChange('password', value)}
          />
          {user.password ? (
            <ConstText title={error.password} color={COLOR.merun} />
          ) : null}
          {Signup ? null : (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <ConstText
                title={'Forgot passcode?'}
                color={COLOR.orange}
                fontSize={17}
              />
              {/* <ConstText
                title="Gender:"
                color={COLOR.black}
                fontSize={12}
                alignSelf={'center'}
              />
              <RadioButton
                value="male"
                status={checked === 'male' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('male')}
                color={COLOR.black}
              />
              <ConstText
                title={'Male'}
                marginRight={10}
                color={COLOR.orange}
                fontSize={12}
                alignSelf={'center'}
              />
              <RadioButton
                value="female"
                status={checked === 'female' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('female')}
                color={COLOR.black}
              />
              <ConstText
                title={'Female'}
                fontSize={12}
                color={COLOR.orange}
                alignSelf={'center'}
              /> */}
            </View>
          )}
        </View>

        <View style={[styles.ButtonView, {marginTop: Signup ? 0 : 45}]}>
          {/* <Switch value={isSwitchOn} onValueChange={() => onToggleSwitch()} /> */}
          <CustomButtoon
            backgroundColor={COLOR.orange}
            color={COLOR.white}
            Buttontitle={Signup ? 'Signup' : 'Login'}
            fontSize={17}
            onPress={() => check()}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.grey,
  },
  logoView: {
    width: '100%',
    height: '50%',
    backgroundColor: COLOR.white,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    elevation: 2,
    alignItems: 'center',
  },
  imgView: {
    height: '75%',
    width: '29%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: '90%',
    width: '90%',
  },
  loginparentView: {
    width: '80%',
    flex: 1,
    justifyContent: 'flex-end',
  },
  loginView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 12,
  },

  line: {
    height: 3,
    width: 110,
    backgroundColor: COLOR.orange,
    marginHorizontal: 20,
    position: 'absolute',
    bottom: 2,
  },
  input: {
    marginHorizontal: 50,
    marginTop: 50,
  },
  ButtonView: {
    alignItems: 'center',
  },
});
