import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import AuthFooter from '../auth-footer';
import AuthTitle from '../auth-title';
import AppLogo from '../../components/commons/app-logo';
import SingUpForm from './sign-up-form';

export default function SignUp(props) {
  const {navigation} = props;
  const navigate = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView
      contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.container}>
        <AppLogo height={80} width={80} />
        <AuthTitle title={'Sign Up'} />

        <SingUpForm goHome={navigate} />
        <AuthFooter
          navigate={navigate}
          footerText={'Already have an account?'}
          footerTextLink={'Sign in here!'}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
});
