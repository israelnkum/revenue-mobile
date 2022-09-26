import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text} from 'react-native';
import {primary, white} from '../../utils/colors';
import {handleAuthentication} from '../../actions/authenticate/Actions';
import {connect} from 'react-redux';
import {TlaInput} from '../../components/commons/form/tla-input';
import {Card} from '@ui-kitten/components';
import {TlaButton} from '../../components/commons/form/tla-button';

const SingInForm = props => {
  const {handleAuth} = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleSignIn = () => {
    setIsLoading(true);
    setErrorText('');
    handleAuth({email: email, password: password, device_name: 'mobile'})
      .then()
      .catch(err => {
        setErrorText(err.response.data);
        setIsLoading(false);
      });
  };

  return (
    <Card style={styles.card}>
      <Text style={{color: 'red', textAlign: 'center'}}>{errorText}</Text>
      <TlaInput
        onTextChange={nextValue => {
          setEmail(nextValue);
        }}
        icon={'person-outline'}
        placeholder={'Enter your phone number'}
      />
      <TlaInput
        value={password}
        onTextChange={nextValue => {
          setPassword(nextValue);
        }}
        icon={'lock-outline'}
        placeholder={'Enter your password'}
        isPasswordInput={true}
      />
      <TlaButton onPress={handleSignIn} text={'LOGIN'} loading={isLoading} />
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    authUser: state.loginReducer.authUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleAuth: data => dispatch(handleAuthentication(data)),
  };
};

export default connect(null, mapDispatchToProps)(SingInForm);
const styles = StyleSheet.create({
  card: {
    borderWidth: 0,
  },
  container: {
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  btnLogin: {
    backgroundColor: primary,
    width: 132,
    borderRadius: 23,
  },
  btnLoginText: {
    textTransform: 'capitalize',
    color: 'white',
  },
  errorContainer: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: 'red',
    borderRadius: 20,
  },
  errorText: {
    color: white,
  },
});
