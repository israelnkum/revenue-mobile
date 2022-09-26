import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import DashboardFooter from './dashboard-footer';
import Content from './content';
import DashHeader from './dash-header';
import {connect} from 'react-redux';

function Dashboard(props) {
  const {navigation, route, authUser} = props;

  useEffect(() => {}, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({tabBarStyle: {display: 'none'}});
  }, [navigation, route]);

  const paymentHistory = () => {
    navigation.navigate('PaymentHistory');
  };

  const navigateToClaim = () => {
    navigation.navigate('MakeClaim', {driverId: authUser.user.id});
  };

  const navigateToPayToe = () => {
    navigation.navigate('CollectToe');
  };

  const toggleDrawer = () => {
    navigation.navigate('Settings');
  };

  const navigateToHome = () => {
    console.log('going home');
  };

  const {container} = styles;
  return (
    <View style={container}>
      <DashHeader toggleDrawer={toggleDrawer} firstName={authUser.user.name} />
      <Content
        navigateToHistory={paymentHistory}
        navigateToClaim={navigateToClaim}
        navigateToPayToe={navigateToPayToe}
        navigateToHome={navigateToHome}
      />
      <DashboardFooter />
    </View>
  );
}

const mapStateToProps = state => {
  return {
    authUser: state.loginReducer.authUser,
    userType: state.loginReducer.authUser.user.type,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
});
