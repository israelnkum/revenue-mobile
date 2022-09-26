import {Dimensions, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import AccessCamera from './access-camera';
import {getDriverUsingVehicle} from '../../../actions/drivers/Actions';
import PropTypes from 'prop-types';

const CollectToe = props => {
  const {getVehicle, moveToProvider} = props;
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [Start_Scanner, setScanning] = useState(false);

  useEffect(() => {
    if (vehicleNumber !== '') {
      getVehicle(vehicleNumber)
        .then(res => {
          // console.log(res.data.driver.vehicle);
          moveToProvider(res.data.driver.vehicle);
        })
        .catch(err => {
          setScanning(false);
        });
    }
  }, [vehicleNumber]);
  return (
    <View
      style={{
        height: Dimensions.get('window').height,
      }}>
      <AccessCamera
        setStartScanning={setScanning}
        startScanning={Start_Scanner}
        vehicleNumber={vehicleNumber}
        setVehicleNumber={setVehicleNumber}
      />
    </View>
  );
};

CollectToe.propTypes = {
  getVehicle: PropTypes.func,
  moveToProvider: PropTypes.func,
};
const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    getVehicle: vehicleNumber => dispatch(getDriverUsingVehicle(vehicleNumber)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectToe);
