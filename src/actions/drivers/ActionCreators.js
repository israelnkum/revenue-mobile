import { Types } from "./Types";

/**
 *
 * @returns {{id, type: string}}
 * @param payload
 */
export function driverDetails(payload) {
  return {
    type: Types.GET_DRIVER,
    payload,
  };
}

/**
 *
 * @param vehicles
 * @returns {{id, type: string}}
 */
export function driverVehicles(vehicles) {
  return {
    type: Types.GET_DRIVER_VEHICLES,
    vehicles,
  };
}

/**
 *
 * @param payload
 * @returns {{payload, type: string}}
 */
export function editDriver(payload) {
  return {
    type: Types.UPDATE_DRIVER,
    payload,
  };
}

/**
 *
 * @param payload
 * @returns {{payload, type: string}}
 */
export function addDriver(payload) {
  return {
    type: Types.NEW_DRIVER,
    payload,
  };
}


export function paymentHistory(payments) {
  return {
    type: Types.GET_PAYMENT_HISTORY,
    payments,
  };
}


export function updatePaymentDetail(payment) {
  return {
    type: Types.UPDATE_PAYMENT_DETAIL,
    payment,
  };
}
