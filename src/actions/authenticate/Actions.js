import api from '../../utils/api';
import {authenticate, removeAuth, signUp} from './ActionCreators';

export const handleAuthentication = data => dispatch => {
  return new Promise((resolve, reject) => {
    api()
      .post('/sanctum/token', data)
      .then(res => {
        dispatch(authenticate(res.data));
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const handleLogout = () => dispatch => {
  return new Promise((resolve, reject) => {
    api()
      .post('/mobile/logout')
      .then(res => {
        dispatch(removeAuth());
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const handleSignUp = data => dispatch => {
  return new Promise((resolve, reject) => {
    api()
      .post('/common/drivers/signup', data)
      .then(res => {
        dispatch(signUp(res.data));
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });
};
