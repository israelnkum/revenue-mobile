import { Types } from "../actions/drivers/Types";

const initialState = {
  driverDetail: {},
  vehicles: [],
  payments: [],
};

export default function driverReducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_DRIVER:
      return { ...state, driverDetail: action.payload };

    case Types.GET_DRIVER_VEHICLES:
      return { ...state, vehicles: action.vehicles };

    case Types.GET_PAYMENT_HISTORY:
      return { ...state, payments: action.payments };

    case Types.UPDATE_PAYMENT_DETAIL:
      return {
        ...state,
        payments: state.payments.map(payment => {
          return payment.id === action.payment.id ? action.payment : payment;
        }),
      };

    case Types.NEW_DRIVER:
      return {
        ...state,
        drivers: state.drivers.concat(action.payload),
      };

    case Types.UPDATE_DRIVER:
      return {
        ...state,
        drivers: state.drivers.map(driver => {
          return driver.id === action.payload.id ? action.payload : driver;
        }),
      };
    default:
      return state;
  }
}
