import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import COLOR from '../Assets/Colors';
import image from '../Assets/images/image';
import ConstText from '../constant/ConstText';
import CustomInput from '../constant/CustomInput';
import CustomButtoon from '../constant/CustomButtoon';

const Login = () => {
  const [line, setLine] = React.useState(false);
  const [Signup, setSignup] = React.useState(false);
  // const [line1, SetLine1] = React.useState(false);

  const Sign = () => {
    setLine(true);
    setSignup(true);
  };
  const login = () => {
    setLine(true);
    setSignup(false);
  };
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
          />
          <CustomInput
            InputTitle={'Password'}
            marginTop={Signup ? 0 : 11}
            placeholder={'Enter Your Password'}
            secureTextEntry={true}
          />
          {Signup ? null : (
            <ConstText
              title={'Forgot passcode?'}
              color={COLOR.orange}
              fontSize={17}
            />
          )}
        </View>
        <View style={[styles.ButtonView, {marginTop: Signup ? 0 : 45}]}>
          <CustomButtoon
            backgroundColor={COLOR.orange}
            color={COLOR.white}
            Buttontitle={Signup ? 'Signup' : 'Login'}
            fontSize={17}
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
