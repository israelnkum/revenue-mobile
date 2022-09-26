import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {gray, white} from '../../utils/colors';
import ProfilePicture from '../commons/profile-picture';
import {connect} from 'react-redux';
import {handleUpdatePaymentDetail} from '../../actions/drivers/Actions';

const PaymentItem = props => {
  const {updatePaymentDetail, payment} = props;
  const [loading, setLoading] = useState(true);

  function updateStatus() {
    updatePaymentDetail({
      id: payment.id,
      transactionId: payment.transactionId,
    }).then(() => {
      setLoading(false);
    });
  }

  // TODO:: WORK ON AUTO UPDATE OF TRANSACTION STATUS
  // useEffect(() => {
  //   setLoading(true);
  //   const interval = setInterval(() => {
  //     payment.status.toLowerCase() === 'processing payment' && updateStatus();
  //   }, 30000);
  //
  //   return () => clearInterval(interval);
  // }, []);
  return (
    <View style={styles.item}>
      <View style={styles.itemContent}>
        <View>
          <ProfilePicture />
        </View>
        <View style={{flexGrow: 1, marginLeft: 20}}>
          <View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Amount:</Text>
              <Text style={styles.subtitle}> GHc{payment.amountPaid}</Text>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Provider:</Text>
              <Text style={styles.subtitle}> {payment.provider}</Text>
            </View>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Vehicle:</Text>
            <Text style={styles.subtitle}>{payment.vehicle.toUpperCase()}</Text>
          </View>
          <View style={styles.status}>
            <Text style={styles.date}>{payment.date}</Text>
            {/*<TlaIcon name={'radio-button-on'} size={10} />*/}
            <Text style={styles.statusText}>{payment.status}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: white,
    padding: 20,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderWidth: 1,
    borderColor: '#e7e7e7',
  },
  itemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(231,231,231,0.13)',
  },
  title: {
    color: gray,
    fontSize: 12,
  },
  subtitle: {
    color: 'black',
    fontSize: 12,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  statusText: {
    color: 'green',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 9,
  },
  date: {
    color: '#000',
    fontWeight: 'normal',
    textTransform: 'uppercase',
    fontSize: 10,
  },
});

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    updatePaymentDetail: payment =>
      dispatch(handleUpdatePaymentDetail(payment)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentItem);
