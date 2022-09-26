import api from '../../utils/api';
import {
  checkCustomer,
  getDistricts,
  getVehicles,
  newPayment,
} from './ActionCreators';

export const handleGetVehicles = data => dispatch => {
  return new Promise((resolve, reject) => {
    api()
      .post('/sanctum/token', data)
      .then(res => {
        dispatch(getVehicles(res.data));
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const handleGetDistricts = () => dispatch => {
  return new Promise((resolve, reject) => {
    api()
      .get('/common/districts')
      .then(res => {
        dispatch(getDistricts(res.data));
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });
};

/*export const handleGetAvailableNetworks = () => dispatch => {
  return new Promise((resolve, reject) => {
    uniWallet()
      .get('/get/available/networks')
      .then(res => {
        dispatch(getAvailableNetworks(res.data));
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });
};*/

export const handleCheckCustomer = data => dispatch => {
  return new Promise((resolve, reject) => {
    api()
      .post('/payments/check-name', data)
      .then(res => {
        dispatch(checkCustomer(res.data));
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const handleAddPayment = data => dispatch => {
  return new Promise((resolve, reject) => {
    api()
      .post('/payments', data)
      .then(res => {
        dispatch(newPayment(res.data));
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};
