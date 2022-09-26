import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ViewPager} from '@ui-kitten/components';
import SelectVehicle from './select-vehicle';
import SelectProviders from './select-providers';
import {TlaButton} from '../commons/form/tla-button';
import SelectDates from './select-dates';
import {getPayableDates} from '../../utils/helpers';
import moment from 'moment';
import {connect} from 'react-redux';
import {handleAddPayment} from '../../actions/common/Actions';
import PropTypes from 'prop-types';
import TlaLoader from '../commons/tla-loader';
import TlaToast from '../commons/tla-toast';
import CollectToe from './collect-toe';

const PayToe = props => {
  const {submitPayment, navigation, userType} = props;
  const [toast, setToast] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const shouldLoadComponent = index => index === selectedIndex;
  const [payableDates, setPayableDates] = useState([]);
  const [dateRange, setSateRange] = useState({});
  const [vehicle, setVehicle] = useState(null);
  const [provider, setProvider] = useState(null);

  const selectVehicle = v => {
    setVehicle(v);
    nextPage();
  };
  const nextPage = () => {
    setSelectedIndex(selectedIndex + 1);
  };

  const handleSetProvider = network => {
    setProvider(network);
    nextPage();
  };

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const log = getPayableDates(
        moment(dateRange.startDate),
        moment(dateRange.endDate),
      );
      setPayableDates(log);
      nextPage();
    }
  }, [dateRange]);

  const completePayment = () => {
    setLoading(true);

    submitPayment({
      payableDates: JSON.stringify(payableDates),
      msisdn: provider.phoneNumber,
      provider: provider.network,
      driverId: vehicle.driverId,
      vehicleId: vehicle.id,
      amount: vehicle.amount * payableDates.length,
    })
      .then(res => {
        setMessage('Payment sent for processing');
        setLoading(false);
        setToast(true);
        navigation.navigate('Dashboard');
      })
      .catch(err => {
        setMessage('Something went wrong, Try again');
        setLoading(false);
      });
  };
  return (
    <View style={styles.container}>
      <TlaLoader visible={loading} />
      <TlaToast visible={toast} setVisible={setToast} message={message} />
      <ViewPager
        swipeEnabled={false}
        selectedIndex={selectedIndex}
        shouldLoadComponent={shouldLoadComponent}
        // onSelect={index => setSelectedIndex(index)}
      >
        {userType === 'staff' ? (
          <CollectToe moveToProvider={id => selectVehicle(id)} />
        ) : (
          <View style={styles.tab}>
            <SelectVehicle selectVehicle={id => selectVehicle(id)} />
          </View>
        )}

        <View style={styles.tab}>
          <SelectProviders
            selectProviders={network => handleSetProvider(network)}
          />
        </View>
        <View style={styles.tab}>
          <SelectDates
            dates={dateRange}
            setDates={nextRange => {
              setSateRange(nextRange);
            }}
          />
        </View>
        <View style={styles.tab}>
          <Text>Day(s) : {payableDates.length}</Text>
          <Text>
            Amount :
            {vehicle !== null ? vehicle.amount * payableDates.length : 0}
          </Text>
          {provider !== null ? (
            <>
              <Text> {`Network: ${provider.network}`}</Text>
              <Text> {`Phone: ${provider.phoneNumber}`}</Text>
              <Text> {`Name: ${provider.name}`}</Text>
              <View style={{marginTop: 20}}>
                <TlaButton
                  onPress={completePayment}
                  text={'Complete Payment'}
                />
              </View>
            </>
          ) : (
            ''
          )}
        </View>
      </ViewPager>

      {selectedIndex > 0 && (
        <TlaButton
          onPress={() => {
            setSelectedIndex(selectedIndex - 1);
          }}
          text={'Previous'}
          type={'basic'}
        />
      )}
      {/*<View style={styles.containerBottom}>
        {selectedIndex > 0 && <TlaButton text={'Prev'} type={'basic'} />}
        <Text>dsd</Text>
      </View>*/}
    </View>
  );
};

PayToe.propTypes = {
  submitPayment: PropTypes.func,
  userType: PropTypes.string,
};
const mapStateToProps = state => {
  return {
    userType: state.loginReducer.authUser.user.type,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    submitPayment: data => dispatch(handleAddPayment(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PayToe);

const styles = StyleSheet.create({
  tab: {
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: '#ececec',
  },
  containerBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
