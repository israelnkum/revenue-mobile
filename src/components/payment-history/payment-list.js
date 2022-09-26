import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import PaymentItem from './payment-item';
import {connect} from 'react-redux';
import NoData from '../commons/no-data';
import {
  getCollectionHistory,
  getPaymentHistory,
} from '../../actions/drivers/Actions';
import TlaLoader from '../commons/tla-loader';

const PaymentList = props => {
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const {paymentHistory, payments, driverId, collectionHistory, userType} =
    props;

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    (userType === 'driver'
      ? paymentHistory(driverId)
      : collectionHistory(driverId)
    )
      .then(() => setRefreshing(false))
      .catch(err => {
        // console.log(err.response.data);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    (userType === 'driver'
      ? paymentHistory(driverId)
      : collectionHistory(driverId)
    )
      .then(() => {
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
      });
  }, []);

  const renderItem = ({item}) => <PaymentItem payment={item} />;

  return (
    <>
      <TlaLoader visible={loading} />
      {payments.length <= 0 ? (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <NoData message={'Oops! No data available'} />
          <TouchableOpacity onPress={onRefresh}>
            <Text style={{fontSize: 15, marginTop: 25}}>
              Click here to refresh
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          refreshing={refreshing}
          onRefresh={onRefresh}
          data={payments}
          renderItem={renderItem}
        />
      )}
    </>
  );
};

const mapStateToProps = state => {
  const user = state.loginReducer.authUser.user;
  return {
    userType: user.type,
    driverId: user.type === 'staff' ? user.id : user.driverId,
    payments: state.driverReducer.payments,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    paymentHistory: driverId => dispatch(getPaymentHistory(driverId)),
    collectionHistory: userId => dispatch(getCollectionHistory(userId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PaymentList);
