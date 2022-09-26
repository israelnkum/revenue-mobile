import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AppLogo from '../commons/app-logo';
import {primary} from '../../utils/colors';
import {connect} from 'react-redux';

function Content(props) {
  const {navigateToHistory, navigateToClaim, navigateToPayToe, userType} =
    props;
  const {middle} = styles;
  return (
    <View style={middle}>
      <AppLogo width={150} height={150} />
      <View>
        <TouchableOpacity onPress={navigateToPayToe}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>
              {userType === 'driver' ? 'Pay' : 'Collect'} TOLL
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToHistory}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>History</Text>
          </View>
        </TouchableOpacity>
        {userType === 'driver' && (
          <TouchableOpacity onPress={navigateToClaim}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Make Claim</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const mapStateToProps = state => {
  return {
    userType: state.loginReducer.authUser.user.type,
  };
};

export default connect(mapStateToProps)(Content);
const styles = StyleSheet.create({
  middle: {
    flex: 0.7,
    backgroundColor: '#fbfbfb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    borderRadius: 19,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: '#FFFFFF',
    shadowColor: 'rgba(82,82,82,0.1)',
    shadowOpacity: 0.2,
    elevation: 6,
    shadowRadius: 19,
    shadowOffset: {width: 12, height: 1},
    marginBottom: 15,
  },
  btnText: {
    textTransform: 'uppercase',
    color: primary,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
