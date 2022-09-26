import React from 'react';
import {StyleSheet, View} from 'react-native';
import SingInForm from './sign-in-form';
import AuthFooter from '../auth-footer';
import AuthTitle from '../auth-title';
import AppLogo from '../../components/commons/app-logo';

export default function SignIn(props) {
  const {navigation} = props;
  const navigate = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <AppLogo height={100} width={100} />
      <AuthTitle title={'Welcome Back'} />
      <SingInForm />
      {/*<AuthFooter*/}
      {/*  navigate={navigate}*/}
      {/*  footerText={"Don't have an account?"}*/}
      {/*  footerText2={''}*/}
      {/*  footerTextLink={'Sign up here!'}*/}
      {/*/>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
