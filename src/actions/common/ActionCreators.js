import { Types } from "./Types";

export const getVehicles = vehicles => {
  return {
    type: Types.GET_VEHICLES,
    vehicles,
  };
};

export const getDistricts = districts => {
  return {
    type: Types.GET_DISTRICTS,
    districts,
  };
};

export const getAvailableNetworks = networks => {
  return {
    type: Types.GET_AVAILABLE_NETWORKS,
    networks,
  };
};

export const checkCustomer = payload => {
  return {
    type: Types.CHECK_CUSTOMER,
    payload,
  };
};

export const newPayment = payload => {
  return {
    type: Types.NEW_PAYMENT,
    payload,
  };
};
