import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getDriverVehicle } from "../../actions/drivers/Actions";
import { TlaButton } from "../commons/form/tla-button";
import PropTypes from "prop-types";
import SelectionWrapper from "./selection-wrapper";

const SelectVehicle = props => {
  const { vehicles, driverId, driverVehicles, selectVehicle } = props;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    driverVehicles(driverId)
      .then(res => {
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
      });
  }, []);

  return (
    <SelectionWrapper loading={loading} title={"Choose vehicle"}>
      {vehicles.map(vehicle => (
        <TlaButton
          key={vehicle.id}
          onPress={() => {
            selectVehicle(vehicle);
          }}
          text={vehicle.vehicleNumber}
        />
      ))}
    </SelectionWrapper>
  );
};

SelectVehicle.propTypes = {
  selectVehicle: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    vehicles: state.driverReducer.vehicles,
    driverId: state.loginReducer.authUser.user.driverId,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    driverVehicles: driverId => dispatch(getDriverVehicle(driverId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SelectVehicle);
