import React from 'react';
import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {handleGetDistricts} from '../../actions/common/Actions';
import {handleSignUp} from '../../actions/authenticate/Actions';
import {gray, primary} from '../../utils/colors';

function SingUpForm(props) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Singup</Text>
      </View>
    </SafeAreaView>
  );
}

const mapStateToProps = state => {
  return {
    districts: state.commonReducer.districts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDistricts: () => dispatch(handleGetDistricts()),
    singUp: data => dispatch(handleSignUp(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SingUpForm);
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    // marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    // paddingLeft: 30,
    // paddingRight: 30
  },
  btnLogin: {
    backgroundColor: primary,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 132,
    borderRadius: 23,
  },
  btnLoginText: {
    textTransform: 'uppercase',
    color: 'white',
  },
  prefix: {
    marginLeft: 10,
    fontWeight: 'bold',
    color: primary,
  },
  disabled: {
    backgroundColor: gray,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
    borderRadius: 15,
    marginBottom: 15,
  },
});
