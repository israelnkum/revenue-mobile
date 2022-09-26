import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import PaymentList from './payment-list';
import {primary} from '../../utils/colors';
import {connect} from 'react-redux';

const PaymentHistory = props => {
  const {paymentDetail} = props;
  return (
    <SafeAreaView style={styles.container}>
      {paymentDetail.totalPayment > 0 && (
        <View style={styles.info}>
          <Text style={styles.title}>
            Count:
            <Text style={styles.subTitle}>{paymentDetail.paymentCount}</Text>
          </Text>

          <Text style={styles.title}>
            Amount:
            <Text style={styles.subTitle}>
              GHc {paymentDetail.totalPayment}
            </Text>
          </Text>
        </View>
      )}
      <PaymentList />
    </SafeAreaView>
  );
};
const mapStateToProps = state => {
  return {
    paymentDetail: state.loginReducer.authUser.payments,
  };
};
export default connect(mapStateToProps)(PaymentHistory);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  info: {
    padding: 20,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: primary,
  },
  subTitle: {
    fontWeight: 'bold',
  },
});
