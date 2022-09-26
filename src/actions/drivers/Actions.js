import api from '../../utils/api';
import {
  addDriver,
  driverDetails,
  driverVehicles,
  editDriver,
  paymentHistory,
  updatePaymentDetail,
} from './ActionCreators';

/**
 * Store a newly created resource in storage.
 * @param driver
 * @returns {function(*): Promise<unknown>}
 */
export const addNewDriver = driver => dispatch => {
  return new Promise((resolve, reject) => {
    api()
      .post('/drivers', driver)
      .then(res => {
        dispatch(addDriver(res.data));
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

/**
 * Display a listing of the resource.
 * @returns {function(*): Promise<unknown>}
 */
export const getDriverVehicle = driverId => dispatch => {
  return new Promise((resolve, reject) => {
    api()
      .get(`/drivers/${driverId}/vehicles`)
      .then(res => {
        dispatch(driverVehicles(res.data));
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

/**
 * Display a listing of the resource.
 * @returns {function(*): Promise<unknown>}
 */
export const getDriverUsingVehicle = vehicleNumber => dispatch => {
  return new Promise((resolve, reject) => {
    api()
      .get(`/drivers/${vehicleNumber}`)
      .then(res => {
        dispatch(driverDetails(res.data.driver));
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

/**
 * Update the specified resource in storage.
 * @param driver
 * @returns {function(*): Promise<unknown>}
 */
export const updateDriver = driver => dispatch => {
  return new Promise((resolve, reject) => {
    api()
      .put(`/drivers/${driver.id}`, driver)
      .then(res => {
        dispatch(editDriver(res.data));
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const getPaymentHistory = driverId => dispatch => {
  return new Promise((resolve, reject) => {
    api()
      .get(`/drivers/${driverId}/payment-history`)
      .then(res => {
        dispatch(paymentHistory(res.data));
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const getCollectionHistory = userId => dispatch => {
  return new Promise((resolve, reject) => {
    api()
      .get(`/staff/${userId}/collections-history`)
      .then(res => {
        dispatch(paymentHistory(res.data));
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const handleUpdatePaymentDetail = payment => dispatch => {
  return new Promise((resolve, reject) => {
    api()
      .post(`/check/transaction/status/${payment.transactionId}`)
      .then(res => {
        api()
          .put(`/payments/${payment.id}`, {
            status: res.data.status,
          })
          .then(res => {
            dispatch(updatePaymentDetail(res.data));
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      })
      .catch(err => {
        reject(err);
      });
  });
};
